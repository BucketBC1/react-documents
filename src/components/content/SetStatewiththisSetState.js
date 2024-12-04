import React from "react";

function SetStateWithThisSetState() {
    return(
        <div className="main-content">
            <h1>Set State with this.setState</h1>
            <p>
                The previous challenges covered component “state” and how to initialize state in the “constructor”. There is also a way to change the component’s “state”. React provides a method for updating component “state” called “setState”. You call the “setState” method with you component class like so: “this.setState”, passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. For instance, if we were storing a “username” in state and wanted to update it, it would look like this:
            </p>
            <code>
                <div>
                    <span>{"this.setState({"}</span>
                    <br/>
                    <span>{"| username: 'Lewis'"}</span>
                    <br/>
                    <span>{"});"}</span>
                </div>
            </code>
            <p>
                React expects you to never modify “state” directly, instead always use “this.setState()” when state changes occur. Also, you should note that React may batch multiple state updates to improve performance. What this means is that state updates through the “setState” method can be asynchronous. There is an alternative syntax for the “setState” method which provides a way around this problem. This is rarely needed but it’s good to keep it in mind! Please consult our React article for further details.
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
                    <span>{"| | | name: 'Initial State'"}</span>
                    <br/>
                    <span>{"| | };"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| | this.handleClick = this.handleClick.bind(this);"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"|"}</span>
                    <br/>
                    <span>{"| handleClick() {"}</span>
                    <br/>
                    <span>{"| | this.setState({name: 'React Rocks!'})"}</span>
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
export default SetStateWithThisSetState;