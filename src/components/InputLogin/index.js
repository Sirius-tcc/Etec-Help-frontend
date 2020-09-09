import React from 'react'

import './styles.css'




function InputLogin({ first=false,last=false, name, ...rest }) {

    var classProperty = !first&&!last?"radius":""

    classProperty += first?'radius-first':"" 

    classProperty += last?'radius-last':""

    classProperty += " input-form"


    
    return(
        <input className={ classProperty } id={ name } type="text"  {...rest}/>
    );
}

export default InputLogin