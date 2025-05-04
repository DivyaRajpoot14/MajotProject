import React from "react";

const ImageGallery = ({ blogs }) => {
    return (
        <div className="image-widget mt-4">
            <h4 className="text-warning">Image Gallery</h4>
            <div className="d-flex flex-wrap gap-2">
                {blogs.length > 0 ? (
                    blogs
                        .filter(blog => blog.images && blog.images.length > 0)
                        .slice(0, 12)
                        .map(blog => (
                            <div key={blog._id} className="image-widget-item">
                                <img 
                                    src={blog.images[0]} 
                                    alt={blog.title || "Blog Image"} 
                                    className="img-thumbnail" 
                                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                                />
                            </div>
                        ))
                ) : (
                    <p className="text-white">No images available</p>
                )}
            </div>
        </div>
    );
};

export default ImageGallery;
