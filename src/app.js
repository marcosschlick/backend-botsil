import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { competitionRoutes } from "./routes/CompetitionRoutes.js";
import { memberRoutes } from "./routes/MemberRoutes.js";
import { photoRoutes } from "./routes/PhotoRoutes.js";
import { projectRoutes } from "./routes/ProjectRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.ALLOWED_CORS,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/competitions", competitionRoutes);
app.use("/members", memberRoutes);
app.use("/photos", photoRoutes);
app.use("/projects", projectRoutes);

export default app;
