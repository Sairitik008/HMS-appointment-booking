import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./About.css";

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-grid">
          {/* Text Content */}
          <motion.div
            ref={ref}
            className="about-content fade-in"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="about-title">
              Healing India with <span className="highlight">World-Class Care</span>
            </h2>

            <p className="about-text">
              MaxCare Hospital is not just a healthcare provider — we are a movement to bring international-standard medical treatment to every corner of India.
            </p>

            <p className="about-text">
              Founded in 2025 with a vision to make premium healthcare accessible and affordable, we combine cutting-edge technology, India’s top doctors, and genuine compassion — all under one roof.
            </p>

            <div className="stats-grid">
              <div className="stat">
                <h3>500+</h3>
                <p>Expert Doctors</p>
              </div>
              <div className="stat">
                <h3>50L+</h3>
                <p>Patients Treated</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Emergency Care</p>
              </div>
            </div>
          </motion.div>

          {/* Image + Badge */}
          <div className="about-image-wrapper">
            <div className="about-image">
              <img src="/images/about-hospital.jpg" alt="MaxCare Hospital Building" />
            </div>

            <div className="badge">
              <h4>15+ Years</h4>
              <p>of Excellence in Healthcare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}