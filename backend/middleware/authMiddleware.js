import jwt from 'jsonwebtoken'

//middleware for user authentication
export const authMiddleware = async (req, res, next) => {

    const Authorization = req.headers.Authorization || req.headers.authorization

    if (Authorization && Authorization.startsWith("Bearer")) {
        const token = Authorization.split(' ')[1] //extract the payload
        jwt.verify(token, process.env.JWT_SECRET, (err, info) => {
            if (err) {
                return res.status(421).json({ message: "Unauthorized invalid token" })
            }

            req.user = info; //store logged user info
            next()//move to next function
        })
    } else {
        return res.status(420).json({ message: "Unauthorized no token" })
    }

}