const mongoose = require('mongoose');

// Function to establish a connection with MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message); // Logs connection errors
        process.exit(1); // Terminates the app in case of a failure
    }
};

module.exports = connectDB;
