import React from "react";
import { Link } from "react-router-dom";

function RenderHtmlElementsToTheDOM () {
    return(
        <div className="main-content">
            <h1>Render HTML Elements to the DOM</h1>
            <p>
                With React, we can render this JSX directly to the HTML DOM using React’s rendering API known as ReactDOM.
            </p>
            <p>
            ReactDOM offers a simple method to render React elements to the DOM which looks like this: ReactDOM.render(componentToRender, targetNode), where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.
            </p>
            <p>
            As you would expect, “ReactDOM.render()” must be called after the JSX element declarations, just like how you must declare variables before using them.
            </p>
            <code>
                <div>
                    <span>{"const JSX = ("}</span>
                    <br/>
                    <span>{"| <div>"}</span>
                    <br/>
                    <span>{"| | <h1>Hello World</h1>"}</span>
                    <br/>
                    <span>{"| | <p>Lets render this to the DOM</p>"}</span>
                    <br/>
                    <span>{"| </div>"}</span>
                    <br/>
                    <span>{");"}</span>
                    <br/>
                    <span>{'ReactDom.render(JSX, document.getElementById("challenge-node"));'}</span>
                </div>
            </code>

        </div>
    )

}

export default RenderHtmlElementsToTheDOM;