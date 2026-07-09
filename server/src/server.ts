import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Downtown Brews API is running");
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Downtown Brews backend is healthy",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

