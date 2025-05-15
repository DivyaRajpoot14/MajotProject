
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Form Validation
const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required").min(6).max(10),
});

const Loginform = () => {
  const [showpassword, setshowpassword] = useState(false);
  const navigate = useNavigate();

  const signup = () => {
    navigate("/signup");
  };
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const payload = {
        email: values.email,
        password: values.password,
        role: "user",
      };
  
      const response = await axios.post("http://localhost:5000/User/login", payload);
      console.log("Login Success:", response.data);
  
      const token = response.data?.data?.Token;
  
      if (values.remember) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }
  
      // Show toast immediately
      toast.success("Login Successful!", { toastId: "login-success" });
  
      // Unblock the form immediately so user can interact if needed
      setSubmitting(false);
  
      // After 3 seconds, navigate and then reload the page
      setTimeout(() => {
        navigate("/");        // Update URL first
        window.location.reload(); // Then reload page to refresh app state
      }, 3000);
  
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Login Failed", { toastId: "login-error" });
      setSubmitting(false);
    }
  };
  
  
 

  return (
    <>
      <section className="bg-gradient-to-br from-blue-500 to-sky-600 min-h-screen flex items-center justify-center px-4 py-8">
        {/* Toast container */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          draggable
          // theme="colored"
        />

        <div className="bg-white shadow dark:border rounded-lg
          w-full max-w-md sm:max-w-lg md:max-w-xl
          min-h-[60vh] flex flex-col
          p-6 sm:p-8
        ">
          <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-blue-600 md:text-3xl items-center">
            Welcome Back!
          </h1>
          <h3 className="flex justify-center text-lg font-medium text-gray-500 mb-6 items-center">
            Log in to access your account
          </h3>

          <Formik
            validationSchema={validationSchema}
            initialValues={{
              email: "",
              password: "",
              remember: false,
            }}
            onSubmit={handleLogin}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="space-y-4 md:space-y-6">
                {/* Email Field */}
                <div className="h-20">
                  <div className="w-full h-11 relative">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="block outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg appearance-none peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-lg font-normal text-gray-500 duration-300 transform -translate-y-5 scale-75 top-2 z-10 origin-[1] bg-white px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                    >
                      Email
                    </label>
                    <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                  </div>
                </div>

                {/* Password Field */}
                <div className="h-20">
                  <div className="w-full h-11 relative">
                    <Field
                      type={showpassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="block outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg appearance-none peer"
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
                    <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <label className="flex items-center text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="mr-2 checked:bg-green-400 rounded-md"
                      checked={values.remember}
                      onChange={() => setFieldValue("remember", !values.remember)}
                    />
                    Remember Me
                  </label>

                  <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full text-white border-2 border-blue-600 bg-blue-600 hover:bg-blue-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  disabled={isSubmitting}
                >
                  LOGIN
                </button>

                <p className="text-sm font-light text-gray-500 text-center">
                  Don’t have an account yet?{" "}
                  <span
                    onClick={signup}
                    className="font-medium text-blue-600 hover:underline cursor-pointer"
                  >
                    Sign up here
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Loginform;
