import { Router } from "express";
import {
  createNews,
  getNews,
  getNewsItem,
} from "../controllers/news.controller.js";

const router = Router();

router.get("/", getNews);
router.get("/:id", getNewsItem);
router.post("/", createNews);

export default router;
