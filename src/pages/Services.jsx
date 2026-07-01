import { useEffect } from "react";
import { Zap, Shield, Lightbulb, Wrench } from "lucide-react";

const services = [
  {
    icon: <Zap size={22} />,
    title: "EV Chargers & Appliance Wiring",
    desc: "Installation support for home EV chargers, induction stoves, and other high-demand electrical upgrades.",
    details: ["Level 2 EV Charger Installation", "Induction Stove Wiring", "240V Outlet Upgrades", "High-Demand Appliance Circuits", "Garage Electrical"],
    image: "/images/service-ev-chargers.png",
  },
  {
    icon: <Shield size={22} />,
    title: "Panel Upgrades & Service Changes",
    desc: "Panel changeouts, service upgrades, and electrical improvements for safer, more reliable power.",
    details: ["Main Panel Replacement", "Sub-Panel Installation", "Service Upgrades (100A→200A)", "Circuit Breaker Replacement", "Insurance Panel Work"],
    image: "/images/service-panel-upgrades.png",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Lighting, Kitchens & Bath Remodels",
    desc: "Recessed lighting, remodel wiring, outlets, switches, and electrical work for kitchen and bathroom upgrades.",
    details: ["Recessed Lighting", "Kitchen Remodel Wiring", "Bathroom Electrical", "Outlet & Switch Upgrades", "Under-Cabinet Lighting"],
    image: "/images/service-lighting-remodels.png",
  },
  {
    icon: <Wrench size={22} />,
    title: "Repairs, Insurance Work & Smart Devices",
    desc: "General electrical repairs, insurance-related work, cameras, security devices, smart doorbells, and everyday wiring needs.",
    details: ["Electrical Repairs", "Insurance Electrical Work", "Smart Doorbell Installation", "Security Cameras", "Smart Home Wiring"],
    image: "/images/service-repairs-smart.png",
  },
];

export default function Services() {
  useEffect(() => {
    document.title = "Electrical Services | LONGHORN LIGHTING AND ELECTRICAL";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-enter">
      {/* PAGE HERO */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ backgroundColor: "#0D0D0D" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "#C68B3A", fontFamily: "'JetBrains Mono', monospace" }}
          >
            What We Offer
          </p>
          <h1
            className="font-heading font-bold uppercase leading-tight mb-5"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              color: "#F5F2EE",
              letterSpacing: "0.04em",
            }}
          >
            Electrical Services
          </h1>
          <p
            className="text-lg max-w-xl"
            style={{ color: "rgba(245,242,238,0.65)", fontFamily: "'IBM Plex Sans', sans-serif", lineHeight: 1.6 }}
          >
            Simple, dependable electrical work for upgrades, remodels, lighting, repairs, and more.
          </p>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", backgroundColor: "#C68B3A", opacity: 0.35 }} />

      {/* SERVICE CARDS */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F5F2EE", borderTop: "6px solid #B53A2F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="group overflow-hidden transition-all duration-300 hover:shadow-2xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(181,58,47,0.15)",
                  borderTop: "4px solid #B53A2F",
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Duotone overlay — only on hover */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(135deg, rgba(181,58,47,0.55) 0%, rgba(13,13,13,0.7) 100%)",
                    }}
                  />
                  {/* Icon badge */}
                  <div
                    className="absolute top-4 left-4 p-2"
                    style={{ backgroundColor: "#B53A2F", color: "#F5F2EE" }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h2
                    className="font-heading font-bold uppercase tracking-wide text-2xl mb-3"
                    style={{ fontFamily: "'Oswald', sans-serif", color: "#B53A2F" }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="text-base mb-5"
                    style={{ color: "#4A4A4A", fontFamily: "'IBM Plex Sans', sans-serif", lineHeight: 1.6 }}
                  >
                    {service.desc}
                  </p>
                  {/* Details list */}
                  <ul className="flex flex-col gap-1.5">
                    {service.details.map((d, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm"
                        style={{ color: "#2C2C2C", fontFamily: "'IBM Plex Sans', sans-serif" }}
                      >
                        <span
                          className="w-1.5 h-1.5 flex-shrink-0"
                          style={{ backgroundColor: "#B53A2F", borderRadius: 0 }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-heading font-bold uppercase mb-4"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#F5F2EE",
            }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-base mb-10" style={{ color: "rgba(245,242,238,0.6)", fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Call, text, or email Brad directly. No runaround — just straightforward local electrical service.
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
        </div>
      </section>
    </main>
  );
}