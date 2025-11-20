import rateLimit from "express-rate-limit";

export const appointmentLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: { error: 'Too many requests .Try again Later' },
    standardHeaders: true,
    legacyHeaders: false,
});