import React from "react";

function WriteaReactComponentFromScratch() {
    return(
        <div className="main-content">
            <h1>Write a React Component from Scratch</h1>
            <code>
                <div>
                    <span>{"class MyComponent extends React.Component {"}</span>
                </div>
                <div>
                    <span>{"| constructor(props) {"}</span>
                </div>
                <div>
                    <span>{"| | super(props);"}</span>
                </div>
                <div>
                    <span>{"| }"}</span>
                </div>
                <div>
                    <span>{"| render() {"}</span>
                </div>
                <div>
                    <span>{"| | return ("}</span>
                </div>
                <div>
                    <span>{"| | | <div id='challenge-node'>"}</span>
                </div>
                <div>
                    <span>{"| | | | <h1>My First react Component!</h1>"}</span>
                </div>
                <div>
                    <span>{"| | | </div>"}</span>
                </div>
                <div>
                    <span>{"| | );"}</span>
                </div>
                <div>
                    <span>{"| }"}</span>
                </div>
                <div>
                    <span>{"}"}</span>
                </div>
                <div>
                    <span>{'ReactDOM.render(<TypesOfFood/>, document.getElementById("challenge-node"));'}</span>
                </div>
            </code>
        </div>
    )
}

export default WriteaReactComponentFromScratch;