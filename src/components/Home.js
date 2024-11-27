import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return(
      <div>
        <h1>React examples</h1>
        <Link to="/new-page">
          <button>Go to new page</button>
        </Link>
      </div>
    );
}

export default Home;

