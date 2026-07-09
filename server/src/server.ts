import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db";
import menuRoutes from "./routes/menuRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRoutes);

app.get("/", (req, res) => {
    res.send("Downtown Brews API is running");
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Downtown Brews backend is healthy",
    });
});

app.get("/api/db-test", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");

        res.json({
            status: "ok",
            message: "Database connected",
            databaseTime: result.rows[0].now,
        });
    } catch (error) {
        console.error("Database connection failed:", error);

        res.status(500).json({
            status: "error",
            message: "Database connection failed",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});