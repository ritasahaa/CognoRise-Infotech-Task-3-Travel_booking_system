// data is fetched from database and showed in console---

const mongoose = require('mongoose');
const mongoURI = `mongodb://localhost:27017/travelbook`;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected successfully');
        
        // Fetch data after successful connection
        // const fetched_data = await mongoose.connection.db.collection("users").find({}).toArray();
        // console.log(fetched_data);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = mongoDB;
