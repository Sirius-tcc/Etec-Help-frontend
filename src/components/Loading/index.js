import React from 'react'

import './styles.css'




function Loading({ 
    width="30px", 
    height="30px",
    borderWidth="4px",
    borderLeftColor="#FFF"
}) {
    return(
       
            <div 
                className="spinner"
                style={{
                    width,
                    height,
                    borderWidth,
                    borderLeftColor
                }}
            />
    );
    
}

export default Loading