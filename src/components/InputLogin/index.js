import React from 'react'

import './styles.css'




function InputLogin({ first=false, last=false, name, error, ...rest }) {


    let classProperty = first?'radius-first':"" 

    classProperty += last?'radius-last':""

    classProperty += " input-form"


    
    return(
        !error ? 
            (<input className={ classProperty } id={ name }  {...rest}/>) 
        :
            (<input className={ `${classProperty} error` } id={ name }  {...rest}/>)
    );
    
}

export default InputLogin