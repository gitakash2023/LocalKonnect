const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
require('dotenv').config();
const authRoutes = require('./api/auth/authRoutes');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(compression());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Basic route to test if the server is running
app.get('/', (req, res) => {
    res.send('Welcome to the LocalKonnect app');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
