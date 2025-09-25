import { Link } from "react-router-dom";
import './style/HomePage.css';
import React from "react";
const AboutPage = () => {
    return (
        <div>
            <h1>เกี่ยวกับร้านนี้</h1>
            <p>ร้านนี้ขายหนังสือ</p>
            <Link to="/books">View Books</Link>
        </div>
    );
}
export default AboutPage;