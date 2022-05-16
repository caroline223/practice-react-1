import React, { useState } from 'react'


function ButtonIncrementer() {

    const [count, setCount] = useState(0)


    const addOne = () => {
        setCount(count + 1)
    }

    const subtractOne = () => {
        setCount(count - 1)
    }

    const multiplyTwo = () => {
        setCount(count * 2)
    }

    return(
        <div>
            <button onClick={addOne}>Add One</button> &nbsp;
            {count} &nbsp;
            <button onClick={subtractOne}>Minus One</button>&nbsp;
            <button onClick={multiplyTwo}>Times Two</button>
        </div>
    )



}

export default ButtonIncrementer;