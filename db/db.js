import mongoose from "mongoose";

const URI = "";

const connectToDB = async () => {
  const conn = await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`Connected to DB at ${conn.connection.host}`);
};

export default connectToDB;
