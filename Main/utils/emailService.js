require('dotenv').config();
const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "javiselectronicpidgeon@outlook.com",
        pass: "strongPassword11*"
    }
});

// Function to send emails
const sendEmail = async (options) => {
  try {
    const info = await transporter.sendMail(options);
    console.log("Email sent: " + info.response);
    return info;
  } catch (err) {
    console.error("Error sending email: ", err);
    throw err; // Or handle it as needed
  }
};

module.exports = { sendEmail };
