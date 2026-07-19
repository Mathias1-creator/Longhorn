import { useEffect } from "react";
import { Phone, MessageSquare, Mail, Clock, MapPin } from "lucide-react";

const contactActions = [
  {
    icon: <Phone size={28} />,
    label: "Call Brad",
    detail: "(415) 595-5987",
    href: "tel:+14155955987",
    bg: "#B53A2F",
    textColor: "#F5F2EE",
    hoverBg: "#9B2E23",
    desc: "Direct line — speak with Brad",
  },
  {
    icon: <MessageSquare size={28} />,
    label: "Text Brad",
    detail: "(415) 595-5987",
    href: "sms:+14155955987",
    bg: "#0D0D0D",
    textColor: "#F5F2EE",
    hoverBg: "#1a1a1a",
    borderColor: "#C68B3A",
    desc: "Emergency 24/7",
  },
  {
    icon: <Mail size={28} />,
    label: "Email Brad",
    detail: "sfcowboy415@gmail.com",
    href: "mailto:sfcowboy415@gmail.com",
    bg: "#0D0D0D",
    textColor: "#C68B3A",
    hoverBg: "#1a1a1a",
    borderColor: "rgba(198,139,58,0.4)",
    desc: "For project inquiries and quotes",
  },
];

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | LONGHORN LIGHTING AND ELECTRICAL";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-enter" style={{ backgroundColor: "#0D0D0D", minHeight: "100vh" }}>
      {/* Header space */}
      <div className="pt-24 md:pt-32" />

      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: "#B53A2F", fontFamily: "'JetBrains Mono', monospace" }}
        >
          Direct Contact
        </p>
        <h1
          className="font-heading font-bold uppercase leading-tight"
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            color: "#F5F2EE",
            letterSpacing: "0.04em",
          }}
        >
          Get in Touch
        </h1>
        <p
          className="text-lg mt-4 max-w-xl"
          style={{ color: "rgba(245,242,238,0.55)", fontFamily: "'IBM Plex Sans', sans-serif", lineHeight: 1.6 }}
        >
          Call, text, or email Brad directly. No forms, no waiting — just straight to the source.
        </p>
      </div>

      {/* DIVIDER */}
      <div style={{ height: "1px", backgroundColor: "#C68B3A", opacity: 0.3 }} />

      {/* RED ACCENT STRIP */}
      <div style={{ height: "6px", backgroundColor: "#B53A2F" }} />

      {/* THREE ACTION BARS */}
      <div className="flex flex-col">
        {contactActions.map((action, i) => (
          <a
            key={i}
            href={action.href}
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 md:px-16 py-8 md:py-12 transition-all duration-200"
            style={{
              backgroundColor: action.bg,
              border: action.borderColor ? `1px solid ${action.borderColor}` : "none",
              borderTop: i > 0 ? `1px solid rgba(198,139,58,0.2)` : "none",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = action.hoverBg; e.currentTarget.style.transform = "translateY(2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = action.bg; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div className="flex items-center gap-5 mb-2 sm:mb-0">
              <span style={{ color: action.textColor === "#F5F2EE" && action.bg !== "#B53A2F" ? "#C68B3A" : action.textColor }}>
                {action.icon}
              </span>
              <div>
                <p
                  className="font-heading font-bold uppercase text-3xl md:text-4xl leading-none"
                  style={{ fontFamily: "'Oswald', sans-serif", color: action.textColor, letterSpacing: "0.06em" }}
                >
                  {action.label}
                </p>
                <p
                  className="text-sm mt-1"
                  style={{
                    color: action.textColor === "#C68B3A" ? "rgba(198,139,58,0.7)" : "rgba(245,242,238,0.45)",
                    fontFamily: "'IBM Plex Sans', sans-serif",
                  }}
                >
                  {action.desc}
                </p>
              </div>
            </div>
            <span
              className="font-heading font-medium text-lg md:text-xl tracking-wide"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: action.textColor === "#C68B3A" ? "#C68B3A" : "rgba(245,242,238,0.7)",
                fontSize: action.detail.includes("@") ? "clamp(0.75rem, 2vw, 1.1rem)" : undefined,
              }}
            >
              {action.detail}
            </span>
          </a>
        ))}
      </div>

      {/* DIVIDER */}
      <div style={{ height: "1px", backgroundColor: "#C68B3A", opacity: 0.3 }} />

      {/* HOURS + SERVICE AREAS */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ borderTop: "6px solid #B53A2F" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Hours */}
          <div
            className="p-8"
            style={{
              backgroundColor: "rgba(245,242,238,0.04)",
              border: "1px solid rgba(198,139,58,0.25)",
              borderTop: "3px solid #B53A2F",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock size={20} color="#C68B3A" />
              <h2
                className="font-heading font-bold uppercase tracking-wide text-xl"
                style={{ fontFamily: "'Oswald', sans-serif", color: "#F5F2EE" }}
              >
                Business Hours
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid rgba(198,139,58,0.15)" }}>
                <span className="text-sm" style={{ color: "rgba(245,242,238,0.6)", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  Monday – Friday
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#F5F2EE", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  7:00 AM – 5:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid rgba(198,139,58,0.15)" }}>
                <span className="text-sm" style={{ color: "rgba(245,242,238,0.6)", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  Saturday – Sunday
                </span>
                <span className="text-sm" style={{ color: "rgba(245,242,238,0.35)", fontFamily: "'JetBrains Mono', monospace" }}>
                  Closed
                </span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm" style={{ color: "rgba(245,242,238,0.6)", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                  Emergency
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "#C68B3A", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  24/7
                </span>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div
            className="p-8"
            style={{
              backgroundColor: "rgba(245,242,238,0.04)",
              border: "1px solid rgba(198,139,58,0.25)",
              borderTop: "3px solid #C68B3A",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={20} color="#C68B3A" />
              <h2
                className="font-heading font-bold uppercase tracking-wide text-xl"
                style={{ fontFamily: "'Oswald', sans-serif", color: "#F5F2EE" }}
              >
                Service Areas
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              {["San Francisco", "Bernal Heights", "Noe Valley", "Mission District", "Potrero Hill", "Glen Park"].map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 py-2"
                  style={{ borderBottom: "1px solid rgba(198,139,58,0.15)" }}
                >
                  <span
                    className="w-1.5 h-1.5 flex-shrink-0"
                    style={{ backgroundColor: "#B53A2F", borderRadius: 0 }}
                  />
                  <span
                    className="font-heading font-medium uppercase tracking-wide text-base"
                    style={{ fontFamily: "'Oswald', sans-serif", color: "#F5F2EE" }}
                  >
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust line */}
        <div className="mt-12 text-center">
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "rgba(198,139,58,0.55)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Licensed &amp; Bonded&nbsp;·&nbsp;Lic #1122626&nbsp;·&nbsp;Small Jobs Welcome
          </p>
        </div>
      </section>
    </main>
  );
}