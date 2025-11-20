// src/app.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import appointmentRoutes from "./routes/appointmentRoutes.js";

const app = express();

// ALL MIDDLEWARES FIXED (with proper parentheses)
app.use(helmet());                                      // Fixed: helmet()
app.use(morgan("combined"));                            // morgan works with or without (), but this is clean
app.use(
    cors({
        origin:
            process.env.NODE_ENV === "production"
                ? "https://maxcare.com"
                : "http://localhost:5173",
        credentials: true,                                 // Optional: allow cookies if needed later
    })
);

app.use(express.json({ limit: "10kb" }));               // Already correct

// Routes
app.use("/api", appointmentRoutes);

app.get("/health", (_, res) => {
    res.json({ status: "OK" });
});

// 404 handler (safe for ESM)
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

export default app;