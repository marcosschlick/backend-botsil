import express from "express";
import { ProjectController } from "../app/controllers/ProjectController.js";
import { ProjectPhotoController } from "../app/controllers/ProjectPhotoController.js";

const projectController = new ProjectController();
const projectPhotoController = new ProjectPhotoController();
const router = express.Router();

// projects routes
router.get("/:id", (req, res) => projectController.findById(req, res));
router.get("/", (req, res) => projectController.findAll(req, res));

// projects photo routes
router.get("/photos/:project_id", (req, res) =>
  projectPhotoController.findByProject(req, res)
);

export { router as projectRoutes };
