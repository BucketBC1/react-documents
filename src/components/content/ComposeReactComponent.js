import React from "react";

function ComposeReactComponent() {
    return(
        <div className="main-content">
            <h1>Compose React Component</h1>
            <p>
                As the challenges continue to use more complex composition with React component and JSX, there is one important point to note. Rendering ES6 style class components within other components is no different than rendering the simple components you used in the last few challenges. You can render JSX elements, stateless functional components, and ES6 class components within other components.
            </p>
            <code>
                <div>
                    <span>{"class Fruits extends React.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props);"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | return ("}</span>
                    <br/>
                    <span>{"| | | <div>"}</span>
                    <br/>
                    <span>{"| | | | <h2>Fruits:</h2>"}</span>
                    <br/>
                    <span>{"| | | | <NonCitrus/>"}</span>
                    <br/>
                    <span>{"| | | | <Citrus/>"}</span>
                    <br/>
                    <span>{"| | | </div>"}</span>
                    <br/>
                    <span>{"| | );"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{"- - - - - - - - - - - - - - - - - -"}</span>
                    <br/>
                    <span>{"class TypesOfFood extends React.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props);"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | return ("}</span>
                    <br/>
                    <span>{"| | | <div>"}</span>
                    <br/>
                    <span>{"| | | | <h2>Types of Food::</h2>"}</span>
                    <br/>
                    <span>{"| | | | <Fruits/>"}</span>
                    <br/>
                    <span>{"| | | | <Vegetables/>"}</span>
                    <br/>
                    <span>{"| | | </div>"}</span>
                    <br/>
                    <span>{"| | );"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                </div>
            </code>
        </div>
        

    )
}

export default ComposeReactComponent;