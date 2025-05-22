import express from "express";
import { ArticleController } from "../app/controllers/ArticleController.js";

const articleController = new ArticleController();
const router = express.Router();

// articles routes
router.post("", (req, res) => articleController.create(req, res));
router.get("", (req, res) => articleController.findAll(req, res));
router.get("/:articleId", (req, res) => articleController.findById(req, res));

export { router as articleRoutes };
