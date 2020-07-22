import React from "react"

const Joke = ({question,punchLine}) =>
<div>
    <h3 style={{display: !question && "none"}}>Question: {question}</h3>
    <h3 style={{color: question && "#888888"}}>Answer: {punchLine}</h3>
    <hr/>
</div>

export default Joke