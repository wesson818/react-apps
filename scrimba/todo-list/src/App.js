import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import todoData from './data/todoData';
 
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos:todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id){
    console.log("id",id)
    // console.log("this.state.todos",this.state.todos)
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo=>{
        if(todo.id===id){
          // todo.completed: !todo.completed
          // DO NOT change this way, which change global state value, will not work in strict mode
          // create and return new object and assign to the prevState
          return {
              ...todo,
              completed: !todo.completed
          }
        }
        return todo
      })
      // console.log("prevState.todos",prevState.todos)
      // console.log("updatedTodos",updatedTodos)
      return{
        todos:updatedTodos
      }
    })
  }

  render(){
  //greeting
  const firstname = "John"
  const lastname = "Smith"
  const data = new Date()
  const hours = data.getHours()
  let timeOfDay = ""
  const h2Style = {
    // backgroundColor:"#ccddcd",
    fontSize:"50px"
  }
  if(hours < 12){
    timeOfDay = "morning"
    h2Style.color = "#04756F"
  }else if(hours >= 12 && hours < 17){
    timeOfDay = "afternoon"
    h2Style.color = "#8914A3"
  }else{
    timeOfDay = "night"
    h2Style.color = "#D90000"
  }

  //List todo
  const todoComponent = this.state.todos.map(todo => <TodoItem key={todo.id} id={todo.id} isChecked={todo.completed} todoText={todo.text} handleChange={this.handleChange} />)

  return (
    <div className="App App-header">
      <h2 style={h2Style}>Good {timeOfDay}  {firstname} {lastname}</h2>
      <h3>Todo List</h3>
      <div className="todo-list">
        {todoComponent}
      </div>
    </div>
  );
}}

export default App;
