
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobileNumber.match(/^\d{10}$/))
      newErrors.mobileNumber = "Enter a valid 10-digit mobile number";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email";
    if (formData.password.length < 6 || formData.password.length > 10)
      newErrors.password = "Password must be 6–10 characters";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setServerError("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:5000/User/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      toast.success("Signup successful!");
  
      // Delay navigation by 3 seconds (3000 ms)
      setTimeout(() => {
        navigate("/loginform");
      }, 3000);
  
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message || "Server Error";
        setServerError(message);
        toast.error(message);
      } else {
        setServerError("Something went wrong. Please try again.");
        toast.error("Something went wrong. Please try again.");
      }
    }
  };
  

  return (
    <>


  
    <div className="min-h-screen w-[100dvw] bg-gradient-to-br from-blue-500 to-sky-600 text-white flex flex-col items-center justify-center">
    <ToastContainer position="top-right" autoClose={2000}  />

      <form
        onSubmit={handleSubmit}
        className="w-[35dvw] h-auto bg-white shadow-2xl p-5 rounded-lg"
      >
        <div className="w-full text-center mb-6">
          <h1 className="text-xl font-bold text-blue-600 md:text-3xl">Join Us!</h1>
          <h3 className="text-gray-500 font-medium">Sign up Now To Become A Member</h3>
        </div>

        <div className="w-[95%] ml-3 mb-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="block outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg appearance-none peer"
              placeholder=""
            />
            <label
              htmlFor="name"
              className="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
            >
              Full Name
            </label>
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>
        </div>

        <div className="w-[95%] ml-3 mb-4">
          <div className="relative">
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="block outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg appearance-none peer"
              placeholder=""
            />
            <label
              htmlFor="mobileNumber"
              className="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
            >
              Mobile Number
            </label>
            {errors.mobileNumber && (
              <p className="text-sm text-red-500 mt-1">{errors.mobileNumber}</p>
            )}
          </div>
        </div>

        <div className="w-[95%] ml-3 mb-4">
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg appearance-none peer"
              placeholder=""
            />
            <label
              htmlFor="email"
              className="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
            >
              Email Id
            </label>
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="w-[95%] ml-3 mb-6">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="block outline-none outline-zinc-400 px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg appearance-none peer"
              placeholder=""
            />
            <label
              htmlFor="password"
              className="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-4 text-black"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>
        </div>

        {serverError && <p className="text-red-500 text-center mb-2">{serverError}</p>}

        <div className="w-[95%] ml-3">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition"
          >
            SIGNUP
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Already a member?{" "}
          <span
            className="text-blue-600 font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/loginform")}
          >
            LogIn here
          </span>
        </p>
      </form>
    </div>
    </>
  );
};

export default SignupForm;
