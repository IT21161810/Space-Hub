import express from "express"
import { getUsers, getUserById, loginUser, registerUser, updateUser } from "../controllers/userController.js";
import {authMiddleware} from "../middleware/authMiddleware.js"
const router = express.Router(); //create router instance

router.post('/register',registerUser)
router.post('/login',loginUser)
router.put('/update/:id',authMiddleware,updateUser)
router.get('/getById/:id',getUserById)
router.get('/getAll',getUsers)

export default router;