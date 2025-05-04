import React, { useEffect, useState } from "react";
import { Card, Spinner, Alert, Button, Form } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "../../Header";
import Footer from "../../Footer";
import SearchBar from "./Searchbar";
import LatestBlogs from "./LatestBlogSec";
import ImageGallery from "./ImageGallery";
import BlogCard from "./BlogCard";
import Category from "./Categeries";



const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 4;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("http://localhost:4500/blog/blogs");
                
                console.log("Response:", response); // Logs the full response object
                
                if (!response.ok) {
                    throw new Error("Failed to fetch blogs");
                }
    
                const data = await response.json();
                console.log("Response Data:", data); // Logs the parsed JSON data
    
                setBlogs(Array.isArray(data.data) ? data.data : []);
            } catch (error) {
                console.error("Fetch error:", error); // Logs errors in console
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchBlogs();
        const interval = setInterval(fetchBlogs, 30000);
        return () => clearInterval(interval);
    }, []);
    
    if (loading) return <Spinner animation="border" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

    const filteredBlogs = blogs.filter(blog => 
        blog.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const indexOfLastBlog = currentPage * blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfLastBlog - blogsPerPage, indexOfLastBlog);
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    return (
        <>
            <Header/>
            <div className="w-100 d-flex justify-content-center align-items-center text-center">
                <div className="d-flex flex-column justify-content-center">
    <h1 className=" text-white fw-bold ">
    Learn how to do <br /> Trading by yourself  </h1>
<h4 className="text-white ">Step-by-Step Guide to Learning Trading</h4>
</div>
</div>


      <div className="blog-container d-flex">
      <div className="blog-content flex-grow-2"> 
    {currentBlogs.length > 0 ? (
        currentBlogs.map((blog, index) => (
            <BlogCard key={blog._id || index} blog={blog} />
        ))
    ) : (
        <Alert variant="info">No blogs found.</Alert>
    )}
</div>
{/* 
                <div className="rightdiv-section mt-4">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <LatestBlogs blogs={blogs} />
                    <ImageGallery blogs={blogs} />
                    <Category/>
                </div> */}
            </div>
            {/* <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
            <Footer />
        </>
    );
};

// const Pagination = ({ totalPages, currentPage, setCurrentPage }) => (
    
// <nav aria-label="Page navigation">
//     <ul className="pagination justify-content-center" style={{ backgroundColor: "#111", padding: "12px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "5px" }}>
        
//         {/* Previous Button */}
//         <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`} style={{ marginRight: "5px" }}>
//             <button className="page-link" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                 style={{
//                     backgroundColor: currentPage === 1 ? "#ffb74d" : "orange",
//                     color: "black",
//                     border: "1px solid orange",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     padding: "12px 15px",
//                     borderRadius: "5px",
//                     cursor: currentPage === 1 ? "not-allowed" : "pointer"
//                 }}>
//                 <FaChevronLeft size={14} style={{ marginRight: "5px" }} /> 
//             </button>
//         </li>

//         {/* Page Numbers */}
//         {Array.from({ length: totalPages }, (_, i) => (
//             <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
//                 style={{ borderRadius: "5px" }}>
//                 <button className="page-link" onClick={() => setCurrentPage(i + 1)}
//                     style={{
//                         backgroundColor: currentPage === i + 1 ? "orange" : "black",
//                         color: currentPage === i + 1 ? "black" : "orange",
//                         border: "1px solid orange",
//                         padding: "8px 12px",
//                         fontWeight: "bold",
//                         borderRadius: "5px",
//                         transition: "0.3s"
//                     }}>
//                     {i + 1}
//                 </button>
//             </li>
//         ))}

//         {/* Next Button */}
//         <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`} style={{ marginLeft: "5px" }}>
//             <button className="page-link" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                 style={{
//                     backgroundColor: currentPage === totalPages ? "#444" : "orange",
//                     color: "black",
//                     border: "1px solid orange",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     padding: "12px 15px",
//                     borderRadius: "5px",
//                     cursor: currentPage === totalPages ? "not-allowed" : "pointer"

//                 }}><FaChevronRight size={14} style={{ marginLeft: "5px" }} />
//             </button>
//         </li>

//     </ul>
// </nav>
// );

export default BlogSection;
