import express from "express";
import { personRoutes } from "./routes/PersonRoutes.js";

const app = express();
app.use(express.json());

app.use("/members", personRoutes);

export default app;
