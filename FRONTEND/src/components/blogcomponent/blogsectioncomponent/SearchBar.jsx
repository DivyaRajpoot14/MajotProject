
import React from "react";
import { Form, Button } from "react-bootstrap";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="searchbar-section d-flex d-none d-lg-flex">
            <Form.Control
                type="text"
                placeholder="Search blogs by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border-5 border-warning"
                style={{ width: "75%", height: "50px" }}
            />
            <Button 
                variant="warning" 
                className="searchbtn ms-2 text-white" 
                style={{ width: "20%", height: "50px" }}
            >
                Search
            </Button>
        </div>
    );
};

export default SearchBar;
