import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MyInfo from './components/MyInfo';
import Footer from './components/Footer';
// import Form from './components/Form';

class App extends Component {
  constructor(){
    super()
    this.state={
      loading: false,
      character: {},
      firstname:'',
      lastname:'',
      age:'',
      gender:'',
      location:'',
      isVegetarian:'',
      isKosher:'',
      isLactoseFree:''
    }
    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bine(this)
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

  handleChange(event) {
    const {name, value, type, checked} = event.target
    // type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    this.setState({
      [name]: (type == 'checkbox')?checked:value
    });
  }
  handleSubmit(event){
    event.preventDefault()
    console.log("submit")
  }
  render(){
    return (
      <div className="App App-header">
        <Header />
        {this.state.loading?"Loading...":this.state.character.name}
        <main>
            <form onSubmit={this.handleSubmit} >
                <input name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="First Name" /><br />
                <input name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder="Last Name" /><br />
                <input name="age" value={this.state.age} onChange={this.handleChange} placeholder="Age" /><br />
                
                <label>
                    <input type="radio" name="gender" value="male" checked={this.state.gender==="male"} onChange={this.handleChange} /> Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" checked={this.state.gender==="female"} onChange={this.handleChange} /> Female
                </label>
                <br />
                
                <select name="location" value={this.state.location} onChange={this.handleChange}>
                  <option value="">Please Select</option>
                  <option value="Melbourne">Melbourne</option>
                  <option value="Sydney">Sydney</option>
                  <option value="Perth">Perth</option>
                </select>
                <br />
                
                <label>Food Restrictions:</label><br />
                <label><input type="checkbox" name="isVegetarian" checked={this.state.isVegetarian} onChange={this.handleChange} /> Vegetarian</label><br />
                <label><input type="checkbox" name="isKosher" checked={this.state.isKosher} onChange={this.handleChange} /> Kosher</label><br />
                <label><input type="checkbox" name="isLactoseFree" checked={this.state.isLactoseFree} onChange={this.handleChange} /> Lactose Free</label><br />
                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {this.state.firstname} {this.state.lastname}</p>
            <p>Your age: {this.state.age}</p>
            <p>Your gender: {this.state.gender}</p>
            <p>Your destination: {this.state.location}</p>
            <p>
                Your dietary restrictions: 
                {this.state.isVegetarian&&"Vegetarian,"}
                {this.state.isKosher&&"Kosher,"}
                {this.state.isLactoseFree&&"Lactose Free"}
            </p>
        </main>
        {/* <MyInfo /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
