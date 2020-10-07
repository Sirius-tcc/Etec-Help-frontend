import React from 'react'


import './styles.css'

function TextArea({name, ...rest }){
    return(
        <div id="text-area">
            <label for={ name }>
                { name }
            </label>
            <div className="text-area">
                <textarea
                    name={ name } 
                    {...rest}>

                </textarea>
            </div>
            

        </div>
        
    )
}

export default TextArea