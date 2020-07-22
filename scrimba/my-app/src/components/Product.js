import React from "react"

const Product = ({name, description, price}) =>
    <div>
        <h3>{name} ${price}</h3>
        <p>{description}</p>
    </div>

export default Product