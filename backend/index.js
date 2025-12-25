import express from "express";
import cors from "cors";
import { connectToDb } from "./libs/connectToDb.js";
import testRouter from "./routes/test.route.js";
const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.listen(PORT, async () => {
  await connectToDb();
  console.log(`Server is running on port ${PORT}`);
});

app.use("", testRouter);
