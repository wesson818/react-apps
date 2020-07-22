import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import ContactCard from './components/ContactCard'
import Joke from "./components/Joke"
import jokesData from './data/jokesData';
import Product from './components/Product';
import productsData from './data/vschoolProducts';
import todoData from './data/todoData';
import Counter from './components/Counter';
import randomColor from 'randomcolor'
 
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos:todoData,
      count:0,
      color:"",
      isLoading: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.countAdd = this.countAdd.bind(this)
    this.countMin = this.countMin.bind(this)
  }
  componentDidMount() {
    setTimeout(() => {
        this.setState({
            isLoading: false
          })
      }, 1500)
  }
  countAdd(){
    this.setState(prevState => {
        return {
            count: prevState.count + 1
        }
    })
  }
  countMin(){
    this.setState(prevState => {
        return {
            count: prevState.count - 1
        }
    })
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.count!=this.state.count){
      const newColor = randomColor()
      this.setState({color: newColor})
    }
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

  //Joke
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)

  //Product map
  // const productComponents = productsData.map(product => <Product key={product.id} name={product.name} price={product.price} description={product.description} />)

  //Product filter
  const freeProductComponents = productsData.filter(product => 
    product.price === 0
  ).map(product => 
    <Product key={product.id} name={product.name} price={product.price} description={product.description} />
  )
  return (
    <div className="App App-header">
      {this.state.isLoading? 
      <h2>Loading...</h2>:<h2 style={h2Style}>Good {timeOfDay}  {firstname} {lastname}</h2>}
      <Counter color={this.state.color} count={this.state.count} countAdd={this.countAdd} countMin={this.countMin} />

      {/* <h2 style={h2Style}>Good {hours < 12?"morning":"afternoon"}  {firstname} {lastname}</h2> */}
      {/* <h2>Hi {`${firstname} ${lastname}`}</h2> */}
      <h3>Todo List</h3>
      <div className="todo-list">
        {todoComponent}
      </div>
      <div className="contacts">
            <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
            
            <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            
            <ContactCard
                contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            
            <ContactCard 
                contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />
        </div>
        <div>
           {jokeComponents}
        </div>
        <div>
          {freeProductComponents}
        </div>
    </div>
  );
}}



export default App;
