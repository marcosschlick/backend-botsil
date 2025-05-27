import express from "express";
import { PersonController } from "../app/controllers/PersonController.js";

const personController = new PersonController();
const router = express.Router();

// members routes
router.get("", (req, res) => personController.findAll(req, res));

export { router as personRoutes };
