import React,{useState} from 'react'

export default function Textform() {
 const handleupclick=()=>{
  let newText=text.toUpperCase();
 
  setText(newText)
 }  
  const handleToClick=()=>{
    let newText=text.toLowerCase()
    setText(newText)
  }
  const handlepreview=()=>{
    let newText=text.trim()
    setText(newText)
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const handleclear=()=>{
    let newText=" "
    setText(newText)
  }

  const [text,setText]=useState("enter text here 2 ")

return (
 <div>
    
          
    <div className="mb-3">
    <p>
    <div className="container">  
     <label form="my" classs="form-label"><h1>Example textarea</h1></label>
    </div>
    </p>
    <textarea classs="form-control" id="my" value={text} onChange={handleOnChange} rows="8"></textarea>
    <p>
    <button className="btn btn-primary" onClick={handleupclick}>Convert to upper case</button>
    <button className="btn btn-primary" onClick={handleToClick} >Convert to lower case</button>
    <button className='btn btn-primary' onClick={handleclear}  >clear</button>
    </p>
    </div>
    <div className="container">
    <p>
        you enter {text.split(" ").length} words and {text.length} characters 
    </p>
      <h1 >Your Text</h1>
     
      <p>{text}</p>
    </div>



  </div>
  )
}
