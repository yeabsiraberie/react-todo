import React, {useState} from 'react'

export default function App() {

  const[list,setList]=useState([]);
  const[input,setinput]=useState("");
  const addTodo=(todo)=>{
    const newTodo={
      id:Math.random(),
      todo:todo
    }
    //add the todo to the list
    setList([...list,newTodo])
    // clear input box
    setinput("");
  }
  const deleteTodo=(id)=>{
    //filter out todo with the id
    const newList=list.filter((todo)=>todo.id!==id);
    setList(newList);
  } 
  const editTodo=e=>{
    setList(e.target.value);
  }
  
  

  return (
    <div>
      <h1>Todo List</h1>
      <input
      type="text"
      value={input}
      onChange={(e)=>setinput(e.target.value)}
      />
      <button onClick={()=>addTodo(input)}>ADD</button>
      <ul>
        {list.map((todo)=>(
          <li key={todo.id}>
            {todo.todo}
            <button onClick={()=>deleteTodo(todo.id)}>&times;</button>
          
          </li>
       ) )}
      </ul>
      </div>
  );
  
}