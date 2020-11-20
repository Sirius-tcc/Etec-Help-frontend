import React, { useEffect } from 'react'
import Subject from '../../components/Subject'
import HeaderHome from '../../components/HeaderHome'
import UserChat from '../../components/UserChat'
import GoBack from '../../components/GoBack'
import Helps from '../../components/Helps'
import SendMessage from '../../components/SendMessage'
import Message from '../../components/Message'
import { useHistory } from 'react-router-dom'
import { getTypeUser, getUserId } from '../../scripts/getTokenData'


import listAllMensages from './listAllMensages'


import './styles.css'
import api from '../../services/api'
import { useState } from 'react'

function Chat(props){

    const id = props.match.params.id

    const listMessages = listAllMensages()


    const { push } = useHistory()
    const loadTotheBottom = () =>{
        document.querySelector(".chat-").scrollTo(0, document.querySelector(".chat-").scrollHeight)
    }

    const [ listChat, setListChat ] = useState([])
    const [ receiver, setReceiver ] = useState({})
    const [ listHelps, setlistHelps ] = useState(null)


    useEffect(() => {
        async function listChat(){

            if( getTypeUser() === "student" ){
                const res = await api.get(`/chat/listStudentChat/${ getUserId() }`)
                const data = res.data.data
                setListChat(data)
                console.log(data[0])
            }
        }

        async function getReceiver(){

            if(Number(id) !== 0)
            {
                    if( getTypeUser() === "student" ){

                        const res = await api.get(`/helper/show/${ id }`)
                        const data = res.data.data[0]
                        setReceiver(data)
                        console.log(data)
                    }
            }else{

            }
            
        }

        async function listHelps(){
            if( getTypeUser() === "student" ){
                const res = await api.get(`/help/list/${id}`)
                const data = res.data

                if(data.sucess){
                    setlistHelps(data.data)
                    console.log(data.data)
                }else{
                    setlistHelps([])
                }
            }
        }

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
                                        selected={ user.helper_code === Number(id)  }
                                        onClick ={ () =>{
                                            if(getTypeUser() === "student"){
                                                push(`/student/chat/${user.helper_code}`)
                                            }else{

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
                                    who={ help.helper_name }
                                    title={ help.title }
                                    description={ help.description }
                                    date={ help.date }
                                    stars={ help.classification }
                                    status={ help.status_code }
                                    subject={ help.subject_name }
                                    location={help.local}
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

                    <div className="chat-" onLoad={loadTotheBottom}>

                        {listMessages.map((msg, index) =>(
                            <Message
                                key={index}
                                img={ msg.img }
                                name={ msg.name }
                                message={ msg.message }
                                data={ msg.data }
                                hour={ msg.hour }
                            />)
                        )}
                    </div>
                    
                    <SendMessage />
                </div>

            </div>
        </div>

    )
}
/*
 <Subject 
    name="Matemática"
    boxBoderRadius="16px"
    circleWidth="8px"
    fontSize="10px"
    color="#FCFF70"
    padding="0px"
/>
 */
export default Chat