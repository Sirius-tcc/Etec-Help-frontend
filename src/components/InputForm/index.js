import React from 'react'


import './styles.css'

function InputForm({ name, ...rest }){
    return(
        <div id="inputform">
            <label htmlFor={ name } >{ name }</label>
            <input 
                name={ name } 
                { ...rest } 
            />
        </div>
        
    )
}

export default InputForm