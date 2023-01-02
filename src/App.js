
import './App.css';
import  { useState} from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  
  function changeTodo(event){
       const title = event.target.value;
       setTodo(title); 
       console.log(todo);
  }
  function addTodo(){

      setTodos((todos)=>[...todos,todo]);
      setTodo("");
      
  }
  function removeTodo(text){
    const newTodos = todos.filter((todo)=>{return todo!==text});
    setTodos(newTodos);
  }
  function edit(text){
    const newTodos = todos.filter((todo)=>{return todo!==text});
    setTodo(text);
    setTodos(newTodos);
    setIsUpdate(true);
   
  }
  function update(text){
    setTodos((todos)=>[...todos,todo]);
    setIsUpdate(false);
    setTodo("");
  }
  return (
    <div className="App">
      <div className='bg-red-300 text-lg'>
        <p><h2>TODO APP</h2></p>
      </div>
    <div className='Container'>
      <input type={"text"} value={todo} placeholder="Add Todo" onChange={changeTodo} ></input>
      <button className='' onClick={(isUpdate===true?update: addTodo)}>{isUpdate?"Update":"Add"}</button>
    </div>
    <div className='TodoList'>
    {todos.map((todo, index)=>(
    <div className='Todo'>
      <p>{todo}</p>
      <div>
      <button className='delete' onClick={()=>removeTodo(todo)}>Delete</button>
      <button className='edit' onClick={()=> edit(todo)}>Edit</button>
      </div>
      </div>
    )
      
      // 100000328895
    )}
    </div>
    </div>
  );
}

export default App;
