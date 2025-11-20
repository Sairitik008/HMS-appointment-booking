// src/config/nodemailer.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load .env (safe to call multiple times)
dotenv.config();

// CORRECT METHOD: createTransport (single "p") — works on all Nodemailer versions
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false, // Use true for port 465
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: true, // Secure in production
    },
});

// Verify connection (async, non-blocking)
transporter.verify()
    .then(() => {
        console.log("✅ SMTP connected successfully — ready to send emails!");
    })
    .catch((error) => {
        console.error("❌ SMTP connection failed:", error.message);
        console.warn("💡 Check .env: EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS");
        // Don't crash the server — emails will fail gracefully later
    });

// Export as default for easy import
export default transporter;