import express from "express";

import auditController
from "../controllers/auditControllers.js";

const router = express.Router();

router.post(
  "/",
  auditController
);

export default router;