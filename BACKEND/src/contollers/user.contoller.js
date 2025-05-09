import asyncHandler from "../utilits/asyncHandler.js";
import { genrateToken } from "../middelware/Auth.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utilits/ApiError.js";
import { ApiResponse } from "../utilits/ApiResopnse.js";

const cretaeUser = asyncHandler(async (req, res) => {
  const { name, mobileNumber, email, password, role } = req.body;

  if (!name || !mobileNumber || !email || !password) {
      throw new ApiError(400, "Please provide all fields");
  }

  const findUser = await User.findOne({email});

  if (findUser) {
    throw new ApiError(400, "User Already Exist");
  } 

  const newUser = await User.create({
    name,
    mobileNumber,
    email,
    password,
    role,
  });
  if (!newUser) {
    throw new ApiError(400, "User Not Created");
  }

  if(newUser){
    return res.json(new ApiResponse(201, "User Created Successfully"))
  }
  
});

const loginUser = asyncHandler(async (req, res) => {
  const {email,password,role} = req.body;
  if (!email || !password || !role) {
    throw new ApiError(400, "Please provide all fields");
  }
  const findUser = await User.findOne({email,role});
  if (!findUser) {
    throw new ApiError(400, "Invalid Credentials");
  }

  const isPasswordCorrect = await findUser.isPasswordCorrect(password);
  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid Credentials");
  }else{
    const token = genrateToken(findUser);
    const user = await User.findById(findUser._id,"-password");
    return res.json(new ApiResponse(200,{LoginUser:user,Token:token},"User login successfully"));
  }

});

export { cretaeUser, loginUser };