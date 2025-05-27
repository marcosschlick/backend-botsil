import express from "express";
import { ManualController } from "../app/controllers/ManualController.js";

const manualController = new ManualController();
const router = express.Router();

// manuals route
router.get("", (req, res) => manualController.findAll(req, res));

export { router as manualRoutes };
