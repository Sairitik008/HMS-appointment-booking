import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 — BRAND */}
        <div className="col brand">
          <h2 className="logo">
            MaxCare <span>Hospital</span>
          </h2>

          <p className="tagline">Excellence in Healthcare Since 2025</p>

          <p className="desc">
            A trusted multispecialty hospital delivering advanced clinical care
            with compassion, precision, and expertise.
          </p>

          <div className="social">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
          </div>
        </div>

        {/* COLUMN 2 — LINKS */}
        <div className="col links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#appointment">Book Appointment</a></li>
            <li><a href="#testimonials">Patient Stories</a></li>
          </ul>
        </div>

        {/* COLUMN 3 — CONTACT */}
        <div className="col contact">
          <h3>Contact</h3>

          <div className="item">
            <Phone size={18} />
            <p className="phone-inline">
              +91 98765 43210 &nbsp; | &nbsp; +91 98765 43211
            </p>
          </div>

          <div className="item">
            <Mail size={18} />
            <p>appointments@maxcarehospital.com</p>
          </div>

          <div className="item">
            <MapPin size={18} />
            <p>Sector 62, Noida, Uttar Pradesh 201301</p>
          </div>
        </div>

        {/* COLUMN 4 — EMERGENCY BOX */}
        {/* <div className="col emergency">
          <h3>24/7 Emergency</h3>
          <p>Immediate medical support available</p>

          <a href="tel:+919876543210" className="emg-btn">
            <Phone size={22} />
            <span>+91 98765 43210</span>
            <ArrowRight size={22} />
          </a>
        </div> */}

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 MaxCare Hospital. All Rights Reserved.</p>
        <p className="country">Made in India</p>
      </div>
    </footer>
  );
}
