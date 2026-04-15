/**
 * Editorial section marker — small numbered tag + eyebrow.
 * Used at the top of every narrative section. Ships as inline-flex
 * so parent containers can center it via `flex justify-center` if needed.
 */
export default function SectionTag({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="inline-flex items-baseline gap-4">
      <span
        className="italic text-brand-light text-base leading-none"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {number}
      </span>
      <span
        className="block h-px w-8 bg-brand-border translate-y-[-3px]"
        aria-hidden
      />
      <span className="text-[11px] uppercase tracking-[0.28em] text-brand-primary font-semibold">
        {label}
      </span>
    </div>
  );
}
