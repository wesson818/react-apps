
import React, { Component } from 'react';
import FormComponent from './components/FormComponent';

class Form extends Component {
    constructor(){
        super()
        this.state={
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
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const {name, value, type, checked} = event.target
        // type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
        this.setState({
          [name]: (type == 'checkbox')?checked:value
        });
      }
      handleSubmit(event){
        console.log("submit")
        event.preventDefault()
      }
      
    render(){
        return (
            <FormComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit} data={this.state} />
        )
    }
}

export default Form