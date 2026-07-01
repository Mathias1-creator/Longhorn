import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      setHidden(current > 80 && current > lastScrollY.current);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isDark = location.pathname === "/" || location.pathname === "/contact";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "#FFFFFF",

        borderBottom: "1px solid rgba(198,139,58,0.2)",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" aria-label="Longhorn Lighting and Electrical — Home" className="flex-shrink-0">
            <Logo dark size="sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-heading font-medium uppercase tracking-widest text-sm transition-colors duration-200"
                style={{
                  color:
                    location.pathname === link.path ? "#B53A2F" : "#0D0D0D",
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "0.12em",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+14155955987"
              className="cta-btn px-6 text-sm"
              style={{
                backgroundColor: "#B53A2F",
                color: "#F5F2EE",
                minHeight: "44px",
              }}
            >
              Call Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{ color: "#0D0D0D" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "#0D0D0D",
            borderTop: "1px solid rgba(198,139,58,0.3)",
          }}
        >
          <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-3 font-heading font-medium uppercase tracking-widest text-sm transition-colors"
                style={{
                  color:
                    location.pathname === link.path ? "#C68B3A" : "#F5F2EE",
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: "0.12em",
                  borderBottom: "1px solid rgba(198,139,58,0.15)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+14155955987"
              className="cta-btn mt-3 w-full text-sm"
              style={{ backgroundColor: "#B53A2F", color: "#F5F2EE" }}
            >
              Call Now — (415) 595-5987
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}