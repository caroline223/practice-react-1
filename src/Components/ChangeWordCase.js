import React, { useState } from 'react'

function ChangeWordCase(){


    const [text, setText] = useState('')
    const [text2, setText2] = useState('')

    return(
        <div>
            <div>
                <label>Enter Text Below to Change to Upper Case
                    <br />
                <input 
                    type="text"
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
                </label><br /><br />
                {text.toUpperCase()}
            </div>
            <div>
            <label>Enter Text Below to Change to Lower Case
                    <br />
                <input 
                    type="text"
                    value={text2} 
                    onChange={(e) => setText2(e.target.value)}
                />
                </label><br /><br />
                {text2.toLowerCase()}
            </div>
            
        </div>
    )


}
export default ChangeWordCase