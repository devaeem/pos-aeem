import * as mongoose from "mongoose";
import { Yolo } from "../../config";

const connectToDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(Yolo.db.mongo.uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
const closeDatabaseConnection = () => {
  mongoose.connection.close();
};

export { connectToDatabase, closeDatabaseConnection };