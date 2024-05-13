import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import cors from "cors";
import process from "process";


import anyRoutes from "../routes/any.js";


const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", () => {
  res.send("Hello, World! This is the root path.");
});

app.get("/any", anyRoutes);


const PORT = process.env.PORT;
mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));