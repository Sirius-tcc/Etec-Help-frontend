import React from 'react'


import './styles.css'

function Select({ name, options, isObject=false , ...rest }){
    return(
        <div id="select">
            <label htmlFor={ name } >{ name }</label>
            <select name={ name }  { ...rest } >
                <option value={0} hidden>Selecione</option> 

                {!isObject ? 
                    options.map( (option, index) => (
                        <option key={ index } value={ option } > { option } </option>
                    )) 
                    : 
                    options.map( (option) => (
                        <option key={ option.code } value={ option.code  } > { option.name  } </option>
                    ))
                }
            </select>
        </div>
        
    )
}

export default Select