import mongoose, { ConnectOptions } from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const url = process.env.DATABASE_URL as any

export const connectDB = async () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

  const db = mongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("database connected"));
};
