import Company from '../models/companyModel';
import Applicant from '../models/applicantModel';
import jwt from 'jsonwebtoken';
import { execFile } from 'child_process';
require("babel-polyfill");

let moment = require('moment'); 

const Company_Form_Controller = {};

// Method to display user company form 
Company_Form_Controller.Show_Company = async(req, res) => {
    const bearerheader = req.headers["authorization"];

    if(typeof bearerheader != undefined)
    {   
        const bearer = bearerheader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        console.log('token:' + req.token);
    }
    else
        return res.status(403).send('Token not found');
    //console.log(req.token);
    var user = jwt.decode(req.token, function (err, user)
    {
    if(err)
        return (err);
    return user;
    })
    if(user.status == 'Entreprise')
    {
        let query = {user: user.id};

        Company.findOne(query,function(err,user){
            if(err)
                return (err);
            res.status(200).send("Form company submitted");
        });

    }

}


// Method to find and modify company form, if doesn't exist, create company form.
Company_Form_Controller.Add_Company = async(req, res) => {

    let formatted_Internship_Startdate = moment(req.body.Internship_Startdate, "DD-MM-YYYY");
    //console.log(formatted_Internship_Startdate);
    const bearerheader = req.headers["authorization"];

    if(typeof bearerheader != undefined)
    {   
        const bearer = bearerheader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        //console.log('token:' + req.token);
    }
    else
        return res.status(403).send('Token not found');
    //console.log(req.token);
    var user = jwt.decode(req.token, function (err, user)
    {
    if(err)
        return (err);
    return user;
    })
    
    if(user.status == 'Entreprise')
    {
        let query = {user: user.id};
        let update= {
            Company_Name:req.body.Company_Name,
            Contact_Name:req.body.Contact_Name,
            Contact_Position:req.body.Contact_Position,
            Contact_Email:req.body.Contact_Email,
            Contact_Tel:req.body.Contact_Tel,
            Company_Industry:req.body.Company_Industry,
            Internship_Startdate:formatted_Internship_Startdate,
            Duration:req.body.Duration,
            Mission_Description:req.body.Mission_Description,
            FrontEnd_Stack:req.body.FrontEnd_Stack,
            BackEnd_Stack:req.body.BackEnd_Stack,
            Framework_Back:req.body.Framework_Back,
            Database:req.body.Database,
            Tags:req.body.Tags
        }
        let options = {upsert:true, new:true, setDefaultsOnInsert:true}

        Company.findOneAndUpdate(query,update,options,function(err,user){
            if(err)
                return (err);
            //console.log(req.body.firstName);
            res.redirect('company');
        });

    }

}

// Method to delete user company form
Company_Form_Controller.Delete_Company = async(req, res) => {
    const bearerheader = req.headers["authorization"];

    if(typeof bearerheader != undefined)
    {   
        const bearer = bearerheader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        console.log('token:' + req.token);
    }
    else
        return res.status(403).send('Token not found');
    //console.log(req.token);
    var user = jwt.decode(req.token, function (err, user)
    {
    if(err)
        return (err);
    return user;
    })
    
    if(user.status == 'Entreprise')
    {   
        let id = {user: user.id};
        Company.findOneAndDelete(id, function(err, user){
            if(err)
                return (err);
            return res.status(200).send("Company deleted");

        })
    }

}

// MEthod for finding user profiles

Company_Form_Controller.CandidateProfiles = async(req, res) => {
    const bearerheader = req.headers["authorization"];

    if(typeof bearerheader != undefined)
    {   
        const bearer = bearerheader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        console.log('token:' + req.token);
    }
    else
        return res.status(403).send('Token not found');
    //console.log(req.token);
    var user = jwt.decode(req.token, function (err, user)
    {
    if(err)
        return (err);
    return user;
    })
        
    if(user.status == 'Entreprise')
    {   
        Company.find({}, function(err, companies) {
            if(err)
                return (err)
            res.status(200).send(companies);
            console.log(companies);
        })

        Applicant.find ({Tags:companies.Tags}, function(err, applicants){
            if(err)
                return (err);
            return res.status(200).send(applicants);

        })
    }

}


export default Company_Form_Controller 


