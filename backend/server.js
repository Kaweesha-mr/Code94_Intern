const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes.routes');
const errorHandler = require('./utils/errorHandler');
const cors = require('cors');


require('dotenv').config();

const app = express();

//allow from localhost:3000 and localhost:4000
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4000']
}));

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routes
app.use('/api/recipes', recipeRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
