import React, { useState } from 'react'


function BackgroundChanger(){


    const [color, setColor] = useState(false)
    const [color2, setColor2] = useState(true)

    const changeColor = () => {
        setColor(!color)
    }

    const changeColor2 = () => {
        setColor2(!color2)
    }

    return(
        <div>
            <div style={{backgroundColor: color ? 'blue' : 'gray'}}>
                <button onClick={changeColor}>Change My Color</button>
            </div>
            <br />
            <div style={{backgroundColor: color2 ? 'green' : 'purple'}}>
                <button onClick={changeColor2}>Change My Color</button>
            </div>
        </div>
    )

}
export default BackgroundChanger

