import express from "express";
import { articleRoutes } from "./routes/ArticleRoutes.js";
import { manualRoutes } from "./routes/ManualRoutes.js";
import { personRoutes } from "./routes/PersonRoutes.js";
import { competitionPhotoRoutes } from "./routes/CompetitionPhotoRoutes.js";

const app = express();
app.use(express.json());

app.use("/articles", articleRoutes);
app.use("/manuals", manualRoutes);
app.use("/members", personRoutes);
app.use("/photos", competitionPhotoRoutes);

export default app;
