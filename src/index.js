import { app } from "./app.js";
import connectDB from "./db/index.js";
import "dotenv/config";
import { updateStats } from "./utils/updateStats.js";
import { scheduleJob } from "node-schedule";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .then(async () => {
    scheduleJob("*/1 * * * *", () => {
      console.log("Running background job...");
      updateStats();
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
