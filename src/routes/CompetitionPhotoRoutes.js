import express from "express";
import { CompetitionPhotoController } from "../app/controllers/CompetitionPhotoController.js";

const competitionPhotoController = new CompetitionPhotoController();
const router = express.Router();

router.get("", (req, res) => competitionPhotoController.findAll(req, res));

export { router as competitionPhotoRoutes };
