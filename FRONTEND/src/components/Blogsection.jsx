import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/blogs")
            .then((response) => response.json())
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Spinner animation="border" />;
    }

    return (
        <div className="container my-5">
            <h2 className="text-center text-white mb-4">Latest Blogs</h2>
            <div className="row">
                {blogs.map((blog) => (
                    <div className="col-md-4 mb-4" key={blog.id}>
                        <Card>
                            <Card.Img variant="top" src={blog.image} alt={blog.title} />
                            <Card.Body>
                                <Card.Title>{blog.title}</Card.Title>
                                <Card.Text>{blog.description.substring(0, 100)}...</Card.Text>
                                <Button variant="primary" href={`/blog/${blog.id}`}>
                                    Read More
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
