import { Link } from "react-router-dom";
import './style/HomePage.css';
import React from "react";
const BookListPage = () => {
    return (
        <div>
            <h1>รายการหนังสือ</h1>
            <Link to="/books">View Books</Link>
        </div>
    );
}
export default BookListPage;