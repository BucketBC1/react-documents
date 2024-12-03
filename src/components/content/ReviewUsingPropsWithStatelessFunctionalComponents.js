import React from "react";

function ReviewUsingPropsWithStatelessFunctionalComponents() {
    return(
        <div className="main-content">
            <h1>Review Using Props with Stateless Functional Components</h1>
            <p>
                Except for the last challenge, you’ve been passing props to stateless functional components. These components act like pure functions. They accept props as input and return the same view every time they are passed the same props. Toy may be wondering what state is, and the next challenge will cover it in more detail. Before that, here’s a review of the terminology of components.
                <br/>
                <br/>
                A stateless functional component is any function you write which accepts props and returns JSX. A stateless component, on the other hand, is a class that extends “React.Component”, but does not use internal state (covered in the next challenge). Finally, a stateful component is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components.
                <br/>
                <br/>
                A common pattern is to try to minimize statefulness and to create stateless functional components where possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.
            </p>
            <code>
                <div>
                    <span>{"class CampSite extends React.Component {"}</span>
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
                    <span>{"| | | | <Camper/>"}</span>
                    <br/>
                    <span>{"| | | </div>"}</span>
                    <br/>
                    <span>{"| | );"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{"- - - - - - - - - - - - - - - - - - - - -"}</span>
                    <br/>
                    <span>{"const Camper = props => <p>{props.name}</p>"}</span>
                    <br/>
                    <span>{"- - - - - - - - - - - - - - - - - - - - -"}</span>
                    <br/>
                    <span>{"Camper.propTypes = {"}</span>
                    <br/>
                    <span>{"| name: PropTypes.string.isRequired"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{"- - - - - - - - - - - - - - - - - - - - -"}</span>
                    <br/>
                    <span>{"Camper.defaultProps = {"}</span>
                    <br/>
                    <span>{"| name: 'CamperBot'"}</span>
                    <br/>
                    <span>{"}"}</span>
                </div>
            </code>
        </div>
    )
}

export default ReviewUsingPropsWithStatelessFunctionalComponents;