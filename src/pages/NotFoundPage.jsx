
import { Link } from "react-router-dom";
import { ArrowLeft, Globe2 } from "lucide-react";

import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <section className="sge-not-found">
      <div className="sge-not-found-content">

        <div className="sge-not-found-icon">
          <Globe2 size={40} strokeWidth={1.3} />
        </div>

        <span className="sge-not-found-code">
          404
        </span>

        <div className="sge-not-found-label">
          PAGE NOT FOUND
        </div>

        <h1>Looks Like You've Lost Your Way.</h1>

        <p>
          The page you are looking for may have
          been moved or is currently unavailable.
          Let's get you back to Sharanga Global Exports.
        </p>

        <Link
          to="/"
          className="sge-not-found-button"
        >
          <ArrowLeft size={18} />
          Return to Homepage
        </Link>

      </div>
    </section>
  );
}
