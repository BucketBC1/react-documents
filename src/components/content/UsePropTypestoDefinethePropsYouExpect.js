import React from "react";

function UsePropTypesToDefineThePropsYouExpect() {
    return(
        <div className="main-content">
            <h1>Use PropTypes to Define the Props You Expect</h1>
            <p>
                React provides useful type-checking features to verify that components receive prop of correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set “propTypes” on your component to require the data to be of type “array”. This will throw a useful warning when the data is of any other type.
                <br/>
                <br/>
                It's considered a best practice to set “propTypes” when you know the type of a prop ahead of time. You can define a “propTypes” property for a component in the same way you defined “deafultProps” Doing this will check that props of a given key are present with a given type. Here’s an example to require the type “function” for a prop called “handleClick”:
            </p>
            <code>
                <div>
                    <span>{"MyComponent.propTypes = {handleClick: propTypes.func.isRequired}"}</span>
                </div>
            </code>
            <p>
                In the example above,. The “ProtoTypes.func” part checks that “handleClick” is a function. Adding “isRequired” tells React that “handleClick” is a required property for that component. You will see a warning if that prop isn’t provided. Also notice that “func” represents “function”. Among the seven JavaScript primitive types, “function” and “Boolean” (written as “bool”) are the only two that use unusual spelling. In addition to the primitive types. There are other types available. For example, you can check that a prop is a React element. Please refer to the documentation for all of the option.
                <br/>
                <br/>
                <strong>Note:</strong> As of React v15.5.0, “PropTypes” is imported independently from React, like this “import PropTypes from, ‘prop-types’;”
            </p>
            <code>
                <div>
                    <span>{"const Items = (props) => {"}</span>
                    <br/>
                    <span>{"| return <h1>Current Quantity of Items in Cart:{props.quantity}</h1>"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{"- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"}</span>
                    <br/>
                    <span>{"Items.propTypes = {quantity: PropTypes.number.isRequired}"}</span>
                    <br/>
                    <span>{"Items.defaultProps = {"}</span>
                    <br/>
                    <span>{"| quantity: 0"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{"- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"}</span>
                    <br/>
                    <span>{"class ShoppingCart extends React.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props);"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | return <Items/>"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"};"}</span>
                </div>
            </code>
        </div>
    )
}

export default UsePropTypesToDefineThePropsYouExpect;