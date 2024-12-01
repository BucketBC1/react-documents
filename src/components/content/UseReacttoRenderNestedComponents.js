import React from "react";

function UseReactToRenderNestedComponents(){
    return(
        <div className="main-content">
            <h1>Use React to Render Nested Components</h1>
            <p>
                The last challenge showed a simple way to compose two components, but there are many ways you can compose components with React.
            </p>
            <p>
                Component composition is one of React’s powerful features. When you work with React, it is important to start thinking about your user interface in terms of components like the App example in the last challenge. You break down your UI into its basic building blocks, and those pieces become the components. This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.
            </p>
            <code>
                <div>
                    <span>{"const TypesOfFruit = () => {"}</span>
                </div>
                <div>
                    <span>{"| return ("}</span>
                </div>
                <div>
                    <span>{"| | <div>"}</span>
                </div>
                <div>
                    <span>{"| | | <h2>Fruits:</h2>"}</span>
                </div>
                <div>
                    <span>{"| | | <ul>"}</span>
                </div>
                <div>
                    <span>{"| | | | <li>Apples</li>"}</span>
                </div>
                <div>
                    <span>{"| | | | <li>Blueberries</li>"}</span>
                </div>
                <div>
                    <span>{"| | | | <li>Strawberries</li>"}</span>
                </div>
                <div>
                    <span>{"| | | | <li>Bananas</li>"}</span>
                </div>
                <div>
                    <span>{"| | | </ul>"}</span>
                </div>
                <div>
                    <span>{"| | </div>"}</span>
                </div>
                <div>
                    <span>{"| );"}</span>
                </div>
                <div>
                    <span>{"};"}</span>
                </div>
                <div>
                    <span>{"- - - - - - - - - - - - - - -"}</span>
                </div>
                <div>
                    <span>{"const Fruits = () => {"}</span>
                </div>
                <div>
                    <span>{"| return ("}</span>
                </div>
                <div>
                    <span>{"| | <div>"}</span>
                </div>
                <div>
                    <span>{"| | | <TypesOfFruit/>"}</span>
                </div>
                <div>
                    <span>{"| | </div>"}</span>
                </div>
                <div>
                    <span>{"| );"}</span>
                </div>
                <div>
                    <span>{"};"}</span>
                </div>
                <div>
                    <span>{"- - - - - - - - - - - - - - -"}</span>
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
                    <span>{"| | | | <h1>Types of Food:</h1>"}</span>
                </div>
                <div>
                    <span>{"| | | | <Fruits/>"}</span>
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

export default UseReactToRenderNestedComponents;