import React from "react";
import { Link } from 'react-router-dom';

function AddCommentsinJsx() {
    return(
      <div className="main-content">
        <h1>Add Comments in JSX</h1>
        <p>
        JSX is a syntax that gets complied into valid JavaScript. Sometimes, for readability, you might need to add comments to your code. Like most programming languages, JSX has its own way to do this.
        </p>
        <p>
        To put comments inside JSX, you use the syntax "/* */” to wrap around the comment text.
        </p>
        <code>
          <div>
            <span>{"const JSX = ("}</span>
            <br/>
            <span>{"| </div>"}</span>
            <br/>
            <span>{"| | {/* comment */}"}</span>
            <br/>
            <span>{"| | <h1>This is a block of JSX</h1>"}</span>
            <br/>
            <span>{"| </div>"}</span>
            <br/>
            <span>{");"}</span>
          </div>
        </code>
      </div>
    );
}

export default AddCommentsinJsx;

