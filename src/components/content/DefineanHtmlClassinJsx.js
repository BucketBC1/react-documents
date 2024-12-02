import React from "react";

function DefineAnHtmlClassinJsx(){
    return(
        <div className="main-content">
            <h1>Define an HTML Class in JSX</h1>
            <p>One key difference is JSX is that you can no longer use the word “class” to define HTML classes. This is because “class” is a reserved word id JavaScript. Instead, JSX uses “className”.</p>
            <p>In fact, the naming convention for all HTML attributesand event references in JSX become camelCase. For example, a click event is JSX is “onClick”, instead of “onclick ”. Likewise, “onchange” becomes “onChange”. While this is a subtle difference, it is an important one to keep in mind moving forward.</p>

            <code>
                <div>
                    <span>
                        {"const JSX = ("}
                    </span>
                    <br/>
                    <span>
                        {'| <div className="myDiv">'}
                    </span>
                    <br/>
                    <span>
                        {"| | <h1>Add a class to this  div</h1>"}
                    </span>
                    <br/>
                    <span>
                        {"| </div>"}
                    </span>
                    <br/>
                    <span>
                        {");"}
                    </span>
                </div>
            </code>

        </div>
    )
}

export default DefineAnHtmlClassinJsx;

