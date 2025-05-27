import express from "express";
import { ArticleController } from "../app/controllers/ArticleController.js";

const articleController = new ArticleController();
const router = express.Router();

// articles route
router.get("", (req, res) => articleController.findAll(req, res));

export { router as articleRoutes };
