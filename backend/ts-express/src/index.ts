import express from "express";
import todoRouter from "./todos";

const app = express();

app.use(express.json());
app.use("/todos", todoRouter);

app.listen(3000, () => console.log("App startet auf port 3000"));
