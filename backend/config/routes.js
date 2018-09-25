import { Router } from 'express';

import AuthController from '../controllers/auth.controller';
import FormController from '../controllers/form.controller';


const router = new Router();

router.post('/register', (req, res) => {
    AuthController.register(req, res);
});

router.post('/login', (req, res, next) => {
    AuthController.login(req, res, next);
});

router.post('/applicant',(req,res) =>{
    FormController.applicant(req,res);
});

router.get('/applicant',(req,res) =>{
    FormController.Show_Applicant(req,res);
});

router.delete('/applicant',(req,res) =>{
    FormController.Delete_Applicant(req,res);
});

router.post('/company',(req,res) =>{
    FormController.company(req,res);
});

export default router;