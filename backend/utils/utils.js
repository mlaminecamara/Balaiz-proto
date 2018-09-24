require("babel-polyfill");
require("mongoose");
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

const utils = {};

utils.isAdmin = (token) => {
    const user = utils.decodeUser(token)
    User.findOne({username:user.email}, (err,foundUser) => {
        let authorized = false;
        if (err) { return err; }
        if (foundUser.status === 'admin') { authorized = true }
        return authorized;
    })
}

utils.decodeUser = (token) => {
    const trimmedToken = token.substring(7);
    const user = jwt.verify(trimmedToken,'SecretToEditAndAddToignoredfile');
    return user;
}



module.exports = utils;