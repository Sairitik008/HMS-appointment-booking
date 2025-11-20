// src/services/emailService.js
import transporter from "../config/nodemailer.js";  // ← default import (no {})
// OR if you prefer named: export { transporter } in nodemailer.js and use:
// import { transporter } from "../config/nodemailer.js";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sendAppointmentEmail = async (data) => {
    const templatePath = path.join(__dirname, "../templates/appointmentEmail.html");
    let html = fs.readFileSync(templatePath, "utf-8");

    const timestamp = new Date().toLocaleString();

    html = html
        .replace(/{{name}}/g, data.name)
        .replace(/{{email}}/g, data.email)
        .replace(/{{phone}}/g, data.phone)
        .replace(/{{date}}/g, data.date)
        .replace(/{{department}}/g, data.department)
        .replace(/{{message}}/g, data.message || "No message")
        .replace(/{{timestamp}}/g, timestamp);

    await transporter.sendMail({
        from: `"Hospital" <${process.env.EMAIL_FROM}>`,
        to: process.env.ADMIN_EMAIL,
        replyTo: data.email,
        subject: `New Appointment - ${data.name}`,
        html,
    });
};