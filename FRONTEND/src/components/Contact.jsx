import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [status, setStatus] = useState("");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        "service_b2f8a07",     
        "template_jtbzkiv",
        formRef.current,
        "uUqwZy41a-_Ohidcc"     
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <div className="bg-white text-gray-800 font-opensans mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Contact Me</h1>
        <p className="text-lg max-w-xl mx-auto">
          Have questions, feedback, or need support? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-6 md:px-20 bg-blue-50">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 font-poppins mb-6">
            Send a Message
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2 font-medium">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 mb-2 font-medium">Subject</label>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="col-span-2 text-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="mt-4 text-green-600 font-medium">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="mt-4 text-red-600 font-medium">Failed to send message. Try again.</p>
              )}
            </div>
          </form>
        </div>
      </section>


{/* Modern Contact Info Section */}
<section className="py-12 px-6 md:px-20 bg-white">
  <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
    <div className="flex flex-col items-center text-center bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
      <Mail className="w-10 h-10 text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-700">Email</h3>
      <p className="text-gray-600 mt-1">divyapanwar142004@gmail.com</p>
    </div>
    
    <div className="flex flex-col items-center text-center bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
      <Phone className="w-10 h-10 text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
      <p className="text-gray-600 mt-1">+916261965414</p>
    </div>
    
    <div className="flex flex-col items-center text-center bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
      <MapPin className="w-10 h-10 text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-700">Location</h3>
      <p className="text-gray-600 mt-1">Khandwa</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default ContactPage;
