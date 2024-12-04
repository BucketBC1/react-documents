import React from "react";

function CreateAControlledInput() {
    return(
        <div className="main-content">
            <h1>Create a Controlled Input</h1>
            <p>
                Your application may have more complex interactions between “state” and the rendered UI. For example, form control elements for text input, such as “input” and “textarea”, maintain their own state in the DOM as the user types. With React, you can move this mutable state into React component’s “state”, so React controls the value of that input field typically, if you have React components with input fields the user can type into, it will be a controlled input form.
                <hr/>
                The code editor has the skeleton of a component called “ControlledInput” to create a controlled “input” element. The component’s “state” is already initialized with an “input” property that holds an empty string. This value represents the text a user types into the “input” field.
                <br/>
                <br/>
                First, create a method called “handleChanged()” that has a parameter called “event”. When the method is called, it receives an “event” object that contains a string of text from the “input” element. You can access this string with “event.target.value” inside the method. Update the “input” property of the component’s “state” with this new string.
                <br/>
                <br/>
                In the “render” method, create the “input” element above the “h4” tag. Add a “value” attribute which is equal to the “input” property of the component’s “state”. Then add an “onChange” property set to the “handleChange()” event handler method.
                <br/>
                <br/>
                When you type in the input box, that text is processed by the “handleChange()” method, set as the “input” property in the local “state”, and rendered as the value in the “input” box on the page. The component “state” is the single source of truth regarding the input data. 
                <br/>
                <br/>
                Last but not least, don’t forget to add the necessary bindings in the constructor.
            </p>
            <code>
                <div>
                    <span>{"class ControlledInput extends React.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props);"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| | this.state = {"}</span>
                    <br/>
                    <span>{"| | | input: ''"}</span>
                    <br/>
                    <span>{"| | };"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| | this.handleChange = this.handleChange.bind(this);"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"|"}</span>
                    <br/>
                    <span>{"| handleChange(event) {"}</span>
                    <br/>
                    <span>{"| | this.setState({"}</span>
                    <br/>
                    <span>{"| | | input: event.target.value"}</span>
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
                    <span>{"| | | | <input value = {this.state.value} onChange = {this.handleChange}/>"}</span>
                    <br/>
                    <span>{"| | | | <h4>Controlled Input:</h4>"}</span>
                    <br/>
                    <span>{"| | | | <p>{this.state.input}</p>"}</span>
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

export default CreateAControlledInput;