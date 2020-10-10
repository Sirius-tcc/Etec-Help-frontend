import React, { useState } from 'react'
import Header from '../../components/Header'
import ReactPlayer from 'react-player'
import   { openFullscreen, closeFullscreen  }  from '../../scripts/fullScreenVideo.js'
import './styles.css'
import './responsive.css'

function VideoPlayer(props){
    
    const subject = props.match.params.subject
    const topic = props.match.params.topic

    const url = 'http://localhost/Coisas/teste/doodle.mp4'
    const img = require('../../assets/images/aritmetica.svg')
    const title = 'Soma, como somar'
    const views = '367'
    const date = '6 de out. de 2020'
    const description = 'Nesse vídeo, mostramos o que é soma, todo o conceito matemático de soma e como fazer uma conta básica de soma.'
    

    
    const velocity = [0.25 , 0.5, 0.75, 1, 1.25, 1.5,1.75, 2]
    let i = 3
    const [position, setPosition] = useState(i)
    
    function handleVideoKeys(e) {
        const video = document.getElementsByTagName("video")[0];
        const key = e.key
        
        if(key==='f'){
            openFullscreen(video)
            closeFullscreen(video)
        }
    
        if(key==='m'){
            video.muted = !video.muted
        }

        if(key==='>' ){
            if (i < 7){
                i++
                setPosition(i)
            }
            
        }

        if(key==='<' ){
            if (i > 0){
                i--
                setPosition(i)
            }
        }

    
    }


    return(
        <div id="videos-player">
            <Header to={`/subject/${subject}/${topic}/videos`} title={ subject } userName="Tiago Luchtenberg"/>

            <div className="video-page-content">

            <div id="ReactPlayer">
                <ReactPlayer 
                    url={ url }
                    controls
                    light={ img }
                    playing
                    pip
                    width="100%"
                    height="100%"
                    playsinline
                    stopOnUnmount={false}
                    onKeyPress={ handleVideoKeys}
                    autoFocus
                    playbackRate={velocity[position]}
                />
            </div>

                <div className="video-info">
                    <div className="title-views-date">
                        <h1>{ title } </h1>
                        <p> { views } visualizações • { date }</p>
                    </div>
                    <hr/>
                    <h2>
                        { description }
                    </h2>
                </div>
                
            </div>
        </div>
        
    )
}

export default VideoPlayer