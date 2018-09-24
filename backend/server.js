import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// DATABASE
//MongoDB
import database from './database.js'
const db_name = "balaizProto"
database.connectDb(db_name);


//PassportJS
import passport from 'passport';
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;

//Instanciate Express and Middlewares
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(bodyParser.json())
app.use(cors());


// Routes
import routes from './config/routes';
app.use('/api', routes);

// Launch Server
app.listen(8080, () => console.log("Running on 8080"))