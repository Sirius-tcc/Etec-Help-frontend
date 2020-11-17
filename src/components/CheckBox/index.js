import React from 'react';

import './styles.css'
function CheckBox({ isChecked, ...props }){
    return(
        <input className="checkbox" type="checkbox" checked={isChecked}  { ...props } />     
    );
}

export default CheckBox