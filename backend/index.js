import express from "express";
import path from "path";
import cors from "cors";
import { connectToDb } from "./libs/connectToDb.js";
import productRouter from "./routes/product.route.js";
import categoryRouter from "./routes/category.route.js";
import reviewRouter from "./routes/review.route.js";
import uploadRouter from "./routes/upload.route.js";
import "./models/complectation.model.js";
import "./models/specification.model.js";

import dotenv from "dotenv";
import { fileURLToPath } from "url";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`Server is running on port ${PORT}`);
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/products", productRouter);
app.use("/categories", categoryRouter);
app.use("/reviews", reviewRouter);
app.use("/upload", uploadRouter);
