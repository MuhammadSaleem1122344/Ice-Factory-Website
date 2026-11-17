"use client";
import { useState } from "react";
import { Snowflake } from "lucide-react";

interface Props { src: string; alt: string; className?: string }

/** Shows the photo; falls back to an ice-themed gradient if the file is missing. */
export default function SmartImage({ src, alt, className = "" }: Props) {
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(src);

  const handleError = () => {
    if (attempt !== "/images/ice_block_1.png") {
      setAttempt("/images/ice_block_1.png");
      return;
    }
    setFailed(true);
  };

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-navy-800 via-navy-900 to-cyan-900 ${className}`}
      >
        <Snowflake className="h-1/4 w-1/4 max-h-24 max-w-24 text-ice-200/50" />
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={attempt} alt={alt} loading="lazy" onError={handleError} className={`object-cover ${className}`} />
  );
}
