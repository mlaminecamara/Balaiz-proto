import { Router } from 'express';

const router = new Router();

router.post('/register', (req, res) => {
    console.log(req)
    // AuthController.register(req, res);
});

router.post('/login', (req, res, next) => {
    // AuthController.login(req, res, next);
});

router.get('/login',(req,res,next) => {
    console.log("in route")
    res.send("ok")
});

export default router;