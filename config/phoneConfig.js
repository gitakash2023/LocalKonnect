const twilio = require('twilio');

// Initialize Twilio client with credentials from the .env file
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Function to send an SMS
const sendSms = async (to, message) => {
    try {
        await twilioClient.messages.create({
            body: message, // The message content
            from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
            to, // The recipient's phone number
        });
        console.log('SMS sent successfully');
    } catch (error) {
        console.error('Error sending SMS:', error.message); // Logs SMS errors
    }
};

module.exports = { sendSms };
