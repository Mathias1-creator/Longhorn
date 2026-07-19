import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid rgba(198,139,58,0.3)" }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo dark size="md" />
            <p className="text-sm leading-relaxed" style={{ color: "#4A4A4A", fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Licensed &amp; bonded local electrician serving San Francisco, concentrating in Bernal Heights, Noe Valley, the Mission District, Potrero Hill, and Glen Park.
            </p>
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: "#C68B3A", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Licensed &amp; Bonded · Lic #1122626
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3
              className="font-heading font-bold uppercase tracking-widest text-sm mb-1"
              style={{ color: "#0D0D0D", fontFamily: "'Oswald', sans-serif" }}
            >
              Contact Brad
            </h3>
            <a
              href="tel:+14155955987"
              className="text-sm transition-colors hover:text-black"
              style={{ color: "#2C2C2C", fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              (415) 595-5987
            </a>
            <a
              href="mailto:sfcowboy415@gmail.com"
              className="text-sm transition-colors hover:text-black break-all"
              style={{ color: "#2C2C2C", fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              sfcowboy415@gmail.com
            </a>
            <p className="text-sm" style={{ color: "#4A4A4A", fontFamily: "'IBM Plex Sans', sans-serif" }}>
              Mon–Fri: 7:00 AM–5:00 PM<br />
              Emergency: 24/7
            </p>
          </div>

          {/* Navigation + Areas */}
          <div className="flex flex-col gap-3">
            <h3
              className="font-heading font-bold uppercase tracking-widest text-sm mb-1"
              style={{ color: "#0D0D0D", fontFamily: "'Oswald', sans-serif" }}
            >
              Service Areas
            </h3>
            {["San Francisco", "Bernal Heights", "Noe Valley", "Mission District", "Potrero Hill", "Glen Park"].map((area) => (
              <span
                key={area}
                className="text-sm"
                style={{ color: "#4A4A4A", fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                {area}
              </span>
            ))}
            <div className="flex gap-4 mt-2">
              {[
                { label: "Services", path: "/services" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs uppercase tracking-widest transition-colors hover:text-black"
                  style={{ color: "#888888", fontFamily: "'Oswald', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(198,139,58,0.2)" }}
        >
          <p
            className="text-xs"
            style={{ color: "#888888", fontFamily: "'JetBrains Mono', monospace" }}
          >
            © 2026 LONGHORN LIGHTING AND ELECTRICAL. All rights reserved.
          </p>
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "#C68B3A", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Licensed &amp; Bonded · Lic #1122626 · Small Jobs Welcome
          </p>
        </div>
      </div>
    </footer>
  );
}