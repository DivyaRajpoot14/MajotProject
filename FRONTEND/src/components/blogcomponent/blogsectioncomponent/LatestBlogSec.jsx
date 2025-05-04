import React from "react";
import { Link } from "react-router-dom";

const LatestBlogs = ({ blogs }) => {
    return (
        <div className="latest-blogs mt-3">
            <h4 className="text-warning">Latest Blogs</h4>
            <ul className="list-unstyled">
                {blogs.length > 0 ? (
                    blogs.slice(-10).reverse().map((blog) => (
                        <li key={blog._id} className="border-bottom pb-2 mb-3">
                            <Link to={`/blog/${blog._id}`} className="text-decoration-none text-white">
                                {blog.title || "Untitled Blog"}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li className="text-white">No blogs available</li>
                )}
            </ul>
        </div>
    );
};

export default LatestBlogs;
