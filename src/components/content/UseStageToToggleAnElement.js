import React from "react";

function UseStageToToggleAnElement() {
    return(
        <div className="main-content">
            <h1>Use stage to Toggle an Element</h1>
            <p>
                Sometimes you might need to know the previous state when updating the state. However, state updates may be asynchronous – this means React may batch multiple “setState()” calls into a single update. This means you can’t rely on the previous value of “this.state” or “this.props” when calculating the next value. So, you should not use code like this:
            </p>
            <code>
                <div>
                    <span>{"this.setState ({"}</span>
                    <br/>|
                    <span>{"| counter: this.state.counter + this.props.increment"}</span>
                    <br/>
                    <span>{"});"}</span>
                </div>
            </code>
            <p>
                Instead, you should pass “setState” a function that allows you to access state and props. Using a function with “setState” guarantees you are working with the most current values of state and props. This means that the above should be rewritten as:
            </p>
            <code>
                <div>
                    <span>{"this.setState ((state, props) => ({"}</span>
                    <br/>|
                    <span>{"| counter: state.counter + props.increment"}</span>
                    <br/>
                    <span>{"}));"}</span>
                </div>
            </code>
            <p>
                Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it’s a block of code.
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
                    <span>{"| | | visibility: false"}</span>
                    <br/>
                    <span>{"| | };"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| | this.toggleVisibility = this.toggleVisibility.bind(this);"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"| "}</span>
                    <br/>
                    <span>{"| toggleVisibility() {"}</span>
                    <br/>
                    <span>{"| | this.setState(state => {"}</span>
                    <br/>
                    <span>{"| | | if(state.visibility === true) {"}</span>
                    <br/>
                    <span>{"| | | | return {visibility: false}"}</span>
                    <br/>
                    <span>{"| | | } else {"}</span>
                    <br/>
                    <span>{"| | | | return {visibility: true}"}</span>
                    <br/>
                    <span>{"| | | }"}</span>
                    <br/>
                    <span>{"| | });"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"|"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | if (this.state.visibility) {"}</span>
                    <br/>
                    <span>{"| | | return ("}</span>
                    <br/>
                    <span>{"| | | | <di>"}</span>
                    <br/>
                    <span>{"| | | | | <button onClick={this.toggleVisibility}>Click Me</button>"}</span>
                    <br/>
                    <span>{"| | | | | <h1>Now you see me!</h1>"}</span>
                    <br/>
                    <span>{"| | | | </div>"}</span>
                    <br/>
                    <span>{"| | | );"}</span>
                    <br/>
                    <span>{"| | } else {"}</span>
                    <br/>
                    <span>{"| | | return ("}</span>
                    <br/>
                    <span>{"| | | | <div>"}</span>
                    <br/>
                    <span>{"| | | | | <button onClick={this.toggleVisibility}>Click Me</button>"}</span>
                    <br/>
                    <span>{"| | | | </div>"}</span>
                    <br/>
                    <span>{"| | | );"}</span>
                    <br/>
                    <span>{"| | }"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"}"}</span>
                </div>
            </code>
        </div>
    )
}

export default UseStageToToggleAnElement;