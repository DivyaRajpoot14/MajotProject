import { Formik,Field,Form } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { FaArrowRight } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import {FaRegEyeSlash} from "react-icons/fa";

const Signup=()=>{
    const navigate=useNavigate();
    const login=()=>{
        navigate('/loginform')
    }
    // const validationSchema = yup.object({
    //    FirstName:yup.string().required("Please Enter First Name").matches(/^([A-Zz-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,'Name Can Only Contain Alphabets.'),
    //    LastName:yup.string().required("Please Enter Last Name").matches(/^([A-Zz-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,'Name Can Only Contain Alphabets.'),
    //   Dob:yup.string().required("Please Enter Your DOB"),
    //    MobileNumber:yup.number() 
    //     .min(1000000000,"Not Valid Phone NUmber")
    //     .max(9999999999,"Not Valid Phone Number")
    //     .required(" Please Enter Mobile Number"),
    //     Email:yup.string().email('Invalid Email').required("Please Enter Email Id"),
    //     Password:yup.string().min(6,"Must be at least 6 characters").required(" Please Enter Password")
    //     .max(10),
    //     ConfirmPassword:yup.string().OneOf([Yup.ref('Password'),null],'Password must be match'),
    // })
    const[showpassword,setshowpassword]=useState(false);
    return(
        <div className="min-h-screen w-[100dvw] bg-gradient-to-br from-blue-500 to-sky-600 text-white flex flex-col items-center justify-center">
     <Formik 
     initialValues={{
        FirstName:"",
        LastName:"",
        MobileNumber:"",
        Email:"",
        Password:"",
    ConfirmPassword:"",
     }}
              onSubmit={value=>{
              console.log(value)
              alert("succesfully submitted")
       }}>
        <Form>
        <div className="w-[35dvw] h-[70dvh] bg-white shadow-2xl p-5 rounded-lg">
        <h1 className="w-[100%] h-20 flex flex-col justify-center  items-center">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tigh text-blue-600 md:text-3xl">Join Us!</h1>
              <h3 className="text-gray-500 font-medium ">Sign up Now To Became A Member</h3>
              </h1>
            <div className="w-[95%] flex justify-between ml-3">      
     <div className="h-20 w-2/4 ">
   <div className="w-full h-10 relative ">
        <Field type="text" id="FirstName"  name="FirstName" className="block outline-none outline-zinc-400  px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border dark:focus:border-blue-500 focus:outline-blue-500  focus:outline focus:ring-0 focus:border-blue-600 peer" placeholder="" />
        <label htmlFor="FirstName" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name</label>
    </div>
   </div>
   <div className="h-20 w-2/4 ml-6">
   <div className="w-full h-10 relative">
        <Field type="text" id="LastName"  name="LastName" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
        <label htmlFor="LastName" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Last Name</label>
    </div>
   </div>
   </div>

   <div className="h-20 w-[95%] ml-3">
   <div className="w-full h-10 relative">
        <Field type="number" id="MobileNumber"  name="MobileNumber" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
        <label htmlFor="MobileNumber" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Mobile Number</label>
    </div>
   </div>
   <div className="h-20 w-[95%]  ml-3">
   <div className="w-full h-10 relative">
        <Field type="email" id="Email" name="Email" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
        <label htmlFor="Email" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email Id</label>
        
    </div>
   </div>
   <div className="h-20 w-[95%]  ml-3">
   <div className="w-full h-10 relative">
        <Field type={showpassword?"text":"password"} id="Password"  name="Password" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
        <label htmlFor="Password" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
        <button type="button" className=" text-black cursor-pointer absolute right-3 top-4" onClick={()=>setshowpassword(!showpassword)}>{showpassword ?(<FaRegEyeSlash />):(<FaRegEye />)}</button>
       
    </div>
   </div>
   <div className="h-20 w-[95%] ml-3 ">
   <div className="w-full h-10 relative">
        <Field type="text"id="confirmPassword"  name="confirmPassword" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
        <label htmlFor="confirmPassword" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm Password</label>
        <button type="button" className="cursor-pointer absolute right-3 top-4" ></button>
       
    </div>
   </div>
   <div className=" w-[95%] ml-3">
   <button type="submit" className="w-full text-white  bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">SIGNUP</button>
   </div>
   <p className="text-sm font-light text-gray-500 flex justify-center m-2">
                      Already a member?<span onClick={login} className="font-medium text-primary-600 hover:underline cursor-pointer ">LogIn  here</span>
                      </p>
   </div>
   </Form>
   </Formik>
        </div>
        
        
    
    )
}
export default Signup;