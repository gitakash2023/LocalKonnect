const jwt = require('jsonwebtoken');
const User = require('./authModel');

exports.googleAuth = async (req, res) => {
    const user = req.user;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Google login successful', token });
};

exports.facebookAuth = async (req, res) => {
    const user = req.user;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Facebook login successful', token });
};
