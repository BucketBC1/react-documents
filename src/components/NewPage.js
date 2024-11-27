import React from "react";
import { Link } from 'react-router-dom';

function NewPage() {
    return(
      <div>
        <h1>New page</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/new-page/learn">
          <button>learn</button>
        </Link>
      </div>
    );
}

export default NewPage;