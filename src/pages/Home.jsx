import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Zap, MapPin, Clock, CheckCircle, ChevronRight, Star } from "lucide-react";

const HERO_IMAGE = import.meta.env.BASE_URL + "images/hero.png";

const valueCards = [
  {
    icon: <CheckCircle size={24} />,
    title: "Small Jobs Welcome",
    desc: "From simple fixes to bigger upgrades, Brad helps with the jobs many larger companies overlook.",
  },
  {
    icon: <Zap size={24} />,
    title: "Fast Local Response",
    desc: "A responsive local electrician focused on clear communication and dependable service.",
  },
  {
    icon: <Clock size={24} />,
    title: "25 Years of Experience",
    desc: "Hands-on electrical experience for remodels, upgrades, repairs, and everyday electrical needs.",
  },
];

// Replace the bracketed placeholder text below with real customer reviews.
// To add a third review, copy one { quote, name, area } block and paste it after the second.
const reviews = [
  {
    quote: "[Paste the first customer review here.]",
    name: "[Customer Name]",
    area: "[Neighborhood]",
  },
  {
    quote: "[Paste the second customer review here.]",
    name: "[Customer Name]",
    area: "[Neighborhood]",
  },
];

const serviceTeaser = [
  { title: "EV Chargers & Appliance Wiring", path: "/services" },
  { title: "Panel Upgrades & Service Changes", path: "/services" },
  { title: "Lighting, Kitchens & Bath Remodels", path: "/services" },
  { title: "Repairs, Insurance Work & Smart Devices", path: "/services" },
];

export default function Home() {
  const tickerRef = useRef(null);

  useEffect(() => {
    document.title = "LONGHORN LIGHTING AND ELECTRICAL | Local Electrician in San Francisco";
  }, []);

  return (
    <main className="page-enter">
      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(13,13,13,0.25) 0%, rgba(13,13,13,0.1) 40%, rgba(13,13,13,0.75) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8"
            style={{ border: "1px solid rgba(198,139,58,0.5)", backgroundColor: "rgba(198,139,58,0.1)" }}
          >
            <MapPin size={14} color="#C68B3A" />
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "#C68B3A", fontFamily: "'JetBrains Mono', monospace" }}
            >
              San Francisco · Bernal Heights · Noe Valley · Mission District · Potrero Hill · Glen Park
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading font-bold uppercase leading-none mb-6"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(2.8rem, 8vw, 7rem)",
              letterSpacing: "0.04em",
              color: "#F5F2EE",
              maxWidth: "900px",
            }}
          >
            If It Has Wires,
            <br />
            <span style={{ color: "#B53A2F" }}>Brad Can Help.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl"
            style={{ color: "rgba(245,242,238,0.75)", fontFamily: "'IBM Plex Sans', sans-serif", lineHeight: 1.6 }}
          >
            Reliable local electrical work for homes and businesses across San Francisco, concentrating in Bernal Heights, Noe Valley, the Mission District, Potrero Hill, and Glen Park.
          </p>

          {/* Trust line */}
          <p
            className="text-sm uppercase tracking-widest mb-10"
            style={{ color: "#C68B3A", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Licensed &amp; Bonded&nbsp;·&nbsp;Lic #1122626&nbsp;·&nbsp;25 Years of Experience
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+14155955987"
              className="cta-btn px-8 text-base"
              style={{ backgroundColor: "#B53A2F", color: "#F5F2EE", minWidth: "220px" }}
            >
              Call Brad
            </a>
          </div>
        </div>

      </section>

      {/* COPPER DIVIDER */}
      <div style={{ height: "1px", backgroundColor: "#C68B3A", opacity: 0.4 }} />

      {/* QUICK VALUE CARDS */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#B53A2F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {valueCards.map((card, i) => (
              <div
                key={i}
                className="p-8 transition-all duration-200 hover:shadow-lg"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderTop: "4px solid #0D0D0D",
                }}
              >
                <div className="mb-4" style={{ color: "#B53A2F" }}>{card.icon}</div>
                <h3
                  className="font-heading font-bold uppercase tracking-wide text-xl mb-3"
                  style={{ fontFamily: "'Oswald', sans-serif", color: "#B53A2F" }}
                >
                  {card.title}
                </h3>
                <p className="text-base" style={{ color: "#4A4A4A", fontFamily: "'IBM Plex Sans', sans-serif", lineHeight: 1.6 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: "#C68B3A", fontFamily: "'JetBrains Mono', monospace" }}
              >
                What We Do
              </p>
              <h2
                className="font-heading font-bold uppercase"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#F5F2EE",
                  letterSpacing: "0.05em",
                }}
              >
                Electrical Services
              </h2>
            </div>
            <Link
              to="/services"
              className="cta-btn px-6 text-sm self-start md:self-auto"
              style={{ backgroundColor: "#B53A2F", color: "#F5F2EE" }}
            >
              See All Services <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceTeaser.map((s, i) => (
              <Link
                key={i}
                to={s.path}
                className="flex items-center justify-between p-5 group transition-all duration-200"
                style={{
                  backgroundColor: "rgba(245,242,238,0.04)",
                  border: "1px solid rgba(198,139,58,0.2)",
                }}
              >
                <span
                  className="font-heading font-medium uppercase tracking-wide text-base"
                  style={{ color: "#F5F2EE", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.06em" }}
                >
                  {s.title}
                </span>
                <ChevronRight size={18} style={{ color: "#B53A2F" }} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-14 md:py-20" style={{ backgroundColor: "#B53A2F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-xs uppercase tracking-widest mb-3"
            style={{ color: "#F5F2EE", fontFamily: "'JetBrains Mono', monospace", opacity: 0.75 }}
          >
            Where We Work
          </p>
          <h2
            className="font-heading font-bold uppercase mb-4"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "#F5F2EE",
            }}
          >
            Serving San Francisco
          </h2>
          <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: "rgba(245,242,238,0.8)", fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Local electrical service for homeowners and businesses across San Francisco.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["San Francisco", "Bernal Heights", "Noe Valley", "Mission District", "Potrero Hill", "Glen Park"].map((area) => (
              <span
                key={area}
                className="px-5 py-2 text-sm uppercase tracking-widest font-medium"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  backgroundColor: "rgba(13,13,13,0.25)",
                  color: "#F5F2EE",
                  letterSpacing: "0.1em",
                  border: "1px solid rgba(245,242,238,0.3)",
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ color: "#C68B3A", fontFamily: "'JetBrains Mono', monospace" }}
            >
              What Customers Say
            </p>
            <h2
              className="font-heading font-bold uppercase"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: "#F5F2EE",
                letterSpacing: "0.05em",
              }}
            >
              Customer Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="p-8 flex flex-col"
                style={{
                  backgroundColor: "rgba(245,242,238,0.04)",
                  border: "1px solid rgba(198,139,58,0.25)",
                  borderTop: "3px solid #C68B3A",
                }}
              >
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="#C68B3A" color="#C68B3A" />
                  ))}
                </div>
                <p
                  className="text-base mb-6 flex-1"
                  style={{ color: "rgba(245,242,238,0.85)", fontFamily: "'IBM Plex Sans', sans-serif", lineHeight: 1.7 }}
                >
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <span
                    className="w-1.5 h-1.5 flex-shrink-0"
                    style={{ backgroundColor: "#B53A2F", borderRadius: 0 }}
                  />
                  <div>
                    <p
                      className="font-heading font-medium uppercase tracking-wide text-base"
                      style={{ fontFamily: "'Oswald', sans-serif", color: "#F5F2EE", letterSpacing: "0.06em" }}
                    >
                      {review.name}
                    </p>
                    <p
                      className="text-xs uppercase tracking-widest mt-1"
                      style={{ color: "#C68B3A", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {review.area}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COPPER DIVIDER */}
      <div style={{ height: "1px", backgroundColor: "#C68B3A", opacity: 0.4 }} />

      {/* FINAL CTA */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-heading font-bold uppercase mb-4"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "#F5F2EE",
            }}
          >
            Need Electrical Help?
          </h2>
          <p className="text-base mb-10" style={{ color: "rgba(245,242,238,0.65)", fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Call, text, or email Brad for local electrical service. Emergency 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+14155955987"
              className="cta-btn px-8 text-sm"
              style={{ backgroundColor: "#B53A2F", color: "#F5F2EE" }}
            >
              Call Now
            </a>
            <a
              href="sms:+14155955987"
              className="cta-btn px-8 text-sm"
              style={{ backgroundColor: "transparent", color: "#F5F2EE", border: "2px solid #C68B3A" }}
            >
              Text Brad
            </a>
            <a
              href="mailto:sfcowboy415@gmail.com"
              className="cta-btn px-8 text-sm"
              style={{ backgroundColor: "transparent", color: "#C68B3A", border: "2px solid rgba(198,139,58,0.5)" }}
            >
              Email Brad
            </a>
          </div>
          <p
            className="mt-10 text-xs uppercase tracking-widest"
            style={{ color: "rgba(198,139,58,0.6)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Licensed &amp; Bonded&nbsp;·&nbsp;Lic #1122626&nbsp;·&nbsp;Small Jobs Welcome
          </p>
        </div>
      </section>
    </main>
  );
}