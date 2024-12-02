import React from "react";

function CreateaReactComponent() {
    return(
        <div className="main-content">
            <h1>Create a React Component</h1>
            <p>
                The other way to define a React component is with the ES6 “class” syntax. In the following example, “Kitten” extends “React.Component”: 
            </p>
            <code>
                <div>
                    <span>{"class Kitten extends React.Component {"}</span>
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
                    <span>{"| | | <h1>Hi</h1>"}</span>
                    <br/>
                    <span>{"| | );"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"}"}</span>
                </div>
            </code>
            <p>
                This creates an ES6 class “Kitten” which extends the “React.Component” class. So the “Kitten” class now has access to many useful React features, such as local state and lifecycle hooks. Don’t worry if you aren’t familiar with these terms yet, they will be covered in greater detail in later challenges. Also notice the “Kitten” class has a “constructor” defined within in that calls “super()”. It uses “super()” to call the constructor of the parent class, in this case “React.component”. The constructor is a special method used during the initialization of objects that are created with “class” keyword. It is best practice to call component’s “constructor” with “super”, and pass “props” to both. This makes sure the component is initialized properly. For now, know that it is standard for this code to be included. Soon you will see other uses for the constructor as well as “props”.
            </p>
        </div>
    )
}

export default CreateaReactComponent;