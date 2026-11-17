import Reveal from "./Reveal";

interface Props { eyebrow: string; title: string; subtitle?: string; light?: boolean; center?: boolean }

export default function SectionHeading({ eyebrow, title, subtitle, light, center = true }: Props) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="mb-3 inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-700">
        {eyebrow}
      </span>
      <h2 className={`font-display text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-navy-900"}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-base leading-relaxed ${light ? "text-ice-200" : "text-slate-600"}`}>{subtitle}</p>}
    </Reveal>
  );
}
