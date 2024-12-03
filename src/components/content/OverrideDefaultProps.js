import React from "react";

function OverrideDefaultProps() {
    return(
        <div className="main-content">
            <h1>Override Default Props</h1>
            <p>
                The ability to set default props is a useful feature in React. The way to override the default props is to explicitly set the prop values for a component.
            </p>
            <code>
                <div>
                    <span>{"const Items = (props) => {"}</span>
                    <br/>
                    <span>{"| return"}</span>
                    <br/>
                    <span>{"| <h1>Current Quantity of Items in Cart: {props.quantity}</h1>"}</span>
                    <br/>
                    <span>{"}"}</span>
                    <br/>
                    <span>{"- - - - - - - - - - - - - "}</span>
                    <br/>
                    <span>{"Items.defaultProps = {"}</span>
                    <br/>
                    <span>{"| quantity: 0"}</span>
                    <br/>
                    <span>{"}"}</span>
                    <br/>
                    <span>{"- - - - - - - - - - - - - "}</span>
                    <br/>
                    <span>{"class ShoppingCart extends React.component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props)"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | return <Items quantity={10}>"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"};"}</span>


                </div>
            </code>
        </div>
    )
}

export default OverrideDefaultProps; 