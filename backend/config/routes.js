import { Router } from 'express';

import AuthController from '../controllers/auth.controller';
import Applicant_Form_Controller from '../controllers/applicant.controller';
import Company_Form_Controller from '../controllers/company.controller'

const router = new Router();

router.post('/register', (req, res) => {
    AuthController.register(req, res);
});

router.post('/login', (req, res, next) => {
    AuthController.login(req, res, next);
});

router.post('/applicant',(req,res) =>{
    Applicant_Form_Controller.Add_Applicant(req,res);
});

router.get('/applicant',(req,res) =>{
    Applicant_Form_Controller.Show_Applicant(req,res);
});

router.delete('/applicant',(req,res) =>{
    Applicant_Form_Controller.Delete_Applicant(req,res);
});

router.get('/company',(req,res) =>{
    Company_Form_Controller.Show_Company(req,res);
});

router.post('/company',(req,res) =>{
    Company_Form_Controller.Add_Company(req,res);
});

router.delete('/company',(req,res) =>{
    Company_Form_Controller.Delete_Company(req,res);
});

router.get('/profiles', (req, res) =>{
    Company_Form_Controller.CandidateProfiles(req,res);
});


export default router;