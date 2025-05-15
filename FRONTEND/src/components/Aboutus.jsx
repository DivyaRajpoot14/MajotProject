import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 font-opensans mt-20" >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">About Our Quiz Website</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Your smart companion to master BCA subjects through interactive quizzes and engaging practice tools.
        </p>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600 font-poppins">Who We Are</h2>
        <p className="text-lg leading-relaxed">
          We are an innovative quiz platform dedicated to BCA students. Our mission is to simplify your learning process
          through structured quizzes, real-time feedback, and performance tracking — all in a gamified experience.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-8 text-blue-600 text-center font-poppins">Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Curriculum-Aligned",
              desc: "Covers all BCA subjects like Programming, DBMS, CN, OS & more.",
            },
            {
              title: "Progress Tracking",
              desc: "Check your level-wise and total performance anytime.",
            },
            {
              title: "Flexible Learning",
              desc: "Study anywhere, anytime from any device.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-700 font-poppins">{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 py-12 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-8 text-blue-700 text-center font-poppins">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Subject-Wise Quizzes",
            "Easy, Medium & Advanced Levels",
            "Access Control by Progress",
            "Live Timer for Each Quiz",
            "Next/Previous Navigation",
            "Real-Time Results & Feedback",
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border-l-4 border-blue-500 shadow-md hover:scale-105 transform transition duration-300"
            >
              <p className="text-lg font-medium text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4">
        <h2 className="text-3xl font-bold mb-4 font-poppins">Start Learning Smarter Today!</h2>
        <p className="mb-6 text-lg">Join thousands of BCA students and level up your learning experience.</p>
        <a
          href="/quize"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
        >
          Explore Quizzes
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
