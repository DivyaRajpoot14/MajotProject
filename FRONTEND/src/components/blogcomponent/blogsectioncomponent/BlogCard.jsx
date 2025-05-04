import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const toggleReadMore = (e) => {
        e.stopPropagation();
        setExpanded(!expanded);
    };

    return (
        <Card className="blog-card" onClick={() => navigate(`/blog/blogs/${blog._id}`)}>
            <div className="blog-card-div d-flex">
                <div className="image-section">
                    <Card.Img
                        variant="top"
                        src={blog.images?.length > 0 ? blog.images[0] : "default-image.jpg"}
                        alt={blog.title || "No Title"}
                        className="h-100 w-100 cover border border-4"
                    />
                </div>
                <div className="description">
                <Card.Body >
                    <Card.Title className="blog-title text-warning fs-2">
                        {blog.title || "No Title"}
                    </Card.Title>
                    <Card.Text className="blog-author text-white">
                        <strong>Author:</strong> {blog.author || "Unknown"}
                    </Card.Text>
                    <div className="mt-1 text-white">
                        <div className={`content-formated ${expanded ? 'expanded' : 'collapsed'}`}>
                            {blog.content ? (
                                <div dangerouslySetInnerHTML={{
                                    __html: expanded ? blog.content : blog.content.slice(0, 200) + '...'
                                }} />
                            ) : (
                                <p>No content available</p>
                            )}
                            {blog.content && blog.content.length > 200 && (
                                <div className="read-more-container mt-2">
                                    <button className="readbtn text-white p-0 border-0 bg-transparent" onClick={toggleReadMore}>
                                        {expanded ? "Read Less" : "Read More"}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </Card.Body>
                </div>
            </div>
        </Card>
    );
};

export default BlogCard;
