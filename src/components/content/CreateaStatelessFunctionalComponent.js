import React from "react";

function CreateaStatelessFunctionalComponent(){
    return(
        <div className="main-content">
            <h1>Create a Stateless Functional Component</h1>
            <p>
                Components are the core of React. Everything in React is a component and here you will learn how to create one.
            </p>
            <p>
                There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a stateless functional component. The concept of state in an application will be covered in later challenges. For now, think of stateless component as one that can receive data and render it, but does not manage or track changes to that data. (We’ll cover the second way to create a React component in the next challenge.)
            </p>
            <p>
                To create a component with a function, you simply write a JavaScript function that returns either JSX or “null”. One important thing to note is that React requires your function name to begin with a capital letter. Here’s an example of stateless functional component that assigns an HTML class in JSX:
            </p>
            <code>
                <div>
                    <span>{"const DemoComponent = function() {"}</span>
                </div>
                <div>
                    <span>{"return ("}</span>
                </div>
                <div>
                    <span>{"<div className='customClass'/>"}</span>
                </div>
                <div>
                    <span>{");"}</span>
                </div>
                <div>
                    <span>{"};"}</span>
                </div>
            </code>
            <p>
                After being trasnpiled, the {'"<div>"'} have a CSS class of “custonClass”.
            </p>
            <p>
                Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex use interfaces.
            </p>
        </div>
    )
}

export default CreateaStatelessFunctionalComponent;