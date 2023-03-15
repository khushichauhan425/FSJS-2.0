import React, { useState } from 'react'


function ToDoInput(props) {
    const [inputText,setInputText] = useState(''); 
    const handleEnter = (e) =>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("");
        }
    }
  return (
    <div className="input-container">
        <input type="text" className="input-box" placeholder="Enter your task" 
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value);
        }}
        onKeyDown={handleEnter}
        />
        <button className="add-btn"
        onClick={()=>{
            props.addList(inputText)
            setInputText("");
        }}>+</button>
    </div>
  )
}

export default ToDoInput