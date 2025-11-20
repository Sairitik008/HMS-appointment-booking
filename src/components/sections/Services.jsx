import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Services.css";

// Icons from lucide-react (you already have it installed)
import { 
  Ambulance, 
  Heart, 
  Brain, 
  Activity, 
  Baby, 
  Radiation 
} from "lucide-react";

const services = [
  { title: "24/7 Emergency Care", Icon: Ambulance },
  { title: "Advanced Cardiac Care", Icon: Heart },
  { title: "Neurology & Neurosurgery", Icon: Brain },
  { title: "Joint Replacement & Orthopedics", Icon: Activity },
  { title: "Pediatrics & Neonatology", Icon: Baby },
  { title: "Comprehensive Cancer Care", Icon: Radiation },
];

export default function Services() {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div
          ref={ref}
          className="section-header fade-in"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Specialties</h2>
          <p className="section-subtitle">
            Advanced treatment with compassionate care
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15 }}
            >
              <div className="service-icon">
                <service.Icon size={48} strokeWidth={1.8} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">
                World-class facilities and expert doctors dedicated to your health.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}