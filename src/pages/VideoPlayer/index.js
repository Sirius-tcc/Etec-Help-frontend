import React from 'react'
import Header from '../../components/Header'
import ReactPlayer from 'react-player'
import Back from '../../assets/images/aritmetica.svg'


import './styles.css'

function VideoPlayer(props){
    
    const subject = props.match.params.subject
    console.log( props.match)
    //const topic = props.match.params.topic

    const url = 'http://localhost/Coisas/teste/doodle.mp4'
    const title = 'Soma, como somar'
    const views = '367'
    const date = '6 de out. de 2020'
    const description = 'Nesse vídeo, mostramos o que é soma, todo o conceito matemático de soma e como fazer uma conta básica de soma.'
    
    return(
        <div id="videos-player">
            <Header to="/helper/home" title={ subject } userName="Tiago Luchtenberg"/>

            <div className="video-page-content">
                <ReactPlayer 
                    url={ url }
                    controls
                    light={ Back }
                    playing
                    pip
                    width="853px"
                    height="480px"
                    playsinline
                    stopOnUnmount={false}
                />
                <div className="video-info">
                    <div className="title-views-date">
                        <h1>{ title } </h1>
                        <p> { views } visualizações • { date }</p>
                    </div>
                    <hr/>
                    <h2>{ description }</h2>
                </div>
                
            </div>

        </div>
        
    )
}


export default VideoPlayer