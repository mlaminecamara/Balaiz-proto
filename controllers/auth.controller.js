import User from '../models/userModel';
// import bodyParser from 'body-parser';
import passport from 'passport';
import jwt from 'jsonwebtoken';
require("babel-polyfill");

const AuthController = {};

AuthController.register = async (req, res) => {
    try{
        // (req.body.firstname) ? console.log(firstname):console.log("undefined");
        const username = req.body.email.toLowerCase()
        const firstName = req.body.firstname.toLowerCase()
        const lastName = req.body.lastname.toUpperCase()
        //TODO Find if user with same email already exists
        User.register(new User({ username: username,
            firstName: firstName,
            lastName: lastName,
            }), req.body.password, function(err, account) {
            if (err) {
                return res.status(500).send('An error occurred: ' + err);
            }

            passport.authenticate(
                'local', {
                    session: false
                })(req, res, () => {
                res.status(200).send('Successfully created new account');
            });
        });
    }
    catch(err){
        return res.status(500).send('An error occurred: ' + err);
    }
};

AuthController.login = async (req, res, next) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({
                message: 'Something is not right with your input'
            });
        }
        passport.authenticate('local', {session: false}, (err, user, info) => {
            if (err || !user) {
                return res.status(400).json({
                    message: 'Something is not right',
                    user   : user
                });
            }
            req.login(user, {session: false}, (err) => {
                if (err) {
                    res.send(err);
                }
                // generate a signed son web token with the contents of user object and return it in the response
                const token = jwt.sign({ id: user.id, email: user.username}, 'SecretToEditAndAddToignoredfile', { expiresIn: '30m' });
                return res.json({user: user.username, firstName: user.firstName, lastName: user.lastName, token});
            });
        })(req, res);
    }
    catch(err){
        console.log(err);
    }
};

export default AuthController 