import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Div & Conquer Hackathon 2026",
};

export default function PrivacyPage() {
  return (
    <div className="bg">
      <div className="overlay page-shell">
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-lede">
          We respect your privacy. This event site collects only the information you submit for registration and project
          submissions. Data is used solely for event coordination, communication, judging, and prize fulfillment. We do
          not sell your data. If you need your data updated or deleted, contact the organizing team.
        </p>
        <div className="page-nav">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
