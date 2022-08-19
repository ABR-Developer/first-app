import React from 'react'                              // to import react
import { useState } from "react"                   // import hook {use State}                      

export default function TextFom(props) {
  // count[count , setCount] = useState(0);                    //count : store useState(0) , setCount method : update count
  var count = 0;
  var text = null;
  var setText = (s) => {return s;};
  count[text , setText] = useState("Enter description");    //text : store useState() result , setText method : update text
  return (
    <div className='container'>
      <h1>{props.formHeading}</h1>
      <form>
        <div>
            <label htmlFor="descrition">Description</label>
            <textarea htmlFor="description"></textarea>
        </div>
        <div>
          <button>Change to upper case</button>
        </div>
      </form>
    </div>
  )
}
