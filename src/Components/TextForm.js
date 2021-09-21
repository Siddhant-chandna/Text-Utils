import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUprClick=()=>{
        // console.log("text");
        let newText=text.toUpperCase();
        setText(newText)
        props.ShowAlert("Converted to UpperCase","success");
    }
    const handleLwrClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.ShowAlert("Converted to LowerCase","success");
    }
    const handleCpyClick=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.ShowAlert("Text Copied","info");
    }
    const handleSpcClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.ShowAlert("Extra Space Removed","success");
    }
    const handleClrClick=()=>{
        let newText="";
        setText(newText)
        props.ShowAlert("TextArea Cleared","warning");
    }
    const handleonChange=(event)=>{
        console.log("Clicked");
        setText(event.target.value)
    }
        const [text,setText]=useState("");
    return (
    <>
    <div className="container" style={{color: props.mode==='light'?'#011b41':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'#454344':'white',color: props.mode==='light'?'#011b41':'white'}} id="myBox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUprClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLwrClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCpyClick}>Copy</button>
        <button className="btn btn-primary mx-2" onClick={handleSpcClick}>Clear Extra Spaces</button>
        <button className="btn btn-danger mx-2" onClick={handleClrClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#011b41':'white'}}>
           <h3>Your Text Summary Is</h3>
           <p>{text.length} Letters and {text.split(" ").length} Words</p>
           <p>{0.008*text.split(" ").length} minutes is needed to read the above Text</p>
           <h3>Preview</h3>
           <p>{text}</p>
    </div>
    </>
    )
}
