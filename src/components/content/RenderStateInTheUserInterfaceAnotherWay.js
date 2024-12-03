import React from "react";

function RenderStateInTheUserInterfaceAnotherWay() {
    return(
        <div className="main-content">
            <h1>Render State in the User Interface Another Way</h1>
            <p>
                There is another way to access “state” in a component. In the “render()” method, before the “return” statement, you can write JavaScript directly. For example, you could declare functions, access data from “state” or “props”, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the “return” statement.
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
                    <span>{"| | name: 'freeCodeCamp'"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | const name = this.state.name"}</span>
                    <br/>
                    <span>{"| | return ("}</span>
                    <br/>
                    <span>{"| | | <div>"}</span>
                    <br/>
                    <span>{"| | | | <h1>{name}</h1>"}</span>
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

export default RenderStateInTheUserInterfaceAnotherWay;