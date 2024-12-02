import React from "react";

const RenderaClassComponentTotheDOM = () => {
    return(
        <div className="main-content">
            <h1>Render a Class Component to the DOM</h1>
            <p>
                You may remember using the ReactDOM API in an earlier challenge to render JSX elements to the DOM. The process for rendering React components will look very similar. The past few challenges focused on components and composition, so the rendering was done for you behind the scenes. However, none of the React code you write will render to the DOM without making a call to the ReactDOM API.
            </p>
            <p>
                Here's a refresher on the syntax: “ReactDOM.render(componentToRender, targetNode)”. The first argument is the React component that you want to render. The second argument is the DOM node that you want to render that component within.
            </p>
            <p>
                React components are passed into “ReactDOM.render()” a little differently than JSX elements. For JSX elements, you pass in the name of the element that you want to render. However, for React components, you need to use the same syntax as if you were rendering a nested component, for example {'“ReactDOM.render(< ComponentToRender />, targetNode)”'}. You use this syntax for both ES6 class components and functional components.
            </p>
            <code>
                <div>
                    <span>{"class TypesOfFood extends React.Component {"}</span>
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
                    <span>{"| | | | <h1>Types of Food</h1>"}</span>
                    <br/>
                    <span>{"| | | | <Fruits/>"}</span>
                    <br/>
                    <span>{"| | | | <Vegetables/>"}</span>
                    <br/>
                    <span>{"| | | </div>"}</span>
                    <br/>
                    <span>{"| | );"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{'ReactDOM.render(<TypesOfFood/>, document.getElementById("challenge-node"))'}</span>
                </div>
            </code>
        </div>
    )
}

export default RenderaClassComponentTotheDOM;