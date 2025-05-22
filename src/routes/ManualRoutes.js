import express from "express";
import { ManualController } from "../app/controllers/ManualController.js";

const manualController = new ManualController();
const router = express.Router();

// manuals routes
router.get("", (req, res) => manualController.findAll(req, res));
router.get("/:manualId", (req, res) => manualController.findById(req, res));

export { router as manualRoutes };
