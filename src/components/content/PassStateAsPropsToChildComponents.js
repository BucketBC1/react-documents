import React from "react";

function PassStateAsPropsToChildComponents() {
    return(
        <div className="main-content">
            <h1>Pass State as Props to Child Components</h1>
            <p>
                You saw a lot of examples that passed props to child JSX elements and child React components in previous challenges. You may be wondering where those props come from. A common pattern is to have a stateful component containing the “state” important to your app, that then renders child components. You want these components to have access to some pieces of that “state”, which are passed in as props.
                <br/>
                <br/>
                For example, maybe you have an “app” component that renders a “Navbar”, among other components. In your “App”, you have “state” that contains a lot of user information, but the “Navbar” only needs access to the user’s username so it can display it. You pass that piece of “state” to the “Navbar” component as a prop. 
                <br/>
                <br/>
                This pattern illustrates some important paradigms in React. The first is unidirectional data flow. State flows in one direction down the three of your application’s components, from the stateful parent component to child components. The child components only receive the state data they need. The second is that complex stateful apps can be broken down into a just few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state. It begins to create a separation where state management is handled in one part of code and UI rendering in another. This principle of separating state logic from UI logic is one of React’s key principles. When it’s used correctly, it makes the design of complex, stateful applications much easier to manage.
                <hr/>
                The MyApp component is stateful and renders a “Navbar” component as a child. Pass the “name” property in its “state” down to child component, then show the “name” in the “h1” tag that’s part of the “Navbar” render method. “name” should appear after the text “Hello, my name is:”.
            </p>
            <code>
                <div>
                    <span>{"class MyApp extends React.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props);"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| | this.state = {"}</span>
                    <br/>
                    <span>{"| | | name: 'CamperBot'"}</span>
                    <br/>
                    <span>{"| | }"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"|"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | return("}</span>
                    <br/>
                    <span>{"| | | <div>"}</span>
                    <br/>
                    <span>{"| | | | <Navbar name={this.state.name}/>"}</span>
                    <br/>
                    <span>{"| | | </div>"}</span>
                    <br/>
                    <span>{"| | );"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <hr/>
                    <span>{"class Navbar extends React.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props);"}</span>
                    <br/>
                    <span>{"| } "}</span>
                    <br/>
                    <span>{"|"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | return("}</span>
                    <br/>
                    <span>{"| | | <div>"}</span>
                    <br/>
                    <span>{"| | | | <h1>Hello, my name is: {this.props.name}</h1>"}</span>
                    <br/>
                    <span>{"| | | </div>"}</span>
                    <br/>
                    <span>{"| | );"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"}"}</span>
                </div>
            </code>
        </div>
    )
}

export default PassStateAsPropsToChildComponents;