import React from "react";

function WriteaSimpleCounter() {
    return(
        <div className="main-content">
            <h1>Write a Simple Counter</h1>
            <p>
                You can design a more complex stateful component by combining the concepts covered so far. These include initializing “state”, writing methods that set “state”, and assign click handlers to trigger these methods.
                <hr/>
                The “Counter” component keeps track of a “count” value in “state”. There are two buttons which call methods “increment()” and “decrement()”. Write these methods so the counter value is increment or decrement by 1 when the appropriate button is clicked. Also, create a “reset()” method so when the reset button in clicked, the count is set to 0.
                <br/>
                <br/>
                <strong>Note:</strong> Make sure you don’t modify the “className”s of the buttons. Also, remember to add the necessary binding for the newly-created methods in the constructor.
            </p>
            <code>
                <div>
                    <span>{"class Counter extends React.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props);"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| | this.state = {"}</span>
                    <br/>
                    <span>{"| | | count: 0"}</span>
                    <br/>
                    <span>{"| | };"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| | this.increment = this.increment.bind(this);"}</span>
                    <br/>
                    <span>{"| | this.decrement = this.decrement.bind(this);"}</span>
                    <br/>
                    <span>{"| | this.reset = this.reset.bind(this);"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"|"}</span>
                    <br/>
                    <span>{"| increment() {"}</span>
                    <br/>
                    <span>{"| | this.setState(state => ({"}</span>
                    <br/>
                    <span>{"| | | count: state.count + 1"}</span>
                    <br/>
                    <span>{"| | }));" }</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"|"}</span>
                    <br/>
                    <span>{"| decrement() {"}</span>
                    <br/>
                    <span>{"| | this.setState(state => ({"}</span>
                    <br/>
                    <span>{"| | | count: state.count - 1"}</span>
                    <br/>
                    <span>{"| | }));"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"|"}</span>
                    <br/>
                    <span>{"| reset() {"}</span>
                    <br/>
                    <span>{"| | this.setState({"}</span>
                    <br/>
                    <span>{"| | | count: 0"}</span>
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
                    <span>{"| | | | <button onClick={this.increment}>Increment!</button>"}</span>
                    <br/>
                    <span>{"| | | | <button onClick={this.decrement}>Decrement!</button>"}</span>
                    <br/>
                    <span>{"| | | | <button onClick={this.reset}>Reset</button>"}</span>
                    <br/>
                    <span>{"| | | | <h1>Current count{this.state.count}</h1>"}</span>
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
export default WriteaSimpleCounter;