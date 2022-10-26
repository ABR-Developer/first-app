// import React from 'react'                              // to import react
import React, { useState } from "react"                      // import React hook useState                      

export default function TextFom(props) {
  const handlerUpClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted into Upper case" , "success");
  };

  const handlerDownClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted into Upper case" , "primary");
  };

  const handlerClearText = ()=> {
    setText("");
    props.showAlert("Text Cleared" , "primary");
  };

  const handlerCopyText = ()=> {
    // var selecedText = text;
    // selecedText.select();
    // navigator.clipboard.writeText(selecedText.value);
    props.showAlert("Text Copied" , "primary");
  };

  const handlerRemoveExtraSpaces = ()=> {
    var newText = text.split(/[ ]+/);             
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces" , "primary");
  };
  
  const handlerOnChange = (event) => {
    setText(event.target.value);
  };
  // Note use useState must be inside function
  // const [count , setCount] = useState(0);                          //count(State) : store useState(0) , setCount method : update count
  const [text , setText] = useState("");    //text(State) : store useState() result , setText method : update text
  // text = "Hello";                                  // ERROR
  // text = setText("Hello");                         // ERROR
  // setText("Hello");                                   // logical Error
  
  return (
    <div className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <div className={`container my-3`}>
        <h1>{props.formHeading}</h1>
        {/* Donot use form tag otherwise your page will reload */}
          <div className="form-group ">
            <textarea className={`form-control bg-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode === 'light' ? 'light' : 'dark'}`} value = {text} onChange={handlerOnChange} id="textarea" rows="8"></textarea>
            {/* <textarea className={`form-control bg-${props.mode === 'light' ? 'dark' : 'light'} text-${props.mode === 'light' ? 'light' : 'dark'}`} style={{caretColor: "red"}} value = {text} onChange={handlerOnChange} id="textarea" rows="8"></textarea> */}
          </div>
          <div className="form-group">
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? '' : 'outline-'}primary m-2`} onClick={handlerUpClick}>Change to Upper case</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? '' : 'outline-'}primary m-2`} onClick={handlerDownClick}>Change to Lower case</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? '' : 'outline-'}primary m-2`} onClick={handlerClearText}>Clear Text</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? '' : 'outline-'}primary m-2`} onClick={handlerCopyText}>Copy Text</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? '' : 'outline-'}primary m-2`} onClick={handlerRemoveExtraSpaces}>Remove Extra Spaces</button>
          </div>
      </div>
      <div className="container my-3">
        <h1>
          Text Summary
        </h1>
        <fieldset>
          <p>{text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters</p>
          <p>{text.split(" ").filter((element) => element.length !== 0).length * 0.008} Minutes to read.</p>
          <p>{text.split(" ").filter((element) => element.length !== 0).length * 0.008 * 60} Seconds to read.</p>
          <p>{text.length > 0 ? text : "Nothing to preview...!"}</p>
        </fieldset>
      </div>
    </div>
  )
}