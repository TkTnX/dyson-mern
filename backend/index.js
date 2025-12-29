import express from "express";
import cors from "cors";
import { connectToDb } from "./libs/connectToDb.js";
import productRouter from "./routes/product.route.js";
import categoryRouter from "./routes/category.route.js";
import "./models/complectation.model.js";
import "./models/specification.model.js";

import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`Server is running on port ${PORT}`);
});

app.use("/products", productRouter);
app.use("/categories", categoryRouter);
