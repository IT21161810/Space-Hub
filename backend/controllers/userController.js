import User from '../model/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//register the user
export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(422).json({ message: 'Fill the required fields' });
        }

        const newEmail = email.toLowerCase();
        const emailExists = await User.findOne({ email: newEmail });

        if (emailExists) {
            return res.status(422).json({ message: "Email already exists" });
        }

        if (password.trim().length < 4) {
            return res.status(422).json({ message: "Password should not be less than 4 characters" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({ name, email: newEmail, password: hashedPassword });
        return res.status(201).json({ message: `New user ${newUser.email} registered` });
    } catch (error) {
        return res.status(500).json({ message: "User registration failed" });
    }
};



export const loginUser = async (req, res, next) => {

    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(422).json({ message: '"Fill in all fields"' })
        }

        const newEmail = email.toLowerCase()
        const userExits = await User.findOne({ email: newEmail })//check for existence of user

        if (!userExits) {
            return res.status(422).json({ message: 'User not found' })
        }
        //compare retrieved password against user entered one
        const comparePassword = await bcrypt.compare(password, userExits.password)

        if (!comparePassword) {
            return res.status(420).json({ message: 'Password is not matching' })
        }

        const { _id: id, name, role } = userExits
        // If the user is authenticated, generate a JWT token
        const token = jwt.sign({ id, name, role }, process.env.JWT_SECRET, { expiresIn: "2h" })

        return res.status(200).json({ token, id, name, role }) //show these fields only 

    } catch (err) {
        return res.status(422).json({ message: "Invalid credentials Login failed" })
    }

}


export const updateUser = async (req, res, next) => {

    const id = req.params.id; //get id from params
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }

    const hashPassword = bcrypt.hashSync(password);//hash new password
    let user;

    try {
        user = await User.findByIdAndUpdate(id, { name, email, password: hashPassword },{new:true})
            .select('-password');//exclude and hash the password
    } catch (err) {

        return res.status(400).json({ message: 'error updating user' })
    }

    if (!user) {
        return res.status(500).json({ message: "Something wrong in Updating" });
    }

    res.status(200).json(user);

}

export const getUserById = async (req, res, next) => {

    try {

        const id = req.params.id
        const user = await User.findById(id).select('-password')//exclude the password

        if (!user) {
            return res.status(420).json({ message: "User not found" })
        }
        res.status(200).json(user)

    } catch (err) {
        return res.status(400).json({ message: "Error getting user" })
    }

}


export const getUsers = async (req, res, next) => {
    
    try {
        const students = await User.find()
        if (!students) {
            return res.status(420).json({ message: "No user found" })
        }
        res.status(200).json({ students }); //get all students objects
    } catch (err) {
        res.status(420).json({ message: "error getting users" })
    }

}