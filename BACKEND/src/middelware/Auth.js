import jwt from "jsonwebtoken";

export const genrateToken = (user) =>{
    const token = jwt.sign({
        _id:user._id,
        role:user.role,  
    },
     process.env.SCREATE_KEY,
    {
        expiresIn:process.env.JWT_EXPIRES_IN,
    })
    return token;
}