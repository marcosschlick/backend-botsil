import express from "express";
import { AdminController } from "../app/controllers/AdminController.js";

const adminController = new AdminController();
const router = express.Router();

// admins routes
router.post("", (req, res) => adminController.create(req, res));
router.get("", (req, res) => adminController.findAll(req, res));
router.get("/:adminId", (req, res) => adminController.findById(req, res));

export { router as adminRoutes };
