import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import HeaderBottom from '../../components/HeaderBottom'
import VideoContainer from '../../components/VideoContainer'
import { toast } from 'react-toastify'
import api from '../../services/api'

import './styles.css'

function SubjectVideos(props){
    
    const [ videos, setVideos ] = useState([])

    const subject = props.match.params.subject

    const topic = props.match.params.topic
    useEffect(() => {
        async function fetchLoadVideos(){
            const response = await api.get(`/Video/list/${ topic }`)
            const { data } = response

            if(data.sucess){
                setVideos(data.data)
            }else{
                toast.info(data.data, { position : "bottom-center", autoClose: false})
            }
        }
        fetchLoadVideos()
    }, [topic])

    return(

        <div id="subject-videos">
            <div className="header">
                <Header to={`/subject/${subject}`} title={ topic }/>
                <HeaderBottom title={ `Estes são os vídeos  sobre ${ topic.toLowerCase() }` }/>
            </div>

            <div className="video-content flex">
                {
                    videos.map(video =>(
                        <VideoContainer 
                            key={ video.code } 
                            img={ video.icon } 
                            title={ video.title } 
                            id={video.code} 
                            subject={ subject } 
                            topic={ topic } 
                            views={ video.views }
                        />
                    ))
                }
            </div>

        </div>
        
    )
}


export default SubjectVideos