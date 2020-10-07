import React from 'react'


import './styles.css'

function InputForm({ name, ...rest }){
    return(
        <div id="inputform">
            <label for={ name } >{ name }</label>
            <input 
                name={ name } 
                { ...rest } 
            />
        </div>
        
    )
}

export default InputForm