import React from "react";

function AccessPropsUsingThisProps(){ 
    return(
        <div className="main-content">
            <h1>Access Props Using this.props</h1>
            <p>
                The last several challenges covered the basic ways to pass prop to child components. But what if the child component that you’re passing a prop to is an ES6 class component, rather than a stateless functional component? The ES6 class component uses a slightly different convention to access props.
                <br/>
                <br/>
                Anytime you refer to a class component within itself, you use the “this” keyword. To access props within a class component, you preface the code that you use to access it with “this”. For example, if an ES6 class component has a prop called “data”, you write {'“{this.prop.data}”'} in JSX. 
            </p>
            <code>
                <div>
                    <span>{"class App extends React.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props);"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | return("}</span>
                    <br/>
                    <span>{"| | | <div>"}</span>
                    <br/>
                    <span>{"| | | | <Welcome name='Jhon'>"}</span>
                    <br/>
                    <span>{"| | | </div>"}</span>
                    <br/>
                    <span>{"| | );"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{"- - - - - - - - - - - - - - - - - -"}</span>
                    <br/>
                    <span>{"class Welcome extends react.component {"}</span>
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
                    <span>{"| | | <div>"}</span>
                    <br/>
                    <span>{"| | | | <p>Hello, <strong>{this.props.name}</strong>!</p>"}</span>
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

export default AccessPropsUsingThisProps;