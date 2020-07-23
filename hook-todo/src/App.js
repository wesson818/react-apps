import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'

const LOCALSTORAGE_KEY = 'todoApp.todo'

function App() {
  // use state to set value
  const [todos, setTodos] = useState([])

  // use ref to 
  const todoNameRef = useRef()

  // use effect hook to store local storage when componentDidMount
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  },[])

  // use effect hook to set local storage when componentDidUpdate of todos changing
  useEffect(()=>{
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos))
  },[todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  
  function handleAddTodo(event){
    const name = todoNameRef.current.value
    if(name === "") return
    setTodos(prevTodo => {
      return [...prevTodo, {id:uuidv4(), name:name, complete:false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div className="todo-list">
        <div>{todos.filter(todo => !todo.complete).length} left to do</div>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
}

export default App;
