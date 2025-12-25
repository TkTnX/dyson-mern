import express from "express";
import { helloWorld } from "../controllers/test.controller.js";

const router = express.Router();

router.get("/", helloWorld);

export default router;
