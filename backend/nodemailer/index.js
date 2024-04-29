const nodemailer = require("nodemailer");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

async function generateEmailBody(book) {
  let subject = `Bookify delivers you ${book.title}`;
  let body = `
        <div>
          <h2>Welcome to Bookify 🚀</h2>
          <p>Please find the attached pdf file to download ${book.title}</p>
          <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8;">
            <h3>${book.title}, the book you need!</h3>
            <p>Written by ${book.author} is now delivered to you.</p>
            <p>${book.shortDescription}</p>
            <img src=${book.imageUrl} alt="Product Image" style="max-width: 100%;" />
          </div>
          <p>${book.description}</p>
        </div>
      `;

  const emailContent = {
    subject,
    body,
  };
  return emailContent;
}

async function downloadPDF(url, filename) {
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  const writer = fs.createWriteStream(path.resolve(__dirname, filename));

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

const transporter = nodemailer.createTransport({
  pool: true,
  service: "hotmail",
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  maxConnections: 1,
});
async function sendEmail(emailContent, sendTo, book) {
  let content = await emailContent;
  let s = await downloadPDF(book.pdfUrl, process.env.PDF);
  const mailOptions = {
    from: process.env.EMAIL,
    to: sendTo,
    html: content.body,
    subject: content.subject,
    attachments: [
      {
        filename: book.title, 
        path: process.env.FILE_PATH,
        contentType: "application/pdf",
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return console.log(error);

    console.log("Email sent: ", info);
  });
}

module.exports = {
  sendEmail,
  generateEmailBody,
};
