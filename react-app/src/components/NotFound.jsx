import React from "react";
import {Link, useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>404 Not Found</h1>
            <p>Page you are looking for does not exist</p>
        </div>
    )
}

export default Notfound;