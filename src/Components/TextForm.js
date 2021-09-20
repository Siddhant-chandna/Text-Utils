import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUprClick=()=>{
        // console.log("text");
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLwrClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleCpyClick=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleSpcClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClrClick=()=>{
        let newText="";
        setText(newText)
    }
    const handleonChange=(event)=>{
        console.log("Clicked");
        setText(event.target.value)
    }
        const [text,setText]=useState("");
    return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUprClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLwrClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCpyClick}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleSpcClick}>Clear Extra Spaces</button>
        <button className="btn btn-danger mx-2" onClick={handleClrClick}>Clear</button>
    </div>
    <div className="container my-3">
           <h3>Your Text Summary Is</h3>
           <p>{text.length} Letters and {text.split(" ").length} Words</p>
           <p>{0.008*text.split(" ").length} is needed to read the above</p>
           <h3>Preview</h3>
           <p>{text}</p>
    </div>
    </>
    )
}
