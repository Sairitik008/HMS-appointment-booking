import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./Doctors.css";

const doctors = [
  {
    name: "Dr. Priya Sharma",
    speciality: "Senior Cardiologist",
    exp: "18+ Years Experience",
    img: "/images/doctor1.jpg",
  },
  {
    name: "Dr. Rajesh Kumar",
    speciality: "Chief Neurologist",
    exp: "22+ Years Experience",
    img: "/images/doctor2.jpg",
  },
  {
    name: "Dr. Anjali Verma",
    speciality: "Orthopedic Surgeon",
    exp: "15+ Years Experience",
    img: "/images/doctor3.jpg",
  },
];

export default function Doctors() {
  const ref = useScrollAnimation();

  return (
    <section id="doctors" className="doctors">
      <div className="doctors-container">
        <motion.div
          ref={ref}
          className="section-header fade-in"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Meet Our Expert Doctors</h2>
          <p className="section-subtitle">
            India’s finest medical minds, dedicated to your health and recovery
          </p>
        </motion.div>

        <div className="doctors-grid">
          {doctors.map((doc, i) => (
            <motion.article
              key={i}
              className="doctor-card"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -20 }}
            >
              <div className="doctor-image">
                <img src={doc.img} alt={`Dr. ${doc.name} - ${doc.speciality}`} loading="lazy" />
              </div>

              <div className="doctor-info">
                <h3 className="doctor-name">{doc.name}</h3>
                <p className="doctor-speciality">{doc.speciality}</p>
                <p className="doctor-exp">{doc.exp}</p>

                <button
                  className="btn-book"
                  onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book Appointment
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}