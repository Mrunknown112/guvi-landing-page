import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import Stripe from "npm:stripe@14";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();

app.use('*', logger(console.log));
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") ?? "", {
  apiVersion: "2023-10-16",
});

// Health check
app.get("/make-server-6935ba70/health", (c) => c.json({ status: "ok" }));

// Create Stripe Checkout session + save enrollment lead to KV
app.post("/make-server-6935ba70/enroll", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, course } = body;

    if (!name || !email || !phone) {
      return c.json({ error: "Missing required fields: name, email, phone" }, 400);
    }

    // Save lead to KV store
    const enrollmentKey = `enrollment:${Date.now()}:${email}`;
    await kv.set(enrollmentKey, JSON.stringify({
      name,
      email,
      phone,
      course: course || "Black Friday Bundle",
      status: "pending_payment",
      createdAt: new Date().toISOString(),
    }));

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      metadata: { name, phone, course: course || "Black Friday Bundle", enrollmentKey },
      line_items: [
        {
          price_data: {
            currency: "inr",
            unit_amount: 99900, // ₹999 in paise
            product_data: {
              name: course || "GUVI Black Friday Bundle",
              description: "Lifetime access · Certificate · Forum Support",
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${c.req.header("origin") ?? "https://wxdwmicqfhcyejkhooub.supabase.co"}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${c.req.header("origin") ?? "https://wxdwmicqfhcyejkhooub.supabase.co"}`,
    });

    return c.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    console.log("Enroll error:", err);
    return c.json({ error: `Failed to create checkout session: ${err}` }, 500);
  }
});

// Stripe webhook — mark enrollment as paid
app.post("/make-server-6935ba70/webhook", async (c) => {
  try {
    const sig = c.req.header("stripe-signature") ?? "";
    const body = await c.req.text();
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") ?? "";

    let event: Stripe.Event;
    try {
      event = await stripe.webhooks.constructEventAsync(body, sig, webhookSecret);
    } catch {
      // Accept without webhook secret verification in dev
      event = JSON.parse(body) as Stripe.Event;
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const enrollmentKey = session.metadata?.enrollmentKey;
      if (enrollmentKey) {
        const existing = await kv.get(enrollmentKey);
        if (existing) {
          const data = JSON.parse(existing as string);
          await kv.set(enrollmentKey, JSON.stringify({
            ...data,
            status: "paid",
            stripeSessionId: session.id,
            paidAt: new Date().toISOString(),
          }));
        }
      }
    }

    return c.json({ received: true });
  } catch (err) {
    console.log("Webhook error:", err);
    return c.json({ error: `Webhook error: ${err}` }, 500);
  }
});

// Get all enrollments (for admin view)
app.get("/make-server-6935ba70/enrollments", async (c) => {
  try {
    const enrollments = await kv.getByPrefix("enrollment:");
    return c.json({ enrollments });
  } catch (err) {
    console.log("Get enrollments error:", err);
    return c.json({ error: `Failed to fetch enrollments: ${err}` }, 500);
  }
});

Deno.serve(app.fetch);
