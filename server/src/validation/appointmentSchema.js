import { z } from "zod"

export const appointmentSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    phone: z.string().min(10).regex(/^[\d\s\-\+\(\)]+$/),
    date: z.string().refine((val) => new Date(val) >= new Date(), {
        message: 'Date cannot be in the past'
    }),
    department: z.enum([
        "General Medicine", "Cardiology", "Neurology", "Orthopedics",
        "Pediatrics", "Dermatology", "ENT", "Opthalmology", "Gyneicology",
        "Other"

    ]),

    message: z.string().max(1000).optional(),

})
