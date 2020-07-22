import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MyInfo from './components/MyInfo';
import Footer from './components/Footer';
import Form from './Form';

class App extends Component {
  constructor(){
    super()
    this.state={
      loading: false,
      character: {}
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
    return (
      <div className="App App-header">
        <Header />
        {this.state.loading?"Loading...":this.state.character.name}
        <Form />
        <MyInfo />
        <Footer />
      </div>
    );
  }
}

export default App;
