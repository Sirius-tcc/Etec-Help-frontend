import React from 'react'


import Schedule from '../../assets/images/schedule.svg'


import './styles.css'

function SendMenssage(){
    return(
        <div id="send-menssage">
            <div className="send-menssage">
                <input placeholder="Digite uma mensagem" className="input"/>
                
                <div className="schedule">
                    <img src={Schedule} alt="schedule"/>
                </div>
            </div>
            

        </div>
    )
}


export default SendMenssage