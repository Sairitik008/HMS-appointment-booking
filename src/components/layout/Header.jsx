import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Services", "About", "Doctors", "Testimonials", "Appointment"];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-content">
        <h1 className="logo">MaxCare</h1>

        <nav className="desktop-nav">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <div className="emergency-contact">
          <Phone size={24} />
          <span>+91 98765 43210</span>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-toggle">
          {mobileOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-menu">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="mobile-link" onClick={() => setMobileOpen(false)}>
              {item}
            </a>
          ))}
          <a href="tel:+919876543210" className="mobile-cta">
            <Phone size={24} /> Emergency Call
          </a>
        </div>
      )}
    </header>
  );
}