import React from 'react'
import { Link } from 'react-router-dom'
import Back from '../../assets/images/back.svg'
import Subject from '../../components/Subject'
import HeaderHome from '../../components/HeaderHome'
import UserChat from '../../components/UserChat'


import listAllChat from './testChatListTemp'

import './styles.css'

function Chat(){


    const listChat  = listAllChat()


    return(
        <div id="chat">

            <div className="chat-content-grid">
                
                <div id="goback">
                    <Link to="/helper/home">
                        <img src={ Back } alt=""/>
                    </Link>
                </div>


                <div id="received-my-message">
                    <div className="container">
                        <div className="name">
                            <h2>George Hotz</h2>
                        </div>
                        <Subject 
                            name="Programação"
                            boxBoderRadius="16px"
                            circleWidth="8px"
                            fontSize="10px"
                            color="#6BDC92"
                            padding="0px"
                        />
                    </div>


                    

                
                </div>
          
                <div id="header-chat">
                    <HeaderHome
                        type="student"
                        position="relative"
                        name="Beatriz Vitória"
                        title="Etec Chat"
                    />
                </div>

                <div id="listChat">

                    <div className="list-chat-container">
                        {
                            listChat.map((user, key) =>(
                                <UserChat
                                    key={key}
                                    img={user.img}
                                    notifications={user.notifications}
                                    selected={ user.selected}
                                />
                            ))
                        }

                    </div>
          
                </div>
            

                <div id="listHelps">

                </div>
            </div>
        </div>
    )
}

export default Chat