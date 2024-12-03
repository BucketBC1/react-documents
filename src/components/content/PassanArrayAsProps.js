import React from "react";

function PassAnArrayAsProps() {
    return(
        <div className="main-content">
            <h1>Pass an Array as Props</h1>
            <p>
                The las challenge demonstrated how to pass information from a parent component to a child component as “props” or properties. This challenge looks at how arrays can be passed as “props”. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.
            </p>
            <code>
                <div>
                    <span>{"<ParentComponent>"}</span>
                    <br/>
                    <span>{"| <ChildComponent colors={['green', 'blue', 'red']}/>"}</span>
                    <br/>
                    <span>{"</ParentComponent>"}</span>
                </div>
            </code>
            <p>
                The child component then has access to the array property “colors”. Array methods such as “join()” can be used when accessing the property.
            </p>
            <code>
                <div>
                    <span>{"const ChildComponent = (props) =>"}</span>
                    <br/>
                    <span>{"<p>{props.colors.join(', ')}!</p>"}</span>
                </div>
            </code>
            <p>
                This will join all “colors” array items into a comma separated string and produce:
                <br/>
                {'“<p>green, blue, red</p>”'}. Later, we will learn about other common methods to render arrays of data in React.
            </p>
            <code>
                <div>
                    <span>{"const List = (props) => {"}</span>
                    <br/>
                    <span>{"| return <p>{props.tasks.join(', ')}</p>"}</span>
                    <br/>
                    <span>{"};"}</span>
                    <br/>
                    <span>{"------------------------------------------------"}</span>
                    <br/>
                    <span>{"class ToDo extends React.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props;)"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"| render() {"}</span>
                    <br/>
                    <span>{"| | return ("}</span>
                    <br/>
                    <span>{"| | | <div>"}</span>
                    <br/>
                    <span>{"| | | | <h1>To Do Lists</h1>"}</span>
                    <br/>
                    <span>{"| | | | <h2>Today</h2>"}</span>
                    <br/>
                    <span>{"| | | | <List tasks={['homework', 'clean']}/>"}</span>
                    <br/>
                    <span>{"| | | | <h2>Tomorrow</h2>"}</span>
                    <br/>
                    <span>{"| | | | <List tasks={['gym', 'gym', 'gym']}/>"}</span>
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

export default PassAnArrayAsProps;
