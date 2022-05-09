import React, { useState } from 'react'


function ButtonIncrementer() {

    const [count, setCount] = useState(0)


    const addOne = () => {
        setCount(count + 1)
    }

    const subtractOne = () => {
        setCount(count - 1)
    }

    return(
        <div>
            <button onClick={addOne}>Add One</button> &nbsp;
            {count} &nbsp;
            <button onClick={subtractOne}>Minus One</button>
        </div>
    )



}

export default ButtonIncrementer;