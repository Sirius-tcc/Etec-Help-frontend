import React, { useState, useEffect } from 'react'


import InputForm from '../InputForm'
import TextArea from '../TextArea'
import Select from '../Select'
import Button from '../Button'
import { getTypeUser } from '../../scripts/getTokenData'

import ScheduleImg from '../../assets/images/schedule.svg'

import { getUserId } from '../../scripts/getTokenData'
import { toast } from 'react-toastify'



import './styles.css'
import './modal.css'
import api from '../../services/api'

import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3001/');

function SendMenssage({ id, onSubmit, onChange, value }){

    const [show, setShow] = useState(false)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [subject, setSubject] = useState('')
    const [time, setTime] = useState('')
    const [locations, setLocations] = useState([])
    const [local, setLocal] = useState(0)

    const [helper, setHelper] = useState({})

    useEffect(() => {
        async function fetchLocations(){
            const res = await api.get('/help/locations')
            const { data } = res.data

            setLocations(data)
        }

        async function fetchHelper(){
            const res = await api.get(`/helper/show/${id}`)
            const { data } = res.data
            setHelper(data[0])
        }

        fetchLocations()
        fetchHelper()
    }, [helper, local])

    async function handleSubmitHelp(){

            const helpData = {
                title,
                description,
                date,
                time,
                local,
                subject,
                student : getUserId(),
                helper : Number(id) ,
                status: 1,
            }

            console.log(helpData)


            if ( 
                title.length === 0 ||
                date.length === 0 ||
                time.length === 0
            ){
                toast.error(`Por favor preencha todos os carmpos corretamente!` )
                return
            }


            if ( title.length > 40 ){
                toast.error(`O titulo tem que ser menor 40 caracteres! Você digitou ${title.length} caracteres.` )
                return
            }

            if ( description.length > 280 ){
                toast.error(`O titulo tem que ser menor 280 caracteres! Você digitou ${description.length} caracteres.` )
                return
            }

            if ( subject === "" ){
                toast.error(`Selecione alguma matéria!` )
                return
            }
            if ( local === 0 ){
                toast.error(`Selecione algum local!` )
                return
            }

            const res = await api.post('/help/create', helpData)
            const  data = res.data

            if(!data.sucess){
                toast.error('Erro ao cadastra ajuda para helper!')
                console.log(res)
            }else{
                //window.location.reload();
                const data = {
                    id : id,
                    user: getTypeUser(),
                    userId : getUserId()
                }
                
                socket.emit('confirmRating', data)
                setShow(false)
                toast.success('Pedido de ajuda feito com sucesso!')
            }

    }
    
    
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
                        <InputForm 
                            onChange={ (e) => setTitle(e.target.value) } 
                            name="Título da ajuda"
                        />
                    </div>
                    <div className="row">
                        <TextArea 
                            onChange={ (e) => setDescription(e.target.value) } 
                            name="Descrição da ajuda"
                        />
                    </div>
                    <div className="row two-inputs">
                        <InputForm 
                            onChange={ (e) => setDate(e.target.value) } 
                            name="Data da ajuda" type="date"
                        />
                        <InputForm  
                            name="Hora da ajuda" 
                            type="time"
                            onChange={ (e) => setTime(e.target.value) } 
                        />
                    </div>
                    <div className="row two-inputs">
                        <Select 
                            name="Matéria"
                            onChange={ (e) => setSubject(Number(e.target.value)) } 
                            isObject
                            options={ 
                                helper.subjects.length < 2 ? (
                                    helper.subjects[0] === "Matemática" ? ([{ code : 1, name : "Matemática" }]) 
                                    : ([{ code : 2, name : "Programação" }])
                                ) : ( 
                                    [
                                        { code : 1, name : "Matemática"}, 
                                        { code : 2, name : "Programação"}
                                    ]
                                 )
                             }/>

                        <Select 
                            isObject
                            name="Localização" 
                            options={ locations }
                            onChange={ (e) => setLocal( Number(e.target.value) ) } 
                        />
                    </div>

                    <div className="buttons">
                        <Button 
                        onClick ={ handleSubmitHelp }
                        buttonName="Agendar cadastro"/>
                    </div>
                </div>
            </div>)
            :
            (
                <></>
            )
        }
        </>
    )
}


export default SendMenssage