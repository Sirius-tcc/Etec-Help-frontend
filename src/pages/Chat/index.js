import React, { useEffect, useState } from 'react'
import Subject from '../../components/Subject'
import HeaderHome from '../../components/HeaderHome'
import UserChat from '../../components/UserChat'
import GoBack from '../../components/GoBack'
import Helps from '../../components/Helps'
import SendMessage from '../../components/SendMessage'
import Message from '../../components/Message'
import { useHistory } from 'react-router-dom'
import LogoImage from '../../assets/images/LogoImage.svg'

import { toast } from 'react-toastify'

import { getTypeUser, getUserId } from '../../scripts/getTokenData'

import openSocket from 'socket.io-client';
import api from '../../services/api'


import './styles.css'


function Chat(props){

    const id = props.match.params.id

    const { push } = useHistory()
    

    const [ listChat, setListChat ] = useState([])
    const [ receiver, setReceiver ] = useState({})
    const [ listHelps, setlistHelps ] = useState(null)
    const [ messages, setMessages ] = useState([])
    const [ message, setMessage ] = useState('')
    
    const  socket = openSocket('http://localhost:3001/');



    
    async function handleAcceptRequest(helper_code){ 
      

        const resp = await api.put(`/help/status/${ helper_code }`, { status_code : 2 })
        const data  = resp.data

        if(!data.sucess){
            toast.error('Erro ao aceitar pedido!')
            console.log(data.data)
        }

        updateSocketIO()

       
    }


    async function handleCancelRequest(helper_code){
        const resp = await api.put(`/help/status/${ helper_code }`, { status_code : 3 })
        const data  = resp.data

        if(!data.sucess){
            toast.error('Erro ao aceitar pedido!')
            console.log(data.data)
        }

      updateSocketIO()
      
    }

    
    const updateSocketIO = () => {

        const data = {
            id : id,
            user: getTypeUser(),
            userId : getUserId()

        }
        socket.emit('confirmRating', data)
    }
    useEffect(() => {
        socket.on('listChat', ( )=>{
            if( getTypeUser() === "student" ){
                api.get(`/chat/listStudentChat/${ getUserId() }`)
                    .then(res =>{
                        const data = res.data.data
                        setListChat(data)
                    })
                
            }else{
                api.get(`/chat/listHelperChat/${ getUserId() }`)
                .then(res =>{
                    const data = res.data.data
                    setListChat(data)
                })
            }
        })

        async function listChat(){

            if( getTypeUser() === "student" ){
                const res = await api.get(`/chat/listStudentChat/${ getUserId() }`)
                const data = res.data.data
                setListChat(data)
            }else{
                const res = await api.get(`/chat/listHelperChat/${ getUserId() }`)
                const data = res.data.data
                setListChat(data)
            }
        }

        async function getReceiver(){

            if(Number(id) !== 0)
            {
                    if( getTypeUser() === "student" ){
                        const res = await api.get(`/helper/show/${ id }`)
                        const data = res.data.data[0]
                        setReceiver(data)
                    }else{
                        const res = await api.get(`/student/show/${ id }`)
                        const data = res.data.data[0]
                        setReceiver(data)
                    }
            }else{

            }
            
        }

        socket.on('confirmRating', ( helps )=>{
            setlistHelps(helps)
            console.log(helps)
        })

        async function listHelps(){
            if( getTypeUser() === "student" ){
                const res = await api.get(`/help/list?helper_code=${id}&student_code=${getUserId()}`)
                const data = res.data

                if(data.sucess){
                    setlistHelps(data.data)
                }else{
                    setlistHelps([])
                }
            }else {
                const res = await api.get(`/help/list?helper_code=${getUserId()}&student_code=${id}`)
                const data = res.data
                console.log()
                if(data.sucess){
                    setlistHelps(data.data)
                }else{
                    setlistHelps([])
                }
            }
        }

        socket.on('receivedMessage', ( messages )=>{

            if(getTypeUser()=== "student"){
                if(
                    messages[0].student_code === getUserId() &&
                    messages[0].helper_code===Number(id)
                    
                ){
                    setMessages(messages)
                }

            }else{
                if(
                    messages[0].student_code === Number(id) &&
                    messages[0].helper_code===getUserId()
                ){
                    setMessages(messages)
                }
            }

        })


        async function Messages() {
            if( getTypeUser() === "student" ){
                const res = await api.get(`/chat/Messages?helper=${id}&student=${getUserId()}`)
                const  data = res.data
                if(data.sucess){
                    setMessages(data.data)
                }
            }else{
                const res = await api.get(`/chat/Messages?helper=${getUserId()}&student=${id}`)
                const  data = res.data
                if(data.sucess){
                    setMessages(data.data)
                }
            }
        }

        Messages()
        listChat()
        getReceiver()
        listHelps()

    }, [ id ])


    return(
        <div id="chat">

            <div className="chat-content-grid">
                
                <div id="goback">
                    <GoBack to={ `/${getTypeUser()}/home`}/>
                </div>


                <div id="received-my-message">
                    <div className="container">
                        <div className="name">
                            <h2>{ 
                            receiver.name && 
                            receiver.surname ? (`${receiver.name} ${receiver.surname}`) : 
                            <div style={ { 
                                width: "70%",
                                height: "18px", 
                                backgroundColor: "var(--color-grey-light)",
                                borderRadius: "20px"
                             } }/>
                            }</h2>
                        </div>

                        <div className="subjects">
                            
                            {

                                
                                getTypeUser() === "student" ? (
                                    receiver.subjects ? (
                                        receiver.subjects.map((subject, index) =>(
                                            <Subject
                                                key={ index }
                                                name={subject}
                                                boxBoderRadius="16px"
                                                circleWidth="8px"
                                                fontSize="10px"
                                                padding="0px"
                                            />
                                        ))
                                        

                                    ) : (
                                        <>
                                            <div style={ { 
                                                width: "48%",
                                                height: "14px", 
                                                backgroundColor: "var(--color-grey-light)",
                                                borderRadius: "20px"
                                            } }/>

                                            <div style={ { 
                                                width: "48%",
                                                height: "14px", 
                                                backgroundColor: "var(--color-grey-light)",
                                                borderRadius: "20px"
                                            } }/>
                                        </>
                                    )
                                    
                                ) : (
                                    <></>
                                )
                            }
                        </div>
                        
                    </div>

                
                </div>
          
                <div id="header-chat">
                    <HeaderHome
                        position="relative"
                        title="Etec Chat"
                    />
                </div>

                <div id="listChat">

                    <div className="list-chat-container">
                        {
                            listChat[0] ? (
                                listChat.map((user, key) =>(
                                    <UserChat
                                        key={key}
                                        img={user.photo}
                                        notifications={user.notifications}
                                        selected={ 
                                            getTypeUser() === "student" ? (
                                                user.helper_code === Number(id)  
                                            ) : (
                                                user.student_code === Number(id)  
                                            )
                                        }
                                        onClick ={ () =>{
                                            if(getTypeUser() === "student"){
                                                push(`/student/chat/${user.helper_code}`)
                                            }else{
                                                push(`/student/chat/${user.student_code}`)
                                            }
                                        }}
                                    />
                                ))
                            ) : (
                                <>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                    <UserChat/>
                                </>
                            )
                        }

                    </div>
          
                </div>
            

                <div id="listHelps">

                    {
                        listHelps ? (
                            listHelps.map((help, key)=>(
                                <Helps
                                    key={key} 
                                    id = { help.help_code }
                                    who={ 
                                        getTypeUser() === "helper" && 
                                        help.helper_code === getUserId() ? 
                                            ("Você") : 
                                                (help.helper_name )
                                    }
                                    title={ help.title }
                                    description={ help.description }
                                    date={ help.date }
                                    stars={ help.classification }
                                    status={ help.status_code }
                                    subject={ help.subject_name }
                                    location={help.local}
                                    handleAcceptRequest = {()=>{handleAcceptRequest(help.help_code) }}
                                    handleCancelRequest = {()=>{handleCancelRequest(help.help_code) }}
                                    code_chat ={id}
                                />
                            ))
                        ) : (
                            <>
                                <div style={{
                                    margin: "10px 0px",
                                    width : "232px",
                                    height : "126px",
                                    backgroundColor : "var(--color-grey-light)",
                                    borderRadius : "8px"
                                }}/>

                                <div style={{
                                    margin: "10px 0px",
                                    width : "232px",
                                    height : "126px",
                                    backgroundColor : "var(--color-grey-light)",
                                    borderRadius : "8px"
                                }}/>

                                <div style={{
                                    margin: "10px 0px",
                                    width : "232px",
                                    height : "128px",
                                    backgroundColor : "var(--color-grey-light)",
                                    borderRadius : "8px"
                                }}/>

                                <div style={{
                                    margin: "10px 0px",
                                    width : "232px",
                                    height : "128px",
                                    backgroundColor : "var(--color-grey-light)",
                                    borderRadius : "8px"
                                }}/>

                                <div style={{
                                    margin: "10px 0px",
                                    width : "232px",
                                    height : "128px",
                                    backgroundColor : "var(--color-grey-light)",
                                    borderRadius : "8px"
                                }}/>
                            </>
                        )
                        
                    }
                </div>


                <div id="chat-content">
                    { id !== "0" ?
                        <>
                            <div className="chat-">

                                {!!messages &&
                                    messages.map((msg, index) =>(
                                        <Message
                                            key={index}
                                            img={ msg.photo }
                                            name={ msg.name }
                                            message={ msg.message }
                                            data={ msg.date }
                                            hour={ msg.time }
                                        />)
                                )
                            
                            }
                            </div>
                            
                            <SendMessage
                                id = { id }
                                value={ message }
                                onSubmit ={ (e) =>{
                                    e.preventDefault()
                                    if(message.length){
                                        let helper_code;
                                        let student_code;

                                        if(getTypeUser() === "student"){
                                            helper_code = Number(id)
                                            student_code = getUserId()
                                        }else{
                                            helper_code = getUserId()
                                            student_code = Number(id)
                                        }

                                        const user = getTypeUser()

                                        const messageObject = {
                                            menssage : message,
                                            helper_code: helper_code,
                                            student_code: student_code,
                                            user : user,
                                        }

                                        socket.emit('sendMessage', messageObject)
                                        setMessage('')

                                    }

                                }} 

                                onChange ={ (e) =>{ setMessage(e.target.value) }}
                            />
                        </> 
                        :
                        <div className="logoContainer" >
                            <img src={LogoImage} alt="logo Etec Help" />
                            <h1>Seja bem-vindo ao chat!</h1>
                        </div>
                    }
                    
                </div>

            </div>
        </div>

    )
}

export default Chat