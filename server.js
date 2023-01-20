import express from "express";

const app = express();

app.get("/", (req, res) => res.send("This is a test."));

app.listen(5000, () => `Server is running at port 5000`);
