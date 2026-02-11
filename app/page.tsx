import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

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
  return (
    <div className="bg">
      <div className="overlay">
        <div className="logo">
          <Image src="/logo.svg" alt="Div & Conquer logo" width={180} height={56} priority />
        </div>

        <main className="hero">
          <span
            className="type-line title"
            style={lineStyle(13, "0s", "1.1s")}
          >
            Div & Conquer
          </span>
          <span
            className="type-line subtitle"
            style={lineStyle(14, "0.9s", "1.1s")}
          >
            Hackathon 2026
          </span>
          <span
            className="type-line meta"
            style={lineStyle(19, "1.9s", "1s")}
          >
            Friday, 27 February
          </span>
          <span
            className="type-line meta"
            style={lineStyle(36, "2.9s", "1.4s")}
          >
            Math and Industrial Psychology 1005
          </span>

          <div className="cta-row" style={revealStyle("4.8s")}>
            <Link className="cta" href="/rulebook">
              Rulebook
            </Link>
            <Link className="cta ghost" href="/submissions">
              Submissions
            </Link>
          </div>
        </main>

        <footer className="footer" style={revealStyle("5.4s")}>
          <Link href="/privacy">Privacy Policy</Link>
        </footer>
      </div>
    </div>
  );
}
