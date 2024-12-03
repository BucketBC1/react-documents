import React from "react";

function UseDefaultProps() {
    return(
        <div className="main-content">
            <h1>Use Default Props</h1>
            <p>
                React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, If you declare {'“MyComponent.defaultProps = { location:  ‘San Francisco’ }”'}, you have defined a location prop that’s set to the string “San Francisco”, unless you specify otherwise. React assign default props if props are undefined, but if you pass “null” as the value for a prop, it will remain “null”.
            </p>
            <code>
                <div>
                    <span>{"const ShoppingCart = (props) => {"}</span>
                    <br/>
                    <span>{"| return("}</span>
                    <br/>
                    <span>{"| | <div>"}</span>
                    <br/>
                    <span>{"| | | <h1>Shopping Cart Component</h1>"}</span>
                    <br/>
                    <span>{"| | </div>"}</span>
                    <br/>
                    <span>{"| )"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{"ShoppingCart.defaultProps = {items: 0}"}</span>

                </div>
            </code>
        </div>
    )
}

export default UseDefaultProps;