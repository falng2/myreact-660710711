import { Link } from "react-router-dom";
import './style/HomePage.css';
import React from "react";
const CategoryPage = () => {
    return (
        <div>
            <h1>ชนิดหนังสือ</h1>
            <Link to="/books">View Books</Link>
        </div>
    );
}
export default CategoryPage;