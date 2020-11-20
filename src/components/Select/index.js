import React from 'react'


import './styles.css'

function Select({ name, options, ...rest }){
    return(
        <div id="select">
            <label htmlFor={ name } >{ name }</label>
            <select name={ name }  { ...rest } >
                <option value="">Selecione</option> 

                {options.map( (option, index) => (
                        <option key={ index } value={ option } > { option } </option>
                ))}
                
            </select>
        </div>
        
    )
}

export default Select