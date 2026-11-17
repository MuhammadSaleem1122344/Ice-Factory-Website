import Link from "next/link";
import { Snowflake } from "lucide-react";
import { site } from "@/lib/site";

export default function Logo({ light = true }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-navy-800 shadow-lg shadow-cyan-500/30">
        <Snowflake className="h-6 w-6 text-white" />
      </span>
      <span className={`site-logo-text min-w-0 leading-tight ${light ? "text-white" : "text-navy-900"}`}>
        <span className="block font-display text-sm font-bold sm:text-base">{site.shortName}</span>
        <span className="mt-0.5 block text-[10px] font-semibold tracking-wide opacity-75 sm:text-xs">and Cold Store · Digri</span>
      </span>
    </Link>
  );
}
