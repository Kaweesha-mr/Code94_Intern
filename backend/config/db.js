const mongoose = require('mongoose');
require('dotenv').config();

//connect to database
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@intern.tsezuqx.mongodb.net/intern?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
