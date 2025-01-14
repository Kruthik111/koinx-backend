import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// routes import
import statsRouter from "./routes/cryptostats.routes.js";
import deviationRouter from "./routes/cryptodeviation.routes.js";

// routes declaration

app.use("/stats", statsRouter);
app.use("/deviation", deviationRouter);

export { app };
