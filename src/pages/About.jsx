import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Award, Users, Zap, MapPin } from "lucide-react";

const PANEL_IMAGE = import.meta.env.BASE_URL + "images/about-panel.png";

const trustBadges = [
{ icon: <Award size={20} />, label: "Licensed & Bonded · Lic #1122626" },
{ icon: <Zap size={20} />, label: "25 Years Experience" },
{ icon: <Users size={20} />, label: "Small Jobs Welcome" },
{ icon: <MapPin size={20} />, label: "Local Small Business" }];


export default function About() {
  useEffect(() => {
    document.title = "About Brad | LONGHORN LIGHTING AND ELECTRICAL";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-enter">
      {/* PAGE HERO */}
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ backgroundColor: "#0D0D0D" }}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "#C68B3A", fontFamily: "'JetBrains Mono', monospace" }}>
            
            The Craftsman
          </p>
          <h1
            className="font-heading font-bold uppercase leading-tight"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              color: "#F5F2EE",
              letterSpacing: "0.04em"
            }}>
            
            About Brad
          </h1>
        </div>
      </section>

      <div style={{ height: "1px", backgroundColor: "#C68B3A", opacity: 0.35 }} />

      {/* MAIN ABOUT CONTENT */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F5F2EE", borderTop: "6px solid #B53A2F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Copy */}
            <div>
              {/* "25 Years of Experience" badge */}
              <div className="flex items-center gap-5 mb-8">
                <span
                  className="font-heading font-bold leading-none select-none"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "clamp(4rem, 10vw, 7rem)",
                    color: "#B53A2F",
                    lineHeight: 1,
                  }}
                >
                  25
                </span>
                <div style={{ borderLeft: "3px solid #C68B3A", paddingLeft: "1.25rem" }}>
                  <p
                    className="font-heading font-bold uppercase"
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                      color: "#0D0D0D",
                      letterSpacing: "0.08em",
                      lineHeight: 1.2,
                    }}
                  >
                    Years of<br />Experience
                  </p>
                </div>
              </div>

              <p
                className="text-lg mb-6 leading-relaxed"
                style={{ color: "#2C2C2C", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                
                LONGHORN LIGHTING AND ELECTRICAL is led by Brad Long, a local electrician with 25 years of hands-on experience. Brad serves San Francisco — concentrating in Bernal Heights, Noe Valley, the Mission District, Potrero Hill, and Glen Park — with reliable electrical work and straightforward communication.
              </p>
              <p
                className="text-lg mb-10 leading-relaxed"
                style={{ color: "#2C2C2C", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                
                As a small business, Brad is able to stay flexible, responsive, and focused on the needs of local homeowners and businesses. Whether it's an EV charger, panel upgrade, recessed lighting, remodel wiring, smart device, or a small electrical fix, the goal is simple: dependable work done right.
              </p>

              {/* Pull quote */}
              <blockquote
                className="border-l-4 pl-6 py-2 my-8"
                style={{ borderColor: "#B53A2F" }}>
                
                <p
                  className="font-heading font-bold uppercase text-2xl md:text-3xl leading-tight"
                  style={{ fontFamily: "'Oswald', sans-serif", color: "#B53A2F", letterSpacing: "0.04em" }}>
                  
                  "If it has wires attached to it, Brad is there."
                </p>
              </blockquote>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-3 mt-10">
                {trustBadges.map((badge, i) =>
                <div
                  key={i}
                  className="flex items-center gap-3 p-4"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(198,139,58,0.25)",
                    borderLeft: "3px solid #B53A2F"
                  }}>
                  
                    <span style={{ color: "#B53A2F" }}>{badge.icon}</span>
                    <span
                    className="font-heading font-medium uppercase text-sm tracking-wide"
                    style={{ fontFamily: "'Oswald', sans-serif", color: "#0D0D0D" }}>
                    
                      {badge.label}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              {/* Main image */}
              <div
                className="overflow-hidden"
                style={{ border: "1px solid rgba(198,139,58,0.3)" }}>
                
                <img src={import.meta.env.BASE_URL + "images/logo.png"}

                alt="Electrical work — Longhorn Lighting and Electrical"
                className="w-full h-full object-cover"
                style={{ maxHeight: "500px" }} />
                
              </div>
              {/* Accent box */}
              















              
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CTA */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-heading font-bold uppercase mb-4"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "#F5F2EE"
            }}>
            
            Work With Brad
          </h2>
          <p className="text-base mb-10" style={{ color: "rgba(245,242,238,0.6)", fontFamily: "'IBM Plex Sans', sans-serif" }}>
            Get in touch directly — call, text, or email for straightforward local electrical service.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+14155955987"
              className="cta-btn px-8 text-sm"
              style={{ backgroundColor: "#B53A2F", color: "#F5F2EE" }}>
              
              Call Brad
            </a>
            <a
              href="sms:+14155955987"
              className="cta-btn px-8 text-sm"
              style={{ backgroundColor: "transparent", color: "#F5F2EE", border: "2px solid #C68B3A" }}>
              
              Text Brad
            </a>
            <Link
              to="/contact"
              className="cta-btn px-8 text-sm"
              style={{ backgroundColor: "transparent", color: "#C68B3A", border: "2px solid rgba(198,139,58,0.5)" }}>
              
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </main>);

}