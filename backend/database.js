//require('dotenv').config()
import mongoose from 'mongoose';

exports.connectDb = (url) => {
    mongoose.connect('mongodb://balaizadmin:B9Kc49py@ds247290.mlab.com:47290/balaizproto', { useNewUrlParser: true })
    
    const connection = mongoose.connection

    connection.once('open',() => {
    console.log("connected to db")
    })
}