import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Quote, Star } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Aarav Patel",
    text: "Saved my father's life during a heart attack. The emergency team responded in under 8 minutes. Truly grateful!",
    rating: 5,
    avatar: "/images/patient1.jpg",
  },
  {
    name: "Neha Singh",
    text: "Dr. Verma performed my knee replacement. I walked without pain after just 3 weeks. Best orthopedic care in India.",
    rating: 5,
    avatar: "/images/patient2.jpg",
  },
  {
    name: "Rohan Gupta",
    text: "World-class treatment at Indian prices. The staff treated us like family. This is the future of healthcare.",
    rating: 5,
    avatar: "/images/patient3.jpg",
  },
];

export default function Testimonials() {
  const ref = useScrollAnimation();

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <motion.div
          ref={ref}
          className="section-header fade-in"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">Real stories from families who trusted MaxCare</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -12 }}
            >
              <Quote className="quote-icon" size={56} />

              <p className="testimonial-text">"{t.text}"</p>

              <div className="patient-info">
                {/* <div className="patient-avatar">
                  <img src={t.avatar} alt={t.name} loading="lazy" />
                </div> */}
                <div className="patient-details">
                  <h4 className="patient-name">{t.name}</h4>
                  <div className="stars">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#f39c12" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}