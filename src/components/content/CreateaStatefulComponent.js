import React from "react";

function CreateAStatefulComponent() {
    return(
        <div className="main-content">
            <h1>Create a Stateful Component</h1>
            <p>
                One of the most important topics is React is “state”. State consists of any data your application needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary. React offers a nice solution for the state management of modern web applications.
                <br/>
                <br/>
                You create state in a React component by declaring a “state” property on the component class in its “constructor”. This initializes the component with “state” when it is created. The “state” property must be set to a JavaScript “object".
                <br/>
                <br/>
                Declaring it looks like this:
            </p>
            <code>
                <div>
                    <span>{"this.state = {"}</span>
                    <span>{"}"}</span>
                </div>
            </code>
            <p>
                You have access to the “state” object throughout the life of your component. You can update it, render it in your UI, and pass it as props child components. The “state” object can be as complex or as simple as you need it to be. Note that you must create a class component by extending “React.Component” in order to create “state” like this.
            </p>
            <code>
                <div>
                    <span>{"class StatefulComponent extends React.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props);"}</span>
                    <br/>
                    <span>{"| | "}</span>
                    <br/>
                    <span>{"| | this.state = {"}</span>
                    <br/>
                    <span>{"| | | firstName: 'Jhon'"}</span>
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
                    <span>{"| | | | <h1>{this.state.firstName}</h1>"}</span>
                    <br/>
                    <span>{"| | | </h1>"}</span>
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

export default CreateAStatefulComponent;