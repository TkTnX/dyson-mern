import { Router } from "express";
import { createReview, getReviews } from "../controllers/review.controller.js";

const router = Router();

router.get("/", getReviews);
router.post("/", createReview);

export default router;
