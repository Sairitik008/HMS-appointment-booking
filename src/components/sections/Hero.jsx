import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Hero.css";

export default function Hero() {
  const ref = useScrollAnimation();

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <motion.div
          ref={ref}
          className="hero-content fade-in"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">
            Healing India with <span className="highlight">Compassion</span> & <span className="highlight">Precision</span>
          </h1>
          <p className="hero-subtitle">
            World-class healthcare with cutting-edge technology and India's finest doctors.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}>
              Book Appointment
            </button>
            <button className="btn-secondary">Emergency Call</button>
          </div>
        </motion.div>
        <div className="hero-image">
          <img src="/images/hero.jpg" alt="MaxCare Hospital" />
        </div>
      </div>
    </section>
  );
}