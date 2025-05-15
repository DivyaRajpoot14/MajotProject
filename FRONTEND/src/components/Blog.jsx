import React from "react";

const blogs = [
  {
    id: 1,
    title: "Top 10 Quiz Tips for Beginners",
    description:
      "Master your first quiz with these essential tips and strategies to help you succeed.",
    date: "May 12, 2025",
  },
  {
    id: 2,
    title: "Why Quizzes Improve Learning",
    description:
      "Discover how quizzes help reinforce knowledge and make learning interactive.",
    date: "May 10, 2025",
  },
  {
    id: 3,
    title: "Level Up: How to Prepare for Level-based Quizzes",
    description:
      "Tactics to handle time limits, difficulty jumps, and scoring methods in level-based quiz formats.",
    date: "May 8, 2025",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-blue-500 py-12 text-center text-white mt-20">
        <h1 className="text-4xl font-bold">Quiz Blog</h1>
        <p className="mt-2 text-lg">Get the latest tips, news, and insights</p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-blue-500 rounded-xl shadow hover:shadow-lg transition-all duration-300"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-500">
                {blog.title}
              </h2>
              <p className="mt-2 text-gray-700">{blog.description}</p>
              <p className="mt-4 text-sm text-gray-500">{blog.date}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
