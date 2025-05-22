import express from "express";
import { adminRoutes } from "./routes/AdminRoutes.js";
import { articleRoutes } from "./routes/ArticleRoutes.js";
import { competitionRoutes } from "./routes/CompetitionRoutes.js";
import { manualRoutes } from "./routes/ManualRoutes.js";
import { modalityRoutes } from "./routes/ModalityRoutes.js";
import { personRoutes } from "./routes/PersonRoutes.js";
import { photoRoutes } from "./routes/PhotoRoutes.js";
import { resultRoutes } from "./routes/ResultRoutes.js";

const app = express();
app.use(express.json());

app.use("/admins", adminRoutes);
app.use("/articles", articleRoutes);
app.use("/competitions", competitionRoutes);
app.use("/manuals", manualRoutes);
app.use("/members", personRoutes);
app.use("/modalities", modalityRoutes);
app.use("/photos", photoRoutes);
app.use("/photos", resultRoutes);

export default app;
