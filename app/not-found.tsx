import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg">
      <div className="overlay page-shell">
        <h1 className="page-title">404 — Page Not Found</h1>
        <p className="page-lede">
          The page you&apos;re looking for isn&apos;t here. Check the URL or head back to the home page.
        </p>
        <div className="page-nav">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
