import express from "express";
import { ModalityController } from "../app/controllers/ModalityController.js";

const modalityController = new ModalityController();
const router = express.Router();

// modalities routes
router.post("", (req, res) => modalityController.create(req, res));
router.get("", (req, res) => modalityController.findAll(req, res));
router.get("/:modalityId", (req, res) => modalityController.findById(req, res));

export { router as modalityRoutes };
