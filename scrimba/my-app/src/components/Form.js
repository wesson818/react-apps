import React from 'react'

const Form = ({firstname,lastname,age,gender,location,restrictions,handleChange,handleSubmit})=>{
    return(
        <main>
            <form onSubmit={handleSubmit}>
                <input name="firstname" value={firstname} onChange={handleChange} placeholder="First Name" /><br />
                <input name="lastname" value={lastname} onChange={handleChange} placeholder="Last Name" /><br />
                <input name="age" value={age} onChange={handleChange} placeholder="Age" /><br />
                
                <lable>Gender</lable>
                <label>
                    <input type="radio" name="gender" value={gender} onChange={handleChange} /> Male
                </label>
                <label>
                    <input type="radio" name="gender" value={gender} onChange={handleChange} /> Female
                </label>
                <br />
                
                <select name="location" value={location} onChange={handleChange}>
                    <option value="Melbourne">Melbourne</option>
                    <option value="Sydney">Sydney</option>
                    <option value="Perth">Perth</option>
                </select>
                <br />
                
                <label>Food Restrictions</label>
                <label><input type="checkbox" name="restrictions" checked={restrictions.isVegetarian} value={restrictions.vegetarian} onChange={handleChange} /> Vegetarian</label>
                <label><input type="checkbox" name="restrictions" checked={restrictions.isKosher} value={restrictions.kosher} onChange={handleChange} /> Kosher</label>
                <label><input type="checkbox" name="restrictions" checked={restrictions.isLactoseFree} value={restrictions.lactosefree} onChange={handleChange} /> Lactose Free</label>
                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {}</p>
            <p>Your age: {/* Age here */}</p>
            <p>Your gender: {/* Gender here */}</p>
            <p>Your destination: {/* Destination here */}</p>
            <p>
                Your dietary restrictions: 
                {/* Dietary restrictions here, comma separated */}
            </p>
        </main>
    )
}
export default Form