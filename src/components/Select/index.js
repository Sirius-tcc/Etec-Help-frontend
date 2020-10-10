import React from 'react'


import './styles.css'

function Select({ name, options, ...rest }){
    return(
        <div id="select">
            <label for={ name } >{ name }</label>
            <select name={ name }  { ...rest } >
                <option value="">Selecione</option> 

                {options.map( option => (
                        <option value={ option } > { option } </option>
                ))}
                
            </select>
        </div>
        
    )
}

export default Select