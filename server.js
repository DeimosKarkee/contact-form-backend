import express from "express";
import connectToDB from "./db/db.js";
import dotenv from "dotenv";
import cors from "cors";

import contactRouter from "./routes/contactFormRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

// Load env variables
dotenv.config({ path: "./config/config.env" });
// Set port to listen req
const PORT = process.env.PORT || 5000;

// Connection to mongo db
connectToDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/contact-form/", contactRouter);
app.use(errorHandler);

const server = app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}.`)
);

// Handle unhandeled promise rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
