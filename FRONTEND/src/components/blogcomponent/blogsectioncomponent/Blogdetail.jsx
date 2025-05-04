import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) {
        setError("Invalid blog ID");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:4500/blog/blogs/${id}`); // ✅ Correct API call
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBlog(data.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to fetch blog. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p className="text-warning">Loading...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (!blog) return <p className="text-danger">Blog not found.</p>;

  return (
    <div className="blog-detail-container container mt-4">
      <Card className="blog-detail-card p-4">
        <Card.Img
          variant="top"
          src={blog.images?.length > 0 ? blog.images[0] : "default-image.jpg"}
          alt={blog.title || "No Title"}
          className="detail-image w-100 border border-4"
        />
        <Card.Body>
          <Card.Title className="text-warning fs-2">{blog.title}</Card.Title>
          <Card.Text className="text-white">
            <strong>Author:</strong> {blog.author || "Unknown"}
          </Card.Text>
          <div
            className="text-white mt-3"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogDetail;

