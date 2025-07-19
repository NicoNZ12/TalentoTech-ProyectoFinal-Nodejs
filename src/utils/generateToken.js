import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

const jwt_secret = process.env.JWT_SECRET
console.log(jwt_secret)

export const generateToken = (userData) => {
    const user = {
        id: userData.id,
        username: userData.username,
        email: userData.email
    };

    return jwt.sign(user, jwt_secret, { expiresIn: "1h" })
}