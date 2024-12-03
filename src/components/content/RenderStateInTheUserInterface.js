import React from "react";

function RenderStateInTheUserInterface() {
    return(
        <div className="main-content">
            <h1>Render State in the User Interface</h1>
            <p>
                Once you define a component’s initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in “state” in its “render()” method. You can access the data with “this.state”.
                <br/>
                <br/>
                If you want to access a state value within the “return” of the render method, you must enclose the value in curly braces.
                <br/>
                <br/>
                “state” is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data – including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don’t have to worry about changing the DOM. You simply declare what the UI should look like.
                <br/>
                <br/>
                Note that if you make a component stateful, no other components are aware of its “state”. It’s “state” is completely encapsulated, or local to that component, unless you pass state data to as child component a “props”. This notion of encapsulated “state” is very important because I t allows you to write certain logic, then have that logic contained and isolated in one place in your code.
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
                    <span>{"| | | name: 'freeCodeCamp'"}</span>
                    <br/>
                    <span>{"| | }"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"|"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | return("}</span>
                    <br/>
                    <span>{"| | | <div>"}</span>
                    <br/>
                    <span>{"| | | | <h1>{this.state.name}</h1>"}</span>
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

export default RenderStateInTheUserInterface;