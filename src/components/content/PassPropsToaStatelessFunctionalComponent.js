import React from "react";

function PassPropsToaStatelessFunctionalComponent() {
    return(
        <div className="main-content">
            <h1>Pass Props to a Stateless Functional Component</h1>
            <p>
                The previous challenges covered a lot about creating and composing JSX elements, functional components, and ES6 style call components in React. With this foundation, it’s time to look at another feature very common in React: props. In React, you can pass props, properties, to child components. Say you have an “app” component which renders a child component called “Welcome” which is a stateless functional component. You can pass “Welcome” a “user” property by writing:
            </p>
            <code>
                <div>
                    <span>{"<App>"}</span>
                    <br/>
                    <span>{"| <Welcome user='Mark'>"}</span>
                    <br/>
                    <span>{"<App>"}</span>
                </div>
            </code>
            <p>
                You use custom HTML attributes created by you and supported by React to be passed to the component. In this case, the created property “user” is passed to the component “Welcome”. Since “Welcome” is a stateless functional component, it has access to this value like so:
            </p>
            <code>
                <div>
                    <span>{"const Welcome = (props) =>"}</span>
                    <br/>
                    <span>{"<h1>Hello, {props.user}!</h1>"}</span>
                </div>
            </code>
            <p>
                It is standard to call this value “props” and when dealing with stateless functional components, you basically consider it as an argument to a function which return JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.
            </p>
            <code>
                <div>
                    <span>{"const CurrentDate = (props) => {"}</span>
                    <br/>
                    <span>{"| return ("}</span>
                    <br/>
                    <span>{"| | <div>"}</span>
                    <br/>
                    <span>{"| | | <p>The current date is: {props.date}</p>"}</span>
                    <br/>
                    <span>{"| | </div>"}</span>
                    <br/>
                    <span>{"| );"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{"------------------------------------------------"}</span>
                    <br/>
                    <span>{"class Calendar extends React.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props;)"}</span>
                    <br/>
                    <span>{"| };"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | return ("}</span>
                    <br/>
                    <span>{"| | | <div>"}</span>
                    <br/>
                    <span>{"| | | | <h3>What date is it?</h3>"}</span>
                    <br/>
                    <span>{"| | | | <CurrentDate date={Date()}/>"}</span>
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

export default PassPropsToaStatelessFunctionalComponent;