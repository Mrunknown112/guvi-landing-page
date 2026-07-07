export default function Button() {
  return (
    <div className="relative rounded-[8px] size-full" data-name="Button">
      <div aria-hidden className="absolute bg-gradient-to-b from-[#56f68f] inset-0 pointer-events-none rounded-[8px] to-[#0ad652]" />
      <div className="content-stretch flex items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Wanted_Sans:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#141415] text-[16px] whitespace-nowrap">Enquire now</p>
      </div>
      <div className="absolute inset-[-1.5px] pointer-events-none rounded-[inherit] shadow-[inset_0px_3px_3px_0px_#cafcdc]" />
      <div aria-hidden className="absolute border-[#71c99c] border-[1.5px] border-solid inset-[-1.5px] pointer-events-none rounded-[9.5px]" />
    </div>
  );
}