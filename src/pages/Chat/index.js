import React, {  } from 'react'
import Subject from '../../components/Subject'
import HeaderHome from '../../components/HeaderHome'
import UserChat from '../../components/UserChat'
import GoBack from '../../components/GoBack'
import Helps from '../../components/Helps'
import SendMessage from '../../components/SendMessage'
import Message from '../../components/Message'



import listAllChat from './testChatListTemp'
import listAllHelps from './testChatListHelpTemp'



import './styles.css'

function Chat(){

    const listChat  = listAllChat()
    const listHelps = listAllHelps()
    

    console.log(listHelps)
    return(
        <div id="chat">

            <div className="chat-content-grid">
                
                <div id="goback">
                    <GoBack />
                </div>


                <div id="received-my-message">
                    <div className="container">
                        <div className="name">
                            <h2>George Hotz</h2>
                        </div>

                        <div className="subjects">
                            
                            <Subject 
                                name="Matemática"
                                boxBoderRadius="16px"
                                circleWidth="8px"
                                fontSize="10px"
                                color="#FCFF70"
                                padding="0px"
                            />

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

                    {listHelps.map((help, key)=>(
                         <Helps
                            key={key} 
                            who={ help.who }
                            title={ help.title }
                            description={ help.description }
                            date={ help.date }
                            stars={ help.stars }
                            status={ help.status }
                            subject={ help.subject }
                            location={help.location}
                        />
                    ))}
                </div>


                <div id="chat-content">

                    <div className="chat">
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                    </div>

                    <SendMessage/>
                </div>

            </div>
        </div>
    )
}

export default Chat