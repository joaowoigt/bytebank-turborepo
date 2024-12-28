import mongoose from "mongoose";

const DATABASE_URI: string =
  "mongodb+srv://joaowoigt:jFTEmT0xxYN2ldTB@bytebank.vc3x2.mongodb.net/?retryWrites=true&w=majority&appName=bytebank";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

export default connectMongoDB;
