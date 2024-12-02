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
                    <br/>
                    <span>{"| return ("}</span>
                    <br/>
                    <span>{"| | <div>"}</span>
                    <br/>
                    <span>{"| | | <h2>Fruits:</h2>"}</span>
                    <br/>
                    <span>{"| | | <ul>"}</span>
                    <br/>
                    <span>{"| | | | <li>Apples</li>"}</span>
                    <br/>
                    <span>{"| | | | <li>Blueberries</li>"}</span>
                    <br/>
                    <span>{"| | | | <li>Strawberries</li>"}</span>
                    <br/>
                    <span>{"| | | | <li>Bananas</li>"}</span>
                    <br/>
                    <span>{"| | | </ul>"}</span>
                    <br/>
                    <span>{"| | </div>"}</span>
                    <br/>
                    <span>{"| );"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{"- - - - - - - - - - - - - - -"}</span>
                    <br/>
                    <span>{"const Fruits = () => {"}</span>
                    <br/>
                    <span>{"| return ("}</span>
                    <br/>
                    <span>{"| | <div>"}</span>
                    <br/>
                    <span>{"| | | <TypesOfFruit/>"}</span>
                    <br/>
                    <span>{"| | </div>"}</span>
                    <br/>
                    <span>{"| );"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{"- - - - - - - - - - - - - - -"}</span>
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
                    <span>{"| | | | <h1>Types of Food:</h1>"}</span>
                    <br/>
                    <span>{"| | | | <Fruits/>"}</span>
                    <br/>
                    <span>{"| | | </div>"}</span>
                    <br/>
                    <span>{"| | );"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"};"}</span>
                </div>
            </code>
        </div>

    )
}

export default UseReactToRenderNestedComponents;