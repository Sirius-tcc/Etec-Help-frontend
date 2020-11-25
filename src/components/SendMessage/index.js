import React, { useState } from 'react'


import InputForm from '../InputForm'
import TextArea from '../TextArea'
import Select from '../Select'
import Button from '../Button'
import { getTypeUser } from '../../scripts/getTokenData'

import ScheduleImg from '../../assets/images/schedule.svg'

import './styles.css'
import './modal.css'

function SendMenssage({ onSubmit, onChange, value }){

    const [show, setShow] = useState(false)


    return(
        <>
    
            <form id="send-menssage" onSubmit= { onSubmit  } >
                <div className="send-menssage">
                    <input placeholder="Digite uma mensagem" value={ value  } className="input" onChange={onChange}/>
                    
                    {
                        getTypeUser() === "student" && 
                            <div className="schedule" onClick={ () => { setShow(true) }}>
                                <img src={ScheduleImg} alt="schedule"/>
                            </div>
                    }
                    
                </div>
                
            </form>
            

        { show?
            (<div id="helper-schedule">
                <div className="schedule">

                    <div className="close" onClick={() => {setShow(false)}}/>
                    <div className="title">
                        <h2>Agendar Ajuda</h2>
                    </div>
                    <hr/>
                    <div className="row">
                        <InputForm name="Título da ajuda"/>
                    </div>
                    <div className="row">
                        <TextArea name="Descrição da ajuda"/>
                    </div>
                    <div className="row two-inputs">
                        <InputForm name="Data da ajuda" type="date"/>
                        <Select name="Matéria" options={ ['Matemática', 'Programação'] }/>
                    </div>
                    <div className="row">
                        <InputForm name="Localização"/>
                    </div>
                    <div className="buttons">
                        <Button buttonName="Agendar cadastro"/>
                    </div>
                </div>
            </div>)
            :
            (
                ''
            )
        }
        </>
    )
}


export default SendMenssage