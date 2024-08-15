import React, { useState } from 'react'

export default function TextArea(props) {

    const [text, setText] = useState("")

    function handleUpperCase() {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE!", "success")
    }

    function handleLowerCase() {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LOWERCASE!", "success")

    }

    function handleclearText() {
        let newText = "";
        setText(newText)
        props.showAlert("Text is Cleared!", "danger")

    }

    function handleCopy() {
        let text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        text.setSelectionRange(0, text.length - 1);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!", "warning")

    }


    function handlePaste() {
        navigator.clipboard.readText()
            .then(text => {
                console.log('Pasted content: ' + text);
                setText(text)
            })
            .catch(err => {
                console.error('Failed to read clipboard contents: ', err);
            });
        props.showAlert("Text is Pasted!", "success")

    }

    function handleExtraSpaces() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "warning")

    }

    function handleOnChange(event) {
        setText(event.target.value)
    }

    return (
        <>
            <div className="mb-3 " style={{ color: props.mode === "dark" ? "white" : "black" }} >

                <label htmlFor="exampleFormControlTextarea1" className="form-label my-2 myStyles" ><h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h1></label>
                <textarea className="form-control" style={{ backgroundColor: props.mode === "dark" ? "rgb(22 22 69)" : "white", color: props.mode === "dark" ? "aqua" : "black" }} placeholder="Write Here!" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>

                <button disabled={text.length === 0} onClick={handleUpperCase} type="button" className="btn btn-primary mx-3 my-3">Convert Upper Case</button>
                <button disabled={text.length === 0} onClick={handleLowerCase} type="button" className="btn btn-secondary mx-3 my-3 ">Convert Lower Case</button>
                <button disabled={text.length === 0} onClick={handleclearText} type="button" className="btn btn-danger mx-3 my-3">Erase Text</button>
                <button disabled={text.length === 0} onClick={handleCopy} type="button" className="btn btn-warning mx-3 my-3">Copy Text</button>
                <button  onClick={handlePaste} type="button" className="btn btn-info mx-3 my-3"> Paste Text</button>
                <button disabled={text.length === 0} onClick={handleExtraSpaces} type="button" className="btn btn-primary mx-3 my-3">Remove Extra Spaces</button>
                <button  onClick={props.EnableDarkMode} type="button" className="btn btn-secondary mx-3 my-3">Switch {props.mode} Theme</button>

            </div >

            <div className="container " style={{ color: props.mode === "dark" ? "white" : "black" }}>

                <h2>YOUR TEXT SUMMARY</h2>
                <p>{text.split(/\s+/).filter((word) => word !== "").length} words and and {text.length - text.split(" ").length + 1} Characters</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )

};

