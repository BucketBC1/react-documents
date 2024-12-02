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
                    <br/>
                    <span>{"| <Navbar/>"}</span>
                    <br/>
                    <span>{"| <Dashboard/>"}</span>
                    <br/>
                    <span>{"| <Footer/>"}</span>
                    <br/>
                    <span>{"</App>"}</span>
                </div>
            </code>
            <p>
                When React encounters a custom HTML tag that references another component {'(a component name wrapped in “< />” like in this example)'}, it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the “app” component and the “Navbar”, “Dashboard”, and “Footer”. 
            </p>
            <code>
                <div>
                    <span>{"const ChildComponent = () => {"}</span>
                    <br/>
                    <span>{"| return ("}</span>
                    <br/>
                    <span>{"| | <div>"}</span>
                    <br/>
                    <span>{"| | | <p>I am the child</p>"}</span>
                    <br/>
                    <span>{"| | </div>"}</span>
                    <br/>
                    <span>{"| );"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{"- - - - - - - - - - - - - - -"}</span>
                    <br/>
                    <span>{"class ParentComponent extends React.Component {"}</span>
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
                    <span>{"| | | | <ChildComponent/>"}</span>
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

export default CreateaComponentwithComposition;