import Container from "./ui/Container";

interface Props { eyebrow: string; title: string; description: string }

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pb-20 pt-36">
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-ice-300/10 blur-3xl" />
      <Container className="relative">
        <span className="mb-4 inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-300">
          {eyebrow}
        </span>
        <h1 className="max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ice-200">{description}</p>
      </Container>
    </section>
  );
}
