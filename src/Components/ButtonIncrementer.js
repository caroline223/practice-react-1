import React, { useState } from 'react'


function ButtonIncrementer() {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    
    


    const addOne = () => {
        setCount(count + 1)
    }

    const subtractOne = () => {
        setCount(count - 1)
    }

    const multiplyTwo = () => {
        setCount(count * 2)
    }

    const resetButton = () => {
        setCount(0)
    }

    

    return(
        <div>
           <h2>Current Date: {Date().toLocaleString()}</h2>
            <button onClick={addOne}>Add One</button> &nbsp;
            {count} &nbsp;
            <button onClick={subtractOne}>Minus One</button>&nbsp;
            <button onClick={multiplyTwo}>Times Two</button>&nbsp;
            <button onClick={resetButton}>Clear</button>
            <br /><br />
            <div>
                <label>Enter A Number to See It Raised to The Power of Two <br/>
                    <input 
                        type="number"
                        value={count2}
                        onChange={(e) => setCount2(e.target.value)}
                    />
                </label> <br /><br />
                {count2 ** 2}
            </div>
        </div>
    )



}

export default ButtonIncrementer;