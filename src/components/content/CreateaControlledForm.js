import React from "react";
function CreateaControlledForm() {
    return(
        <div className="main-content">
            <h1>Create a Controlled Form</h1>
            <p>
                The last challenge showed that React can control the internal state for certain elements like “input” and “textarea”, which makes them controlled components. This applies to other form elements as well, including the regular HTML “form” element.
                <hr/>
                The “MyForm” component is set up with an empty “form” with a submit handler. The submit handler will be called when the form is submitted.
                <br/>
                <br/>
                We’ve added a button which submits the form. You can see it has the “type” set to “submit” indicating it is the button controlling the form. Add the “input” element in the “form” and set its “value” and “onChange()” attributes like the last challenge. You should then complete the “handleSubmit” method so that is sets the component state property “submit” to the current input value in the local “state”.
                <br/>
                <br/>
                <strong>Note:</strong> You also must call “event.preventDefault()” in the submit handler, to prevent the default form submit behavior which will refresh the we page. For camper convenience, the default behavior has been disabled here to prevent refresh from resetting challenge code.
                <br/>
                <br/>
                Finally, create an “h1” tag after the “form” which renders the “submit” value from the component’s “state”. You can then type in the form and click the button (or press enter), and you should see your input rendered to the page.
            </p>
            <code>
                <div>
                    <span>{"class MyForm extends Reac.Component {"}</span>
                    <br/>
                    <span>{"| constructor(props) {"}</span>
                    <br/>
                    <span>{"| | super(props);"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| | this.state = {"}</span>
                    <br/>
                    <span>{"| | | input: '',"}</span>
                    <br/>
                    <span>{"| | | submit: ''"}</span>
                    <br/>
                    <span>{"| | };"}</span>
                    <br/>
                    <span>{"| |"}</span>
                    <br/>
                    <span>{"| | this.handleChange = this.handleChange.bind(this);"}</span>
                    <br/>
                    <span>{"| | this.handleSubmit = this.handleSubmit.bind(this);"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"|"}</span>
                    <br/>
                    <span>{"| handleChange(event) {"}</span>
                    <br/>
                    <span>{"| | this.setState({"}</span>
                    <br/>
                    <span>{"| | | input: event.target.value"}</span>
                    <br/>
                    <span>{"| | });"}</span>
                    <br/>
                    <span>{"| }"}</span>
                    <br/>
                    <span>{"|"}</span>
                    <br/>
                    <span>{"| handleSubmit(event) {"}</span>
                    <br/>
                    <span>{"| | event.prevent.Default()"}</span>
                    <br/>
                    <span>{"| | this.setState({"}</span>
                    <br/>
                    <span>{"| | | submit: this.state.input"}</span>
                    <br/>
                    <span>{"| | });"}</span>
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
                    <span>{"| | | | <form onSubmit={this.handleSubmit}>"}</span>
                    <br/>
                    <span>{"| | | | | <input value = {this.state.input} onChange = {this.handleChange}></input>"}</span>
                    <br/>
                    <span>{"| | | | | <button type = 'submit'>Submit!</button>"}</span>
                    <br/>
                    <span>{"| | | | </form>"}</span>
                    <br/>
                    <span>{"| | | | <h1>{this.state.submit}</h1>"}</span>
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

export default CreateaControlledForm;