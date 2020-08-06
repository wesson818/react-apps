import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MyInfo from './components/MyInfo';
import InputRef from './components/inputRef';
import Footer from './components/Footer';
import ContactCard from './components/ContactCard';
import Counter from './components/Counter';
import Joke from './components/Joke';
import Product from './components/Product';
import jokesData from './data/jokesData';
import productsData from './data/vschoolProducts';
import Form from './Form';
import randomColor from 'randomcolor'
import Calculator from './components/LiftingState'

class App extends Component {
  constructor(){
    super()
    this.state={
      loading: false,
      character: {},
      count:0,
      color:""
    }
    this.countAdd = this.countAdd.bind(this)
    this.countMin = this.countMin.bind(this)
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

  componentDidMount(){
    this.setState({loading:true})
    fetch("https://swapi.dev/api/people/1")
    .then(response => response.json())
    .then(data => {
      this.setState({
        character: data,
        loading:false
      })
    })
  }

  
  render(){
    
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
        <Header />
        {this.state.loading?"Loading...":this.state.character.name}
        <InputRef />
        <Counter color={this.state.color} count={this.state.count} countAdd={this.countAdd} countMin={this.countMin} /><br />
        Lifting State:
        <Calculator />
        <Form />
        <MyInfo />
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
        <Footer />
      </div>
    );
  }
}

export default App;
