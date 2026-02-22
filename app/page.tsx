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
            style={lineStyle(13, "0s", "0.7s")}
          >
            Div & Conquer
          </span>
          <span
            className="type-line subtitle"
            style={lineStyle(14, "0.4s", "0.7s")}
          >
            Hackathon 2026
          </span>
          <span
            className="type-line meta"
            style={lineStyle(30, "0.9s", "0.6s")}
          >
            Starts: Friday, 27 February, 17:30
          </span>
          <span
            className="type-line meta"
            style={lineStyle(36, "1.4s", "0.9s")}
          >
            Math and Industrial Psychology 1005
          </span>
          <span
            className="type-line meta"
            style={lineStyle(1, "0.9s", "0.6s")}
          >
          </span>
          <span
            className="type-line meta"
            style={lineStyle(35, "0.9s", "0.6s")}
          >
            Submissions Due: Tuesday, 3 March, 00:00
          </span>

          <div className="cta-row" style={revealStyle("2.4s")}>
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
        </main>

        <footer className="footer" style={revealStyle("2.9s")}>
          <Link href="/privacy">Privacy Policy</Link>
        </footer>
      </div>
    </div>
  );
}
