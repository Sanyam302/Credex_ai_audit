import dotenv from "dotenv";

dotenv.config({
  path: "./.env"
});
import express from "express";
import cors from "cors";


import auditRoutes
from "./routes/auditRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/audit",
  auditRoutes
);

app.get("/", (req, res) => {

  res.send(
    "Credex Audit API Running"
  );

});

const PORT = 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on ${PORT}`
  );

});