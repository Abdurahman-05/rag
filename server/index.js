import express from "express";
import connectDB from "./config/db.js";
import * as dotenv from "dotenv";
import router from "./routes/upload.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());
app.use("/api/embedding", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
