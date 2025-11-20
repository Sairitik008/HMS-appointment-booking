// src/components/AppointmentForm.jsx
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Calendar, Phone, User, Mail, Stethoscope, MessageSquare } from "lucide-react";
import "./AppointmentForm.css";

export default function AppointmentForm() {
  const ref = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // "idle" | "sending" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState(""); // For backend errors

  const API_URL = import.meta.env.VITE_API_URL; // http://localhost:5000

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent double submission
    if (status === "sending") {
      console.log("Already submitting... blocked double submit");
      return;
    }

    setStatus("sending");
    setErrorMessage("");
    console.log("Sending appointment request...", formData);

    try {
      const response = await axios.post(
        `${API_URL}/api/appointment`,   // Correct endpoint
        formData,
        {
          headers: { "Content-Type": "application/json" },
          timeout: 10000, // 10 second timeout
        }
      );

      console.log("Appointment booked successfully!", response.data);
      setStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        department: "",
        message: "",
      });

      // Auto hide success message after 10 seconds
      setTimeout(() => setStatus("idle"), 10000);
    } catch (err) {
      console.error("Appointment booking failed:", err);

      let message = "Something went wrong. Please try again.";

      if (err.code === "ERR_NETWORK") {
        message = "Cannot connect to server. Check your internet or try later.";
      } else if (err.response?.data?.error) {
        message = err.response.data.error; // Real message from backend
      } else if (err.response?.status === 404) {
        message = "API endpoint not found. Contact admin.";
      } else if (err.response?.status === 500) {
        message = "Server error. Our team is fixing it.";
      }

      setErrorMessage(message);
      setStatus("error");

      // Auto hide error after 10 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 10000);
    }
  };

  return (
    <section id="appointment" className="appointment-section">
      <div className="appointment-wrapper">
        <motion.div
          ref={ref}
          className="appointment-card"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="appointment-header">
            <h2>Book Your Appointment</h2>
            <p>Free consultation • Response within 60 minutes • 24/7</p>
          </div>

          <form onSubmit={handleSubmit} className="appointment-form">
            <div className="form-grid">
              <div className="input-group">
                <User className="input-icon" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <Phone className="input-icon" size={20} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <Calendar className="input-icon" size={20} />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]} // No past dates
                  required
                />
              </div>

              <div className="input-group">
                <Stethoscope className="input-icon" size={20} />
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Oncology</option>
                  <option>Pediatrics</option>
                  <option>Dermatology</option>
                  <option>General Medicine</option>
                  <option>Emergency Care</option>
                </select>
              </div>

              <div className="input-group textarea-group">
                <MessageSquare className="input-icon" size={20} />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Describe your condition (optional)"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending"}
              className="submit-btn"
              whileHover={{ scale: status === "sending" ? 1 : 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>
                {status === "sending" ? "Please Wait..." : "Book Consultation"}
              </span>
              <motion.span className="btn-arrow">→</motion.span>
            </motion.button>

            {/* Success Message */}
            {status === "success" && (
              <motion.div
                className="status-success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Appointment booked! Our team will call you within 1 hour.
              </motion.div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <motion.div
                className="status-error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errorMessage || "Failed to book appointment. Please try again."}
                <br />
                <small>Or call us directly: +91 88888 88888</small>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}