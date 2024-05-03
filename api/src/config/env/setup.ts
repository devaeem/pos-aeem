import dotenv from "dotenv";


dotenv.config({
  path: ".env",
});

// the below code fragment can be found in:
export const Yolo = {
  port : process.env.PORT || 30002,
}