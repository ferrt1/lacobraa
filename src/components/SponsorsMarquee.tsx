import { SPONSORS } from "@/lib/data";

export default function SponsorsMarquee() {
  const items = [...SPONSORS, ...SPONSORS];
  return (
    <section className="border-y border-line bg-midnight py-6">
      <div className="flex items-center gap-12 overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-12 pr-12">
          {items.map((s, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-xl tracking-wide text-white/15"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
