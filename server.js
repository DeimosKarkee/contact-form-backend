import express from "express";
import connectToDB from "./db/db.js";
import contactRouter from "./routes/contactFormRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

connectToDB();

const app = express();
app.use(express.json());

app.use("/api/v1/contact-form/", contactRouter);
app.use(errorHandler);

app.listen(5000, () => `Server is running at port 5000`);
