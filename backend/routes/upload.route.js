import { Router } from "express";
import upload from "../libs/upload.js";

const router = Router();

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "Image not uploaded" });

  res.json({
    message: "Uploaded!",
    filename: req.file.filename,
    url: `/uploads/${req.file.filename}`,
  });
});

export default router;
