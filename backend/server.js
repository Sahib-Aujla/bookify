const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const books = require("./mock_data");
const { Book, Message } = require("./model");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

const uploadPdfToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file);
    console.log("PDF " + result.secure_url);
    return result.secure_url; // Return the URL of the uploaded PDF file
  } catch (error) {
    console.error("Error uploading PDF to Cloudinary:", error);
    throw error;
  }
};

const uploadImageToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file);
    console.log("Image " + result.secure_url);
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
};

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to MongoDB");

      // books.forEach(async book=>{

      //   try {
      //    const file=book.pdf;
      //    const pdfUrl=await uploadPdfToCloudinary(file);
      //    const image=book.image;
      //    const imgUrl=await uploadImageToCloudinary(image);

      //    const b=new Book({
      //     author:book.author,
      //     image:book.image,
      //     imageUrl:imgUrl,
      //     title:book.title,
      //     shortDescription:book.shortDescription,
      //     description:book.description,
      //     pdf:book.pdf,
      //     pdfUrl:pdfUrl,
      //     downloadCount:book.downloadCount
      //    })
      //    await b.save();
      //    console.log(b);
      //   } catch (error) {
      //     console.error("Error", error);
      //   }

      // })
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/allbooks", async (req, res) => {
  try {
    // Fetch all books from the database
    const books = await Book.find({});

    // Send the books as a response
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books from database:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ _id: id });

    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching books from database:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/message", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    const newMessage = new Message({ firstName, lastName, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/sendbook",async(req, res) => {

  try {

    console.log(req.body);
    res.status(201).json({ message: "Book sent successfully" });
    
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
