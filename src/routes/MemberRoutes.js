import express from "express";
import { MemberController } from "../app/controllers/MemberController.js";

const memberController = new MemberController();
const router = express.Router();

// members routes
router.get("/:id", (req, res) => memberController.findById(req, res));
router.get("/", (req, res) => memberController.findAll(req, res));

export { router as memberRoutes };
