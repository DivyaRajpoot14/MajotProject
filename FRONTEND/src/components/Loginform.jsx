//  import { Formik,Field,Form,ErrorMessage} from "formik"
// import * as yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { FaRegEye } from "react-icons/fa";
// import {FaRegEyeSlash} from "react-icons/fa";
// import { useState } from "react";

// const validationSchema = yup.object({
//     Mobilenumber:yup.number() 
//     .min(1000000000,"Not Valid Phone Number")
//     .max(9999999999,"Not Valid Phone Number")
//     .required("Mobile Number is required"),
//     password:yup.string().required("Password is required").min(6).max(10),
// })
// const Loginform=()=>{
//     const navigate=useNavigate();
//     const singup=()=>{
//         navigate('/signup')
//     }
//     const[showpassword,setshowpassword]=useState(false);
//     return(
//         <>
        
//     <section className="bg-gradient-to-br from-blue-500 to-sky-600  ">
//   <div className=" flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  
//       <div className=" w-[35dvw] h-[60dvh] bg-white shadow dark:border  rounded-lg"> 
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tigh text-blue-600 md:text-3xl  items-center">
//                   Welcome Back!
//               </h1>
//               <h3 className="flex justify-center text-lg font-medium leading-tight tracking-tig text-gray-500   items-center">Log in to access your account</h3>
//               <Formik
//                validationSchema={validationSchema}
//                initialValues={{
//                  Mobilenumber:"",
//                  password:"",
//               }}
//              onSubmit={(value)=>{
//                 console.log(value)
//                 alert("successfully submitted")

//              }}>

//               <Form className="space-y-4 md:space-y-6" action="#">
                  
// <div className="h-20">
// <div className="w-full h-11 relative">
//     <Field type="number" id="mobileNumber"  name="mobileNumber" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
//     <label htmlFor="mobileNumber" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Mobile Number</label>
// </div>
// </div>
// <div className="h-20">
// <div className="w-full h-11 relative">
//     <Field type={showpassword?"text":"password"} id="password"  name="password" className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-blue-500 focus:ring-0 focus:border-blue-600 peer" placeholder="" />
//     <label htmlFor="password" className="absolute text-lg font-normal text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
//     <button type="button" className="cursor-pointer absolute right-3 top-4 text-gray-500  text-lg" onClick={()=>setshowpassword(!showpassword)}>{showpassword ?(<FaRegEyeSlash />):(<FaRegEye />)}</button>
// </div>
// </div>
//                   <div className="flex items-center justify-between">
//                       <div className="flex items-start">
//                           <div className="flex items-center ">
//                             <Field id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required/>
//                           </div>
//                           <div className="ml-3 text-sm">
//                             <label htmlFor="remember" className="text-gray-500">Remember me</label>
//                           </div>
//                       </div>
//                       <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
//                   </div>
//                   <button type="submit" className="w-full text-white  border-2 border-blue-600 bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  hover:border-2 hover:border-blue-400">LOGIN</button>
//                   <p className="text-sm font-light text-gray-500">
//                       Don’t have an account yet? <span onClick={singup} className="font-medium text-primary-600 hover:underline cursor-pointer "> Sign up here</span>
//                       </p>
//               </Form>
//               </Formik>
//           </div>
//       </div>
   
//       </div> 
  
// </section>
//   </>
    
// )}


//  export default Loginform;
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const validationSchema = yup.object({
  mobileNumber: yup
    .number()
    .min(1000000000, "Not Valid Phone Number")
    .max(9999999999, "Not Valid Phone Number")
    .required("Mobile Number is required"),
  password: yup.string().required("Password is required").min(6).max(10),
});

const Loginform = () => {
  const navigate = useNavigate();
  const signup = () => {
    navigate("/signup");
  };

  const [showpassword, setshowpassword] = useState(false);

  const handleLogin = async (values) => {
    try {
      const payload = {
        email: values.mobileNumber, // Assuming mobile is treated as email here
        password: values.password,
        role: "user", // You can change or make this dynamic if needed
      };

      const response = await axios.post("http://localhost:5173/User/login", payload); // Change to your API endpoint
      console.log("Login Success:", response.data);
      alert("Login Successful!");
      // Optionally, save token in localStorage and redirect
      // localStorage.setItem("token", response.data.Token);
      // navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-500 to-sky-600">
        <div className="flex flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-[35dvw] h-[60dvh] bg-white shadow dark:border rounded-lg">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tigh text-blue-600 md:text-3xl  items-center">
                Welcome Back!
              </h1>
              <h3 className="flex justify-center text-lg font-medium leading-tight tracking-tig text-gray-500   items-center">
                Log in to access your account
              </h3>
              <Formik
                validationSchema={validationSchema}
                initialValues={{
                  mobileNumber: "",
                  password: "",
                }}
                onSubmit={handleLogin}
              >
                <Form className="space-y-4 md:space-y-6" action="#">
                  <div className="h-20">
                    <div className="w-full h-11 relative">
                      <Field
                        type="number"
                        id="mobileNumber"
                        name="mobileNumber"
                        className="block  outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal  text-gray-900 bg-transparent rounded-lg appearance-none peer"
                        placeholder=""
                      />
                      <label
                        htmlFor="mobileNumber"
                        className="absolute text-lg font-normal text-gray-500 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                      >
                        Mobile Number
                      </label>
                    </div>
                  </div>

                  <div className="h-20">
                    <div className="w-full h-11 relative">
                      <Field
                        type={showpassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="block outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base font-normal text-gray-900 bg-transparent rounded-lg appearance-none peer"
                        placeholder=""
                      />
                      <label
                        htmlFor="password"
                        className="absolute text-lg font-normal text-gray-500 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                      >
                        Password
                      </label>
                      <button
                        type="button"
                        className="cursor-pointer absolute right-3 top-4 text-gray-500 text-lg"
                        onClick={() => setshowpassword(!showpassword)}
                      >
                        {showpassword ? <FaRegEyeSlash /> : <FaRegEye />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center">
                        <Field
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white border-2 border-blue-600 bg-blue-600 hover:bg-primary-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:border-2 hover:border-blue-400"
                  >
                    LOGIN
                  </button>
                  <p className="text-sm font-light text-gray-500">
                    Don’t have an account yet?{" "}
                    <span
                      onClick={signup}
                      className="font-medium text-primary-600 hover:underline cursor-pointer"
                    >
                      Sign up here
                    </span>
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loginform;
