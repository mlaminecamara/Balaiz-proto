import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


// DATABASE
//MongoDB
import database from './database.js'
import User from './models/userModel';
database.connectDb();

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

app.use(function(req, res, next) {
    // console.log('ddd');
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Api-Key");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    //console.log("cc");
    next();
})


//Instantiate passportJs
app.use(passport.initialize());
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    },
    User.authenticate()
));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'SecretToEditAndAddToignoredfile'
    },
    function (jwtPayload, cb) {
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return User.findById(jwtPayload.id)
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
))

// Routes
import routes from './config/routes';
import auth from './config/auth.routes';

app.use('/api',passport.authenticate('jwt',{session: false}), routes);
app.use('/auth', auth);
// Launch Server
app.listen(8080, () => console.log("Running on 8080"))