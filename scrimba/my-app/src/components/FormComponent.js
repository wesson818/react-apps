import React from 'react'

const FormComponent = (props)=>{
    return(
        <main>
            <form onSubmit={props.handleSubmit}>
                <input name="firstname" value={props.data.firstname} onChange={props.handleChange} placeholder="First Name" /><br />
                <input name="lastname" value={props.data.lastname} onChange={props.handleChange} placeholder="Last Name" /><br />
                <input name="age" value={props.data.age} onChange={props.handleChange} placeholder="Age" /><br />
                
                <label>
                    <input type="radio" name="gender" value="male" checked={props.data.gender==="male"} onChange={props.handleChange} /> Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" checked={props.data.gender==="female"} onChange={props.handleChange} /> Female
                </label>
                <br />
                
                <select name="location" value={props.data.location} onChange={props.handleChange}>
                  <option value="">Please Select</option>
                  <option value="Melbourne">Melbourne</option>
                  <option value="Sydney">Sydney</option>
                  <option value="Perth">Perth</option>
                </select>
                <br />
                
                <label>Food Restrictions:</label><br />
                <label><input type="checkbox" name="isVegetarian" checked={props.data.isVegetarian} onChange={props.handleChange} /> Vegetarian</label><br />
                <label><input type="checkbox" name="isKosher" checked={props.data.isKosher} onChange={props.handleChange} /> Kosher</label><br />
                <label><input type="checkbox" name="isLactoseFree" checked={props.data.isLactoseFree} onChange={props.handleChange} /> Lactose Free</label><br />
                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {props.data.firstname} {props.data.lastname}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.location}</p>
            <p>
                Your dietary restrictions: 
                {props.data.isVegetarian&&"Vegetarian,"}
                {props.data.isKosher&&"Kosher,"}
                {props.data.isLactoseFree&&"Lactose Free"}
            </p>
        </main>
    )
}
export default FormComponent