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
                </div>
                <div>
                    <span>{"| constructor(props) {"}</span>
                </div>
                <div>
                    <span>{"| | super(props);"}</span>
                </div>
                <div>
                    <span>{"| }"}</span>
                </div>
                <div>
                    <span>{"| render() {"}</span>
                </div>
                <div>
                    <span>{"| | return ("}</span>
                </div>
                <div>
                    <span>{"| | | <div>"}</span>
                </div>
                <div>
                    <span>{"| | | | <h2>Fruits:</h2>"}</span>
                </div>
                <div>
                    <span>{"| | | | <NonCitrus/>"}</span>
                </div>
                <div>
                    <span>{"| | | | <Citrus/>"}</span>
                </div>
                <div>
                    <span>{"| | | </div>"}</span>
                </div>
                <div>
                    <span>{"| | );"}</span>
                </div>
                <div>
                    <span>{"| }"}</span>
                </div>
                <div>
                    <span>{"};"}</span>
                </div>
                <div>
                    <span>{"- - - - - - - - - - - - - - - - - -"}</span>
                </div>
                <div>
                    <span>{"class TypesOfFood extends React.Component {"}</span>
                </div>
                <div>
                    <span>{"| constructor(props) {"}</span>
                </div>
                <div>
                    <span>{"| | super(props);"}</span>
                </div>
                <div>
                    <span>{"| }"}</span>
                </div>
                <div>
                    <span>{"| render() {"}</span>
                </div>
                <div>
                    <span>{"| | return ("}</span>
                </div>
                <div>
                    <span>{"| | | <div>"}</span>
                </div>
                <div>
                    <span>{"| | | | <h2>Types of Food::</h2>"}</span>
                </div>
                <div>
                    <span>{"| | | | <Fruits/>"}</span>
                </div>
                <div>
                    <span>{"| | | | <Vegetables/>"}</span>
                </div>
                <div>
                    <span>{"| | | </div>"}</span>
                </div>
                <div>
                    <span>{"| | );"}</span>
                </div>
                <div>
                    <span>{"| }"}</span>
                </div>
                <div>
                    <span>{"};"}</span>
                </div>
            </code>
        </div>
        

    )
}

export default ComposeReactComponent;