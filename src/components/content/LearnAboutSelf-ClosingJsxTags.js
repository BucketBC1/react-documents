import React from "react";

function LearnAboutSelfClosingJsxTags (){
    return(
        <div className="main-content">
            <h1>Learn About Self-Closing JSX Tags</h1>
            <p>
                Another important way in which JSX differs from HTML is in the idea of the self-closing tag.
            </p>
            <p>
                In HTML, almost all tags have both an opening and closing tag: {'"<div></div>"'}; the closing tag always has a forward slash before the tag name that you are closing.
            </p>
            <p>
                However, there are special instances in HTML called “self-closing tags”, or tags that don’t require both an opening and closing tag before another tag can start.  
            </p>
            <p>
                For example the line-brak tag can be written as {'"<br>"'} or as {'"<br />"'}, but should never be written as {'"<br></br>"'}, since it doesn’t contain any content.
            </p>
            <p>
                In JSX, the rules are a little different. Any JSX elements can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as {'"<br />"'} in order to be valid JSX that can be transpiled. A {'"<div>"'}, on the another hand, can be written as {'"<div/>"'} or {'"<div></div>"'}. The difference is that in the first syntax version there is no way to include anything in {'"<div />"'}. You will see in later challenges that this is useful when rendering React components.
            </p>
            <code>
                <div>
                    <span>{"const JSX = ("}</span>
                </div>
                <div>
                    <span>{"<div>"}</span>
                </div>
                <div>
                    <span>{"<h2>Welcome to React!</h2> "}</span>
                </div>
                <div>
                    <span>{"<br/>"}</span>
                </div>
                <div>
                    <span>{"<p>Be sure to close all tags!</p>"}</span>
                </div>
                <div>
                    <span>{"<hr/>"}</span>
                </div>
                <div>
                    <span>{"</div>"}</span>
                </div>
                <div>
                    <span>{");"}</span>
                </div>
            </code>

        </div>
    )
}

export default LearnAboutSelfClosingJsxTags;