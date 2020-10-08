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
                <VideoContainer img="aritmetica.svg" title="Soma, como somar" views="367" />
                <VideoContainer img="aritmetica.svg" title="Subtrair , como subtrair" views="125" />
                <VideoContainer img="aritmetica.svg" title="multiplicação, tudo sobre multiplicação" views="256" />
                <VideoContainer img="aritmetica.svg" title="Divisão, como dividir" views="1000" />
            </div>

        </div>
        
    )
}


export default SubjectVideos