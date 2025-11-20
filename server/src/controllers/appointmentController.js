import { sendAppointmentEmail } from "../services/emailService.js";

export const submitAppointment = async (req, res) => {
    try {
        const data = req.body;
        await sendAppointmentEmail(data)
        res.json({
            success: true,
            message: 'Appointment request sent successfully',
        });

    } catch (error) {
        console.error("Submission failed", error);
        res.status(500).json({
            success: false,
            message: "Failed to send . Please try again",
        });
    }
};