import Applicant from '../models/applicantModel';
// import Company from '../models/companyModel';
import jwt from 'jsonwebtoken';
require("babel-polyfill");

const FormController = {};

//console.log('couc');
FormController.applicant = async(req, res) => {
    //console.log('a');
    const bearerheader = req.headers["authorization"];
    //console.log(bearerheader);

    if(typeof bearerheader != undefined)
    {   
        const bearer = bearerheader.split("  ");
        //console.log(bearer);
        const bearerToken = bearer[1];
        req.token = bearerToken;
        //console.log('token:' + req.token);
    }
    else
        return res.status(403).send('Token not found');

    console.log('b');
    var user = jwt.decode(req.token, function (err, user)
    {
    if(err)
        return (err)
    return user;
    })

    console.log(user);

    //console.log('c');

    //console.log('user status:' + user.status);
    
    if(user.status == 'applicant')
    {
        //console.log('d');
        Applicant.create(new Applicant(),function(err,user){

            console.log(req.body.name);

            return res.status(200).send("Form submitted");

        });

    }
    //console.log('e');

}

export default FormController 


