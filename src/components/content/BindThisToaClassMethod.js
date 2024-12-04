import React from "react";

function BindThisToClassMethod() {
    return(
        <div className="main-content">
            <h1>Bind ‘this’ to a Class Method</h1>
            <p>
                In addition to setting and updating “state”, you can also define methods for your components class. A class method typically needs to use the “this” keyword so it can access properties on the class (such as “state” and “props”) inside the scope of the method. There are a few ways to allow your class methods to access “this”.
                <br/>
                <br/>
                One common way is to explicitly bind “this” in the constructor so “this” becomes bound to the class methods when the component is initialized. You may have notice the last challenge used “this.handleClick = this.handleClick.bind(this)” for its “handleClick” method in the constructor. Then, when you call a function like “this.setState()” within your class method, “this” refres to the class and will not be “undefined”.
                <br/>
                <br/>
                <strong>Note:</strong> The “this” keyword is one of the most confusing aspects of JavaScript but it plays an important role in React. Although its behavior here is totally normal, these lessons aren’t the place for an in-depth review of “this” so please refer to other lessons if the above is confusing!
            </p>
            <code>
                <div>
                    <span>{"class MyComponent extends React.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props);"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| | this.state = {"}</span>
                    <br/>
                    <span>{"| | | text: 'Hello'"}</span>
                    <br/>
                    <span>{"| | };"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| | this.handleClick = this.handleClick.bind(this);"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"| "}</span>
                    <br/>
                    <span>{"| handleClick() {"}</span>
                    <br/>
                    <span>{"| | this.setState ({"}</span>
                    <br/>
                    <span>{"| | | text: 'You clicked!'"}</span>
                    <br/>
                    <span>{"| | });"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"|"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | return ("}</span>
                    <br/>
                    <span>{"| | | <div>"}</span>
                    <br/>
                    <span>{"| | | | <button onClick={this.handleClick}>Click Me</button>"}</span>
                    <br/>
                    <span>{"| | | | <h1>{this.state.text}</h1>"}</span>
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

export default BindThisToClassMethod;