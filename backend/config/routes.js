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
    console.log('bla');
    FormController.applicant(req,res);
});

router.post('/company',(req,res) =>{
    FormController.company(req,res);
});

export default router;