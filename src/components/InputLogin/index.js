import React from 'react'

import './styles.css'




function InputLogin({ first=false, last=false, name, ...rest }) {


    let classProperty = first?'radius-first':"" 

    classProperty += last?'radius-last':""

    classProperty += " input-form"


    
    return(
        <input className={ classProperty } id={ name }  {...rest}/>
    );
    
}

export default InputLogin