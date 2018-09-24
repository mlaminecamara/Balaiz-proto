import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// DATABASE
//MongoDB
import database from './database.js'
const db_name = "balaizProto"
database.connectDb(db_name);

//Instanciate Express and Middlewares
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(bodyParser.json())
app.use(cors());
app.listen(8080, () => console.log("Running on 8080"))