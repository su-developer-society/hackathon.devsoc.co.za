"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";

type CSSVars = CSSProperties & { [key: `--${string}`]: string | number };

const lineStyle = (chars: number, delay: string, speed?: string): CSSVars => ({
  "--chars": chars,
  "--delay": delay,
  ...(speed ? { "--speed": speed } : {}),
});

const revealStyle = (delay: string): CSSVars => ({
  "--reveal-delay": delay,
});

export default function Home() {
  const [shouldAnimateTyping, setShouldAnimateTyping] = useState<boolean | null>(null);

  useEffect(() => {
    const storageKey = "devsoc-home-typing-seen-v1";

    try {
      const seen = window.localStorage.getItem(storageKey) === "1";
      if (seen) {
        setShouldAnimateTyping(false);
        return;
      }

      window.localStorage.setItem(storageKey, "1");
      setShouldAnimateTyping(true);
    } catch {
      setShouldAnimateTyping(true);
    }
  }, []);

  const animateTyping = shouldAnimateTyping === true;
  const revealDelay = (delay: string) => (animateTyping ? delay : "0s");

  return (
    <div className="bg">
      <div className={`overlay ${shouldAnimateTyping === null ? "home-pending" : ""}`}>
        <div className="logo">
          <Image src="/logo.svg" alt="Div & Conquer logo" width={180} height={56} priority />
        </div>

        <main className="hero">
          <span
            className={animateTyping ? "type-line title" : "title"}
            style={animateTyping ? lineStyle(13, "0s", "0.7s") : undefined}
          >
            Div & Conquer
          </span>
          <span
            className={animateTyping ? "type-line subtitle" : "subtitle"}
            style={animateTyping ? lineStyle(14, "0.4s", "0.7s") : undefined}
          >
            Hackathon 2026
          </span>
          <span
            className={animateTyping ? "type-line meta" : "meta"}
            style={animateTyping ? lineStyle(24, "0.9s", "0.6s") : undefined}
          >
            Hackathon Opening Event
          </span>
          <span
            className={animateTyping ? "type-line meta" : "meta"}
            style={animateTyping ? lineStyle(65, "1.4s", "1.1s") : undefined}
          >
            Math and Industrial Psychology 1005 at 5:30 Friday, 27 February 2026.
          </span>
          <span
            className={animateTyping ? "type-line meta" : "meta"}
            style={animateTyping ? lineStyle(35, "0.9s", "0.6s") : undefined}
          >
            Submissions Due: Tuesday, 3 March, 11:59 PM
          </span>

          <div className="cta-row" style={revealStyle(revealDelay("2.4s"))}>
            <Link className="cta" href="/rulebook">
              Rulebook
            </Link>
            <Link className="cta ghost" href="/submissions">
              Submissions
            </Link>
            <Link
              className="cta ghost"
              href="https://chat.whatsapp.com/Fw9zgPmZvgSFhSR5otOLpw?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join The WhatsApp Group
            </Link>
            <Link
              className="cta ghost"
              href="https://forms.cloud.microsoft/r/qK55Gz2TbY"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Email Communication
            </Link>
          </div>

          <p className="hero-note" style={revealStyle(revealDelay("2.6s"))}>
            Redesign the SU CS Dept Website, see the <Link href="/rulebook">rule book</Link> for more info.
          </p>
        </main>

        <footer className="footer" style={revealStyle(revealDelay("2.9s"))}>
          <Link href="/privacy">Privacy Policy</Link>
        </footer>
      </div>
    </div>
  );
}
