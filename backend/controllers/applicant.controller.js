import Applicant from '../models/applicantModel';
import jwt from 'jsonwebtoken';
require("babel-polyfill");

let moment = require('moment'); 

const Applicant_Form_Controller = {};

// Method to display user applicant form 
Applicant_Form_Controller.Show_Applicant = async(req, res) => {
    let formatted_StartDate = moment(req.body.Start_Date, "DD/MM/YYYY");
    //console.log(formatted_StartDate);
    let formatted_MaxFinishDate = moment(req.body.Max_Finish_Date,"DD/MM/YYYY");
    let formatted_NextIntershipStartDate = moment(req.body.Next_Internship_Startdate,"DD/MM/YYYY");
    
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
    if(user.status == 'Candidat')
    {
        let query = {user: user.id};
        Applicant.findOne(query,function(err,user){
            if(err)
                return (err);
            res.status(200).json(user);
        });

    }

}


// Method to find and modify applicant form, if doesn't exist, create applicant form.
Applicant_Form_Controller.Add_Applicant = async(req, res) => {
    let formatted_StartDate = moment(req.body.Start_Date, "DD/MM/YYYY");
    //console.log(formatted_StartDate);
    let formatted_MaxFinishDate = moment(req.body.Max_Finish_Date,"DD/MM/YYYY");
    let formatted_NextIntershipStartDate = moment(req.body.Next_Internship_Startdate,"DD/MM/YYYY");

    const bearerheader = req.headers["authorization"];
    console.log(bearerheader);
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

    let user = jwt.decode(req.token, function (err, user){
    if (err)
        return (err);
    return (user);
    })

    console.log(user);
    
    if(user.status == 'Candidat')
    {   
        //console.log('cc')
        let query = {user: user.id};
        let update= {
            user: user.id,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            tel:req.body.tel,
            email:req.body.email,
            school:req.body.school,
            Ed_Type:req.body.Ed_Type,
            Github:req.body.Github,
            Start_Date:formatted_StartDate,
            Duration:req.body.Duration,
            Max_Finish_Date:formatted_MaxFinishDate,
            Last_Internship:req.body.Last_Internship,
            Active_Status:req.body.Active_Status,
            Webdev_Experience:req.body.Webdev_Experience,
            FrontEnd_Stack:req.body.FrontEnd_Stack,
            Projects_Description:req.body.Projects_Description,
            Database:req.body.Database,
            Next_Internship_Startdate:formatted_NextIntershipStartDate,
            BackEnd_Stack:req.body.BackEnd_Stack,
            Framework_Back:req.body.Framework_Back,
            Tags:req.body.Tags
        }
        let options = {upsert:true, new:true, setDefaultsOnInsert:true}

        Applicant.findOneAndUpdate(query,update,options,function(err,user){
            if(err)
                return (err);
            console.log(req.body.firstName);
            res.status(200).json(update);
        });

    }

}

// Method to delete user applicant form
Applicant_Form_Controller.Delete_Applicant = async(req, res) => {
    const bearerheader = req.headers["Authorization"];

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
    
    if(user.status == 'Candidat')
    {   
        let id = {user: user.id};
        Applicant.findOneAndDelete(id, function(err, user){
            if(err)
                return (err);
            return res.status(200).send("Applicant deleted");

        })
    }

}


export default Applicant_Form_Controller 


