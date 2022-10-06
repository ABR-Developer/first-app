// import React from 'react'                              // to import react
import React, { useState } from "react"                      // import React hook useState                      

export default function TextFom(props) {
  const handlerUpClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handlerDownClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
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
          </div>
          <div className="form-group">
            <button className={`btn btn-${props.mode === 'light' ? '' : 'outline-'}primary m-2`} onClick={handlerUpClick}>Change to Upper case</button>
            <button className={`btn btn-${props.mode === 'light' ? '' : 'outline-'}primary m-2`} onClick={handlerDownClick}>Change to Lower case</button>
          </div>
      </div>
      <div className="container my-3">
        <h1>
          Text Summary
        </h1>
        <fieldset>
          <p>{text.split(" ").length - 1} words and {text.length} characters</p>
          <p>{(text.split(" ").length - 1)* 0.008} Minutes to read.</p>
          <p>{((text.split(" ").length -1 )* 0.008)*60} Seconds to read.</p>
          <p>{text.length > 0 ? text : "Enter Your Text in the above box to preview it."}</p>
        </fieldset>
      </div>
    </div>
  )
}