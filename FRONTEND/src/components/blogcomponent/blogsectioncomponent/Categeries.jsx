import React from "react";
import { Link } from "react-router-dom";
const Category = () => {
    return (
 
        <div className="blog-categories mt-4">
            <h4 className="categorytext text-warning">Categories</h4>
            <ul className="list-unstyled">
                <li className="border-bottom pb-2 mb-2">
                    <Link to="/category/technology" className="text-decoration-none text-white">
                        Technology
                    </Link>
                </li>
                <li className="border-bottom pb-2 mb-2">
                    <Link to="/category/health" className="text-decoration-none text-white">
                        Health
                    </Link>
                </li>
                <li className="border-bottom pb-2 mb-2">
                    <Link to="/category/travel" className="text-decoration-none text-white">
                        Travel
                    </Link>
                </li>
                <li className="border-bottom pb-2 mb-2">
                    <Link to="/category/business" className="text-decoration-none text-white">
                        Business
                    </Link>
                </li>
                <li className="border-bottom pb-2 mb-2">
                    <Link to="/category/education" className="text-decoration-none text-white">
                        Education
                    </Link>
                </li>
            </ul>
        </div>
        
    );
};

export default Category;
