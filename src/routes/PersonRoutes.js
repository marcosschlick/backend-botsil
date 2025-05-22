import express from "express";
import { PersonController } from "../app/controllers/PersonController.js";

const personController = new PersonController();
const router = express.Router();

// members routes
router.post("", (req, res) => personController.create(req, res));
router.get("", (req, res) => personController.findAll(req, res));
router.get("/:id", (req, res) => personController.findById(req, res));

export { router as personRoutes };
