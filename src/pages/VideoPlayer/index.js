import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import ReactPlayer from 'react-player'
import   { openFullscreen, closeFullscreen  }  from '../../scripts/fullScreenVideo.js'
import { toast } from 'react-toastify'
import api from '../../services/api'

import './styles.css'
import './responsive.css'

function VideoPlayer(props){


    const [ video, setVideo ] = useState([])
    const subject = props.match.params.subject
    const topic = props.match.params.topic
   
    const id = props.match.params.id
    
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
            if(video.muted){
                toast.info(`Video mutado`)
            }else{
                toast.info(`Video desmutado`)
            }
        }

        if(key==='>' ){
            if (i < 7){
                i++
                setPosition(i)
                toast.info(`Velocidade ${velocity[i]}x`, { autoClose : 1500 })
            }
            
            
        }

        if(key==='<' ){
            if (i > 0){
                i--
                setPosition(i)
                toast.info(`Velocidade ${velocity[i]}x` , { autoClose : 1500 })
            }
        }

    
    }

    useEffect(() => {
        async function fetchVideo(){
            const response = await api.get(`/Video/show/${ id }`)
            const { data } = response

            if(data.sucess){
                setVideo(data.data[0])
            }else{
                toast.info('Erro ao carregar vídeo!')
            }
        }

        fetchVideo()
    }, [ id ])

    return(
        <div id="videos-player">
            <Header to={ `/subject/${ subject }/${ topic }/videos` } title={ topic }/>

            <div className="video-page-content">

            <div id="ReactPlayer">
                <ReactPlayer 
                    url={ video.url }
                    controls
                    light={ video.icon }
                    playing
                    pip
                    width="100%"
                    height="100%"
                    playsinline
                    stopOnUnmount={false}
                    onKeyPress={ handleVideoKeys}
                    autoFocus
                    playbackRate={velocity[position]}
                    onStart={()=>{
                        api.post(`/Video/create_view/${video.code}`)
                    }}
                />
            </div>

                <div className="video-info">
                    <div className="title-views-date">
                        <h1>{ video.title } </h1>
                        <p> { video.views } visualizações </p>
                    </div>
                    <hr/>
                    <h2>
                        { video.description }
                    </h2>
                </div>
                
            </div>
        </div>
        
    )
}

export default VideoPlayer