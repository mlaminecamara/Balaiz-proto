require('dotenv').config()
import mongoose from 'mongoose';

exports.connectDb = () => {
    mongoose.connect(process.env.DB_URL, { useCreateIndex: true, useNewUrlParser: true })
    
    const connection = mongoose.connection

    connection.once('open',() => {
    console.log("connected to db")
    })
}