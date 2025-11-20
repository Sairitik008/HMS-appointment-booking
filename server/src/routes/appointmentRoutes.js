import { Router } from "express";
import { submitAppointment } from "../controllers/appointmentController.js";
import { validationRequest } from "../middlewares/validateRequest.js";
import { appointmentLimiter } from "../middlewares/rateLimiter.js";
import { appointmentSchema } from './../validation/appointmentSchema.js';

const router = Router();


router.post(
    "/appointment",
    appointmentLimiter,
    validationRequest(appointmentSchema),
    submitAppointment
)

export default router;