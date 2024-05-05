import dotenv from "dotenv";


dotenv.config({
  path: ".env",
});

// the below code fragment can be found in:
export const Yolo = {
  port : Number(process.env.PORT || 30002),
  db: {
    mongo: {
      uri: String(process.env.MONGO_URI),
    },
  },
}