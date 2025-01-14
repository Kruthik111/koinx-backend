import { Router } from "express";
import { getCryptoStats } from "../controllers/crypto.controller.js";

const statsRouter = Router();

statsRouter.get("/:coin", getCryptoStats);

export default statsRouter;
