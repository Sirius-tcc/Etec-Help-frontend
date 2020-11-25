import React, { useState} from 'react'
import Classification from '../Classification'
import Button from '../../components/Button'
import { toast } from 'react-toastify'

import api from '../../services/api'

import './styles.css'
import './modal.css'


export default function GivenHelps({ id, who, title, description, status, date, stars, subject, location, handleAcceptRequest, handleCancelRequest })
{
    const [show, setShow] = useState(false)

    const statusArray = [
        {status : "Pendente", color:"#FCFF70"},
        {status : "Confirmado", color:"#9FFFA9"},
        {status : "Recusado", color:"#FF9F9F"}
    ]
    
    
    return(

        <>
            <div id="given-helps">
                <div className="content"  onClick={ ()=>{ setShow(true) }} >
                    <div className="title">
                            <h4> {`${who}`} deu um help </h4>
                    </div>
                        
                        <div className="body">
                            <div className="row">
                                <h5>Status:</h5>
                                <span className="status" style={ { color: statusArray[Number(status) - 1].color } } >{statusArray[Number(status) - 1].status}</span>
                            </div>

                            <div className="row ">
                                <h5>Data:</h5>
                                <span className="date">{date}</span>
                            </div>
                            
                            {stars !== 0 &&
                                (<div className="row classification">
                                    <h5>Avaliação:</h5>
                                    <span className="span-class">
                                        <Classification classification={stars} width="14px"/>
                                    </span>
                                </div>)
                            }

                            <div className="row ">
                                <h5>Matéria:</h5>
                                <span className="subject">{subject}</span>
                            </div>
                        </div>
                </div>
                {
                            Number(status) === 1 ? (
                                <>
                                    <div className="helper-request-button">
                                        <Button onClick={ handleAcceptRequest } buttonName="Aceitar"/>

                                        
                                        <Button onClick={ handleCancelRequest } buttonName="Recusar" />
                                    </div>
                                </> 
                            ): (<></>)
                        }
            </div>


            {show && 
                (<div id="showHelp">
                    <div className="background" >

                        <div className="close" onClick={() => {setShow(false) }}/>

                        <div className="helper-info-container" >

                            <div className="content">
                                <h1>Dados da ajuda</h1>

                                <div className="body">

                                    <div className="row">
                                        <h3>Título</h3>
                                        <span>{title}</span>
                                    </div>

                                    <div className="row">
                                        <h3>Descrição</h3>
                                        <span>{description}</span>
                                    </div>

                                    <div className="row">
                                        <h3>Status</h3>
                                        <span style={ { color: statusArray[Number(status) - 1].color } } >{statusArray[Number(status) - 1].status}</span>
                                    </div>


                                    <div className="row">
                                        <h3>Avaliação</h3>
                                        <span className="span-stars"><Classification classification={stars} width="18px"/></span>
                                    </div>


                                    <div className="row">
                                        <h3>Data</h3>
                                        <span>{date}</span>
                                    </div>

                                    <div className="row">
                                        <h3>Matéria</h3>
                                        <span>{ subject }</span>
                                    </div>

                                    <div className="row">
                                        <h3>Local da ajuda</h3>
                                        <span>{location}</span>
                                    </div>

                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>)
            }

        </>
    )
}