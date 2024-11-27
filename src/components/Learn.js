import React from "react";
import { Link } from "react-router-dom";

function Learn() {
    return (
      <div>
        <h1>Learn</h1>
        <Link to="/">
            <button>Home</button>
        </Link>
      </div>
    )
}

export default Learn;