import mongoose from "mongoose";

const ContactFormModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    trim: true,
    maxLength: [256, "Name cannot be more than 256 characters long."],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    trim: true,
    lowercase: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  message: {
    type: String,
    required: [true, "Please enter a message"],
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter a phone number"],
    trim: true,
    unique: true,
    match: [
      /^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/,
      "Please enter a valid phone number",
    ],
  },
});

export default mongoose.model(
  "Control Form Schema",
  ContactFormModel,
  "Contact Form"
);
