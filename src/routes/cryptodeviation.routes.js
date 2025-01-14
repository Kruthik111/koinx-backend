import { Router } from "express";
import { cryptoDeviation } from "../controllers/crypto.controller.js";

const deviationRouter = Router();

deviationRouter.get("/:coin", cryptoDeviation);

export default deviationRouter;
