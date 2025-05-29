import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { articleRoutes } from "./routes/ArticleRoutes.js";
import { manualRoutes } from "./routes/ManualRoutes.js";
import { personRoutes } from "./routes/PersonRoutes.js";
import { competitionPhotoRoutes } from "./routes/CompetitionPhotoRoutes.js";

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

app.use("/articles", articleRoutes);
app.use("/manuals", manualRoutes);
app.use("/members", personRoutes);
app.use("/photos", competitionPhotoRoutes);

export default app;
