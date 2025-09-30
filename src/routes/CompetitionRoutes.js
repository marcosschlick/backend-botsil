import express from "express";
import { CompetitionController } from "../app/controllers/CompetitionController.js";
import { CompetitionPhotoController } from "../app/controllers/CompetitionPhotoController.js";

const competitionController = new CompetitionController();
const competitionPhotoController = new CompetitionPhotoController();
const router = express.Router();

// competition routes
router.get("/:id", (req, res) => competitionController.findById(req, res));
router.get("/", (req, res) => competitionController.findAll(req, res));

// competition photo routes
router.get("/photos/:competition_id", (req, res) =>
  competitionPhotoController.findByCompetition(req, res)
);

export { router as competitionRoutes };
