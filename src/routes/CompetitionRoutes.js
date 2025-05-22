import express from "express";
import { CompetitionController } from "../app/controllers/CompetitionController.js";

const competitionController = new CompetitionController();
const router = express.Router();

// competitions routes
router.post("", (req, res) => competitionController.create(req, res));
router.get("", (req, res) => competitionController.findAll(req, res));
router.get("/:competitionId", (req, res) =>
  competitionController.findById(req, res)
);

export { router as competitionRoutes };
