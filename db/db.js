import mongoose from "mongoose";

const connectToDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`Connected to DB at ${conn.connection.host}`);
};

export default connectToDB;
