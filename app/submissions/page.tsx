import Link from "next/link";

export const metadata = {
  title: "Submissions | Div & Conquer Hackathon 2026",
};

export default function SubmissionsPage() {
  return (
    <div className="bg">
      <div className="overlay page-shell">
        <h1 className="page-title">Submissions</h1>
        <p className="page-lede">
          Submit your project links, demos, and documentation here once hacking begins. Submission instructions will
          appear on this page.
        </p>
        <div className="page-nav">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
