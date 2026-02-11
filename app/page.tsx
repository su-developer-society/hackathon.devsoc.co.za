import Image from "next/image";
import type { CSSProperties } from "react";

const makeStyle = (chars: number, delay: string): CSSProperties => ({
  "--chars": chars,
  "--delay": delay,
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
            style={makeStyle(13, "0s")}
          >
            Div & Conquer
          </span>
          <span
            className="type-line subtitle"
            style={makeStyle(14, "0.9s")}
          >
            Hackathon 2026
          </span>
          <span
            className="type-line meta"
            style={makeStyle(19, "2s")}
          >
            Friday, 27 February
          </span>
          <span
            className="type-line meta"
            style={makeStyle(36, "3.1s")}
          >
            Math and Industrial Psychology 1005
          </span>
        </main>
      </div>
    </div>
  );
}
