import express from 'express';
import { loginUser, RegisterUser } from '../Controllers/AuthController.js';
const router = express.Router()

// router.get('/', async(req,res)=>{res.send("Auth Route")})
router.post('/register', RegisterUser)
router.post('/login', loginUser)

export default router