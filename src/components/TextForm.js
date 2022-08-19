// import React from 'react'                              // to import react
import React, { useState } from "react"                      // import React hook useState                      

export default function TextFom(props) {
  const handlerUpClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
  };
  
  const handlerOnChange = (event) => {
    setText(event.target.value);
  };
  // Note use useState must be inside function
  // const [count , setCount] = useState(0);                          //count(State) : store useState(0) , setCount method : update count
  const [text , setText] = useState("Enter description here.");    //text(State) : store useState() result , setText method : update text
  // text = "Hello";                                  // ERROR
  // text = setText("Hello");                         // ERROR
  // setText("Hello");                                   // logical Error
  
  return (
    <div className='container my-3'>
      <h1>{props.formHeading}</h1>
      {/* Donot use form tag otherwise your page will reload */}
        <div className="form-group">
          <textarea className="form-control" value = {text} onChange={handlerOnChange} id="textarea" rows="8"></textarea>
        </div>
        <div className="form-group">
          <button className='btn btn-primary' onClick={handlerUpClick}>Enter the Capitalize text</button>
        </div>
    </div>
  )
}