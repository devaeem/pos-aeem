//express.js
import express from "express";
import type {Response ,Request} from "express";
import { Yolo } from "./config";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import router from "./root-routes";
import { connectToDatabase } from "./config/mongo/mongo";
import { globalErrorHanlder } from "./lib/core";


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "50mb" }));

connectToDatabase()

app.use("/api/v1/", router);
app.use(globalErrorHanlder);

const start = () => {
 app.listen(Yolo.port, () => {
   console.log(`Server is running on port ${Yolo.port}`);
 }).on('error', (err:unknown) => {
   console.error(`Error starting server: ${err}`);
   process.exit(1);
 });
};

start();