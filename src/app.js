import express from "express";
import { articleRoutes } from "./routes/ArticleRoutes.js";
import { manualRoutes } from "./routes/ManualRoutes.js";
import { personRoutes } from "./routes/PersonRoutes.js";
import { photoRoutes } from "./routes/PhotoRoutes.js";

const app = express();
app.use(express.json());

app.use("/articles", articleRoutes);
app.use("/manuals", manualRoutes);
app.use("/members", personRoutes);
app.use("/photos", photoRoutes);

export default app;
