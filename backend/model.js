const mongoose = require('mongoose');

// Define the schema for the book model
const bookSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    image: {
        type: String, // Assuming you store image URLs
        required: true
    },
    imageUrl: {
        type: String, // Assuming you store image URLs
        required: true
    },
    title: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    pdf:{
        type:String,
        required:true
    },
    pdfUrl: {
        type: String, 
        required: true
    },
    downloadCount: {
        type: Number,
        default: 0 
    }
});

// Create a Mongoose model based on the schema
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
