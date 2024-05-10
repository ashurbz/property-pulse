import mongoose from "mongoose";

let connected = false;

async function connectDB() {
  mongoose.set("strictQuery");
  if (connected) {
    console.log("DB is connected");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    connected = true;
    console.log("Mongo Db connection successful.....");
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;
