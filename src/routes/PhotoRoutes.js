import express from "express";
import { CompetitionPhotoController } from "../app/controllers/CompetitionPhotoController.js";

const photoController = new CompetitionPhotoController();
const router = express.Router();

// photos routes
router.post("", (req, res) => photoController.create(req, res));
router.get("", (req, res) => photoController.findAll(req, res));
router.get("/:photoId", (req, res) => photoController.findById(req, res));

export { router as photoRoutes };
