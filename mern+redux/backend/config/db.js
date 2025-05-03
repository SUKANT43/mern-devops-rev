const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/crud");
        if(connect){
            console.log("DB connected");
        }   
    } catch (error) {
        console.log("DB not connected", error);
    }
};

module.exports = connectDb;
