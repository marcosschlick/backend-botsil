import express from "express";
import { PhotoController } from "../app/controllers/PhotoController.js";

const photoController = new PhotoController();
const router = express.Router();

// photo routes
router.get("/:type", (req, res) => photoController.findByType(req, res));

export { router as photoRoutes };
