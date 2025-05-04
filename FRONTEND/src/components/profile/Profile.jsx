import { Formik,Field,Form } from "formik";
import * as yup from 'yup';
import React, { useState, useRef } from 'react';
import{IoCameraReverseOutline }from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import {FaRegEyeSlash} from "react-icons/fa";
import NavBar from "../Navbar";
const Profile=()=>{
    const validationSchema = yup.object({
    //     BusinessName:yup.string().required("Please Enter Business Name").matches(/^([A-Zz-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,'Name Can Only Contain Alphabets.'),
    //    FirstName:yup.string().required("Please Enter First Name").matches(/^([A-Zz-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,'Name Can Only Contain Alphabets.'),
    //    LastName:yup.string().required("Please Enter Last Name").matches(/^([A-Zz-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,'Name Can Only Contain Alphabets.'),
    //   Dob:yup.string().required("Please Enter Your DOB"),
    //    MobileNumber:yup.number() 
    //     .min(1000000000,"Not Valid Phone NUmber")
    //     .max(9999999999,"Not Valid Phone Number")
    //     .required(" Please Enter Mobile Number"),
    //     Email:yup.string().email('Invalid Email').required("Please Enter Email Id"),
    //     Address:yup.string().required("Please Enter Your Address"),
    //     Signature:yup.string().required("Please Upload Your Signature"),
    //     State:yup.string().required("Please Enter State Name"),
    //     Country:yup.string().required("Please Enter country Name"),
    //     Password:yup.string().min(6,"Must be at least 6 characters").required(" Please Enter Password")
    //     .max(10),
    //     Businesstype:yup.string().required("Please Enter Your Bussiness Type"),
    //     BusinessCatagory:yup.string().required("Please Enter Your Bussiness Catagory"),
    //     IndustryName:yup.string().required("Please Enter Industry Name").matches(/^([A-Zz-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,'Name Can Only Contain Alphabets.') ,
    //     BussinessImage:yup.string().required("Please Enter Business Image").matches(/^([A-Zz-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,'Name Can Only Contain Alphabets.'),
    //     SignatureImage:yup.string().required("Please Enter Signature Image").matches(/^([A-Zz-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,'Name Can Only Contain Alphabets.'),
    //     upiaddress:yup.string().required("Please Enter Your UPI ID"),
    //     qrcode:yup.string().required("Please Enter Your QR Code"),
    })
  
    const [selectedImage, setSelectedImage] = useState("");
    const fileInputRef = useRef(null);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
  
  
      // Check if the file is an image
      if (file && file.type.startsWith('image/')) {
        // Create a URL for the selected image
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
        };
        reader.readAsDataURL(file);
      } else   
   {
        alert('Please select an image file.');
      }
    };

    
  //  const navigatePath = "/";
  //  const { data, loading, error, postData, status } =
  //    usePostCustomHook("users/profile", navigatePath);
  
  //  Function to handle form submission
  
  const[showpassword,setshowpassword]=useState(false);

  
return(
<>

<div className="h-screen w-full flex flex-col ">
    <div className="h-[100%] w-full bg-gradient-to-br from-blue-500 to-sky-600 flex flex-row  justify-center ">
    <div className="h-[75dvh    ] mt-14 relative w-[60dvw] flex  z-50  text-white text-3xl text-center">
                <div className="w-full bg-transparent">
               
<div className=" flex justify-start items-start mb-14 ">
        <Formik 
             validationSchema={validationSchema}
             initialValues={{
              bussinessImage:"",
                firstName:"",
                lastName:"",
                dob:"",
                mobileNumber:"",
                email:"",
                password:"",
              
             }}
             onSubmit={(values) => {
              console.log(values)
              alert("successfully saved")
                
            }}
              >
              <Form className="formdiv h-full w-[1285px] bg-transparent" action="#">
                
              <div className="flex h-[700px] w-full  mt-10 ">
   {/* profie picture div */} 
     <div className="h-[99%] w-[97%] flex  flex-col justify-between m-2 shadow-md bg-white outline-none ">
     
     <div className="h-14 w-20  ml-3"> 
     <h1 className="text-blue-500 mt-2 ml-6 font-semibold">Profile</h1> 
    <div className="w-[830px]  ml-6  ">
       <div className="flex items-center  justify-items-center">    
                <div className="w-56 h-52  rounded-full flex justify-start items-center ">   
             <div className=" w-60 h-48 flex  justify-start items-center   ">
                <div className="w-40 h-40 overflow-hidden rounded-full flex justify-start items-center border-4 border-blue-3s00" >
<div className=" bg-[url('https://tse2.mm.bing.net/th?id=OIP.ABfjA-TOwRfrup3YfRpOQwAAAA&pid=Api&P=0&h=180')] flex justify-center items-center h-[150px] w-[150px] ">  
{/* default background image */}
{!selectedImage && (
<input
type="file"
accept="image/*"
id="bussinessImage"
name="bussinessImage"
onChange={handleImageChange}
ref={fileInputRef}
className="h-10 w-10 opacity-0 "
/>
)}
{selectedImage && (
<div>
  <img src={selectedImage} alt="Profile Image" className="" />
</div>
)}
</div>
</div>   
<div>

<label htmlFor="Profileimg" className="bg-blue-600 relative top-14 -left-10 px-2  rounded-full justify-center items-center" >
<button type="button" onClick={() => fileInputRef.current.click()}><IoCameraReverseOutline className="h-6 w-6 "/>
</button>
</label>
</div>
    </div>
    </div> 
    <div className="w-[70%] h-[20%] flex bg-white items-center justify-start  ">
        <div className=" flesx justify-items-start text-lg  border-3 border-blue-500  text-black ">
    <h2>Madhvi Panwaar</h2>
    <h2>14-06-2007</h2>
    <h2>6346765879</h2>
    <h2>madhvip29@gmail.com</h2>
    </div> 
  </div>
  </div>
 <div className="w-full flex flex-row  ">
<div className="h-20  w-2/4 ">
<div className="w-full h-11 relative ">
    <Field type="text" id="firstName"  name="firstName" className="block outline-none outline-zinc-400  px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border dark:focus:border-blue-500 focus:outline-blue-500  focus:outline focus:ring-0 focus:border-blue-600 peer" placeholder="" />
    <label htmlFor="firstName" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name</label>
    
</div>
</div>
<div className="h-20 w-2/4 ml-6">
<div className="w-full h-11 relative">
    <Field type="text" id="lastName"  name="lastName" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
    <label htmlFor="lastName" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Last Name</label>
   
</div>
</div>
</div>
<div className="h-20">
<div className="w-full h-11 relative">
    <Field type="date" id="dob"  name="dob" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
    <label htmlFor="dob" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">DOB</label>
 
</div>
</div>
<div className="h-20">
<div className="w-full h-11 relative">
    <Field type="number" id="mobileNumber"  name="mobileNumber" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
    <label htmlFor="mobileNumber" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Mobile Number</label>
    
</div>
</div>
<div className="h-20">
<div className="w-full h-11 relative">
    <Field type="email" id="email" name="email" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
    <label htmlFor="email" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email Id</label>
    
</div>
</div>
<div className="h-20">
<div className="w-full h-11 relative">
    <Field type={showpassword?"text":"password"} id="password"  name="password" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
    <label htmlFor="password" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
    <button type="button" className="cursor-pointer absolute right-3 top-4 text-gray-500  text-lg" onClick={()=>setshowpassword(!showpassword)}>{showpassword ?(<FaRegEyeSlash />):(<FaRegEye />)}</button>
    
</div>
</div>
</div> 
    </div> 
    <div className="h-16 w-36 flex justify-center   ">
<button type="submit" className="w-[60%] mt-2 h-12  rounded-lg text-white bg-blue-600 hover:bg-primary-700 focus:ring-2 focus:outline-none focus:ring-primary-200 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update</button>
</div>   
   </div>
   </div>
</Form>
 </Formik>

</div>
</div>

 </div>
 </div>
</div>
</>
)
}
export default Profile;
