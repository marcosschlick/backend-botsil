import express from "express";
import { ResultController } from "../app/controllers/ResultController.js";

const resultController = new ResultController();
const router = express.Router();

// manuals routes
router.post("", (req, res) => resultController.create(req, res));
router.get("", (req, res) => resultController.findAll(req, res));
router.get("/:resultId", (req, res) => resultController.findById(req, res));

export { router as resultRoutes };
