import { Snowflake } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-5 text-center">
      <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative">
        <Snowflake className="mx-auto h-16 w-16 animate-float text-cyan-300" />
        <h1 className="mt-6 font-display text-7xl font-bold text-white">404</h1>
        <p className="mt-3 text-xl text-ice-200">This page has melted away.</p>
        <p className="mt-2 text-sm text-ice-200/70">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="outline">Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
