const mongoose = require("mongoose");

// Define the schema for the book model
const bookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
    required: true,
  },
  pdfUrl: {
    type: String,
    required: true,
  },
  downloadCount: {
    type: Number,
    default: 0,
  },
});

const Message = mongoose.model("Message", {
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});

// Create a Mongoose model based on the schema
const Book = mongoose.model("Book", bookSchema);

module.exports = {
  Message,
  Book,
};
