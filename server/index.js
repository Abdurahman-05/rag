import express from "express";
import connectDB from "./config/db.js";
import * as dotenv from "dotenv";
import router from "./routes/upload.js";

import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use(cors());

app.use("/api/embedding", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
