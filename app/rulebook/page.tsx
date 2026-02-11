import Link from "next/link";

export const metadata = {
  title: "Rulebook | Div & Conquer Hackathon 2026",
};

export default function RulebookPage() {
  return (
    <div className="bg">
      <div className="overlay page-shell">
        <h1 className="page-title">Rulebook</h1>
        <p className="page-lede">
          Coming soon — the official rules, judging criteria, and code of conduct for Div &amp; Conquer Hackathon 2026
          will be published here.
        </p>
        <div className="page-nav">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
