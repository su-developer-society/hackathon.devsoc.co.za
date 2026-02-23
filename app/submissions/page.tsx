import Link from "next/link";
import { ArrowLeft, Download, FileText, Mail, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Submissions | Div & Conquer Hackathon 2026",
  description: "Submission instructions and official form for the DevSoc Hackathon 2026.",
};

export default function SubmissionsPage() {
  return (
    <div className="bg submissions-bg">
      <div className="submissions-scroll">
        <div className="submissions-wrap">
          <header className="sub-header">
            <Link href="/" className="sub-back">
              <ArrowLeft size={14} /> Back to Home
            </Link>
            <h1 className="sub-title">Hackathon Submission Form</h1>
            <p className="sub-lede">Stellenbosch University Developer Society 2026 Hackathon Submission</p>
          </header>

          <section className="sub-card sub-deadline">
            <div className="sub-card-head">
              <Mail size={18} />
              <h2>Submission Deadline</h2>
            </div>
            <p>
              This form <strong>must be emailed to devsoc@sun.ac.za by 11:59 PM on 3 March 2026</strong>.
            </p>
            <p className="sub-note">No submissions will be accepted after 3 March 2026 at 11:59 PM.</p>
          </section>

          <section className="sub-card">
            <div className="sub-card-head">
              <Download size={18} />
              <h2>Download the Official Form</h2>
            </div>
            <p>Complete the official PDF and email it from any team member&apos;s student email address.</p>
            <div className="sub-actions">
              <a
                className="sub-btn"
                href="/hackathon-submission-form-2026.pdf"
                download
              >
                <Download size={16} /> Download Submission Form PDF
              </a>
            </div>
          </section>

          <section className="sub-card">
            <div className="sub-card-head">
              <ShieldCheck size={18} />
              <h2>Important Information You Must Fill In</h2>
            </div>

            <h3>Team Details</h3>
            <ul>
              <li>Team name</li>
              <li>Team participants (minimum 1, maximum 4 people)</li>
              <li>Full name and student email for participants</li>
              <li>Production domain (live link to your website submission)</li>
            </ul>

            <h3>Tech Stack Section</h3>
            <p>Fill out either the <strong>Hosting Platforms</strong> section or the <strong>CMS Platforms</strong> section, based on your submission type.</p>
            <ul>
              <li><strong>Do not fill both.</strong> If options are selected in both sections, the submission is invalid.</li>
            </ul>

            <h3>Hosting Platforms (if applicable)</h3>
            <ul>
              <li>Provide a GitHub repository link.</li>
              <li>Repository must be public by <strong>11:00 AM on 4 March 2026</strong>.</li>
              <li>Select platform used: GitHub Pages, Cloudflare Pages, or Vercel.</li>
              <li>If Cloudflare Pages or Vercel, include the framework used.</li>
            </ul>

            <h3>CMS Platforms (if applicable)</h3>
            <ul>
              <li>Select one platform: WordPress or Drupal.</li>
              <li>Both are DevSoc-provided self-hosted options.</li>
            </ul>
          </section>

          <section className="sub-card">
            <div className="sub-card-head">
              <FileText size={18} />
              <h2>Quick Links</h2>
            </div>
            <ul>
              <li>
                Rulebook: <a href="https://hackathon.devsoc.co.za/rulebook" target="_blank" rel="noopener noreferrer">https://hackathon.devsoc.co.za/rulebook</a>
              </li>
              <li>
                Submissions Page: <a href="https://hackathon.devsoc.co.za/submissions" target="_blank" rel="noopener noreferrer">https://hackathon.devsoc.co.za/submissions</a>
              </li>
              <li>
                Queries: <a href="mailto:devsoc@sun.ac.za">devsoc@sun.ac.za</a>
              </li>
            </ul>
          </section>

          <footer className="sub-footer">
            <Link href="/rulebook">View Rulebook</Link>
            <span className="sub-dot" />
            <a href="mailto:devsoc@sun.ac.za">devsoc@sun.ac.za</a>
          </footer>
        </div>
      </div>
    </div>
  );
}
