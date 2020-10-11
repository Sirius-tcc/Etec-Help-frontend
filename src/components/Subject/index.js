import React from 'react'

import './styles.css'

function Subject({ name, boxWidth , boxBoderRadius, circleWidth, fontSize , color }){
    
    const boxStyle = {
        border:`1px solid ${color}`,  
        width:boxWidth?`${boxWidth}`:'auto',
        borderRadius: boxBoderRadius
    }

    const circleStyle= {   
        backgroundColor:`${color}`,
        width:circleWidth,
        height:circleWidth
    } 

    const subjectNameStyle = {  
        color:`${color}`,
        fontSize:fontSize
    } 


    return(
        <div id="subject" >

            <div className="box" style={boxStyle}>
                
                <div className="circle" style={circleStyle}></div>

                <h2 style={subjectNameStyle}>
                    { name }
                </h2>

            </div>
        </div>
    )
}


export default Subject