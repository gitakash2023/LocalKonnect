const nodemailer = require('nodemailer');

// Create a transporter for sending emails via Gmail
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Specifies the email service
    auth: {
        user: process.env.EMAIL_USER, // Your email address from the .env file
        pass: process.env.EMAIL_PASS, // Your email password from the .env file
    },
});

// Function to send an email
const sendEmail = async (to, subject, text) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER, // The sender's email
            to, // The recipient's email
            subject, // The email subject
            text, // The email content
        };
        await transporter.sendMail(mailOptions); // Sends the email
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error.message); // Logs email errors
    }
};

module.exports = { sendEmail };
