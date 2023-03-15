import React, { useState } from 'react'
import ToDoInput from './components/todoInput'
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText) =>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key) =>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo]);
  }
  return (
    <div className="main-container">
      <div className="head-container">
        <ToDoInput addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return(
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}

      </div>
    </div>
  )
}

export default App