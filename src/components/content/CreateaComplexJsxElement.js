import React from "react";
import { Link } from 'react-router-dom';



function CreateaComplexJsxElement() {
    return(
      <div className="main-content">
        <h1>Create a Complex JSX Element</h1>
        <p>
          The las challenge was a simple example of JSX, but JSX can represent more complex HTML as well.
        </p>
        <p>
          One important thing to know about nested JSX is that it must return a single element.
        </p>
        <p>
          This one parent element would wrap all of the other levels of nested elements.
        </p>
        <p>
          For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.
        </p>
        <p>
          Here’s and example:
        </p>
        <h3>Valid JSX</h3>
        <code>
          <div>
            <span>{"<div>"}</span>
            <br/>
            <span>{"| <p>Paragraph One</p>"}</span>
            <br/>
            <span>{"| <p>Paragraph Two</p>"}</span>
            <br/>
            <span>{"| <p>Paragraph Three</p>"}</span>
            <br/>
            <span>{"</div>"}</span>
          </div>
        </code>
        <h3>Invalid JSX</h3>
        <code>
          <div>
            <span>{"<p>Paragraph One</p>"}</span>
            <br/>
            <span>{"<p>Paragraph Two</p>"}</span>
            <br/>
            <span>{"<p>Paragraph Three</p>"}</span>
          </div>
        </code>
        <p>
          When rendering multiple elements like this, you can wrap them all in parentheses, but it’s not strictly required. Also notice this challenge uses a “div” tag to warp all the child elements within a single parent element. If you remove the “div”, the JSX will no longer transpile. Keep this in mind, since it will also apply when you return JSX elements in react components.
        </p>
        <code>
          <div>
            <span>{"const JSX = <div>"}</span>
            <br/>
            <span>{"| <h1></h1>"}</span>
            <br/>
            <span>{"| <ul>"}</span>
            <br/>
            <span>{"| | <li>Paragraph One</li>"}</span>
            <br/>
            <span>{"| | <li>Paragraph Two</li>"}</span>
            <br/>
            <span>{"| | <li>Paragraph Three</li>"}</span>
            <br/>
            <span>{"| </ul>"}</span>
            <br/>
            <span>{"</div>"}</span>
          </div>
        </code>

      </div>
    );
}

export default CreateaComplexJsxElement;