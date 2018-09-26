import Company from '../models/companyModel';
import jwt from 'jsonwebtoken';
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
    if(user.status == 'recruiter')
    {
        let query = {user: user.id};
        let fields= {
            Company_Name:true,
            Contact_Name:true,
            Contact_Position:true,
            Contact_Email:true,
            Contact_Tel:true,
            Company_Industry:true,
            Internship_Startdate:true,
            Duration:true,
            Mission_Description:true,
            FrontEnd_Stack:true,
            BackEnd_Stack:true,
            Framework_Back:true,
            Database:true,
            Tags:true
        }

        Company.findOne(query,fields,function(err,user){
            if(err)
                return (err);
            return res.status(200).send("Form company submitted");
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
    
    if(user.status == 'recruiter')
    {
        let query = {user: user.id};
        let update= {
            Company_Name:req.body.Company_Name,
            Contact_Name:req.body.Company_Name,
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
            return res.redirect('company');
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
    
    if(user.status == 'recruiter')
    {   
        let id = {user: user.id};
        Company.findOneAndDelete(id, function(err, user){
            if(err)
                return (err);
            return res.status(200).send("Company deleted");

        })
    }

}


export default Company_Form_Controller 


