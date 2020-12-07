import React from 'react'


import './styles.css'

function Message({ img, name, message, data, hour }){

    return(
        <div id="message">
            <div className="message">
                
                <div className="photo-user">
                    <img src={img} alt=""/>
                    
                </div>

                <div className="other-menssage">
                    <div className="message-info">
                        <div className="name">
                            <h2>{name}</h2>
                        </div>

                        <div className="time-hour">
                            <span>{`${data} às ${hour}`}</span>
                        </div>
                    </div>

                    <div className="menssage-words">
                            <pre className="message-content" >{message}</pre>
                    </div>
                   
                </div>
                
            </div>
        </div>
    )
}

export default Message