//express.js
import express,{Response ,Request} from "express";
import { Yolo } from "./config";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "50mb" }));



app.get("/", (req:Request, res:Response) => {
    res.json({
      message: "Welcome to Yolo",
    })
});

const start = () => {
 app.listen(Yolo.port, () => {
   console.log(`Server is running on port ${Yolo.port}`);
 }).on('error', (err:unknown) => {
   console.error(`Error starting server: ${err}`);
   process.exit(1);
 });
};

start();