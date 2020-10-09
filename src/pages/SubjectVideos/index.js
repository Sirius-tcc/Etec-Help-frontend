import React from 'react'
import Header from '../../components/Header'
import HeaderBottom from '../../components/HeaderBottom'
import VideoContainer from '../../components/VideoContainer'

import './styles.css'

function SubjectVideos(props){
    
    const subject = props.match.params.subject
    const topic = props.match.params.topic

    return(

        <div id="subject-videos">
            <div className="header">
                <Header to="/helper/home" title={ subject } userName="Tiago Luchtenberg"/>
                <HeaderBottom title={ `Estes são os vídeos  sobre ${ topic.toLowerCase() }` }/>
            </div>

            <div className="video-content flex">
                <VideoContainer img="aritmetica.svg" title="Soma, como somar" views="367" id={1} subject={ subject } topic={ topic } />
                <VideoContainer img="aritmetica.svg" title="Soma, como somar" views="367" id={2} subject={ subject } topic={ topic } />
                <VideoContainer img="aritmetica.svg" title="Soma, como somar" views="367" id={3} subject={ subject } topic={ topic } />
                <VideoContainer img="aritmetica.svg" title="Soma, como somar" views="367" id={4} subject={ subject } topic={ topic } />
                <VideoContainer img="aritmetica.svg" title="Soma, como somar" views="367" id={5} subject={ subject } topic={ topic } />
                
            </div>

        </div>
        
    )
}


export default SubjectVideos