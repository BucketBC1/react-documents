import React from "react";

function CreateaComponentwithComposition(){
    return(
        <div className="main-content">
            <h1>Create a Component with Composition</h1>
            <p>
                Now we will look at how we can compose multiple React Component together. Imagine you are building an app and have created three components: a “navbar”, “Dasboard”, and “Footer”.
            </p>
            <p>
                To compose these components together, you could create an “App” parent component which renders each of these three components as children. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the “render” method you could write:
            </p>
            <code>
                <div>
                    <span>{"<App>"}</span>
                </div>
                <div>
                    <span>{"<Navbar/>"}</span>
                </div>
                <div>
                    <span>{"<Dashboard/>"}</span>
                </div>
                <div>
                    <span>{"<Footer/>"}</span>
                </div>
                <div>
                    <span>{"</App>"}</span>
                </div>
            </code>
            <p>
                When React encounters a custom HTML tag that references another component {'(a component name wrapped in “< />” like in this example)'}, it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the “app” component and the “Navbar”, “Dashboard”, and “Footer”. 
            </p>
            <code>
                <div>
                    <span>{"const ChildComponent = () => {"}</span>
                </div>
                <div>
                    <span>{"| return ("}</span>
                </div>
                <div>
                    <span>{"| | <div>"}</span>
                </div>
                <div>
                    <span>{"| | | <p>I am the child</p>"}</span>
                </div>
                <div>
                    <span>{"| | </div>"}</span>
                </div>
                <div>
                    <span>{"| );"}</span>
                </div>
                <div>
                    <span>{"};"}</span>
                </div>
                <div>
                    <span>{"- - - - - - - - - - - - - - -"}</span>
                </div>
                <div>
                    <span>{"class ParentComponent extends React.Component {"}</span>
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
                    <span>{"| | | <div>"}</span>
                </div>
                <div>
                    <span>{"| | | | <ChildComponent/>"}</span>
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
                    <span>{"};"}</span>
                </div>
            </code>
        </div>

    )
}

export default CreateaComponentwithComposition;