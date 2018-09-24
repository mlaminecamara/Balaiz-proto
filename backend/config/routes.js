import { Router } from 'express';

const router = new Router();

router.post('/register', (req, res) => {
    console.log(req)
    // AuthController.register(req, res);
});

router.post('/login', (req, res, next) => {
    // AuthController.login(req, res, next);
});

export default router;