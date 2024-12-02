import React from "react";

function WriteaReactComponentFromScratch() {
    return(
        <div className="main-content">
            <h1>Write a React Component from Scratch</h1>
            <code>
                <div>
                    <span>{"class MyComponent extends React.Component {"}</span>
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
                    <span>{"| | | <div id='challenge-node'>"}</span>
                    <br/>
                    <span>{"| | | | <h1>My First react Component!</h1>"}</span>
                    <br/>
                    <span>{"| | | </div>"}</span>
                    <br/>
                    <span>{"| | );"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"}"}</span>
                    <br/>
                    <span>{'ReactDOM.render(<TypesOfFood/>, document.getElementById("challenge-node"));'}</span>
                </div>
            </code>
        </div>
    )
}

export default WriteaReactComponentFromScratch;