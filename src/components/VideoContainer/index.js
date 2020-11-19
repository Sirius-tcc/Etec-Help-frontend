import React from 'react'
import Eye from '../../assets/images/eye.svg'
import { Link } from 'react-router-dom'

import './styles.css'
import './responsive.css'

function VideoContainer({img, title, views, subject, topic, id }){
    
    return(
        <div id="video-container">
            <Link to={`/subject/${subject}/${topic}/videos/${id}`}>
                <div className="content">
                        <div className="thumbnail">
                            <img src={ img } alt=""/>
                        </div>
                        <div className="video-info">
                            <h3>{ title }</h3>
                            <div className="views">
                                <img src={ Eye } alt="views"/>
                                <h4>{views}</h4>
                            </div>
                        </div>
                </div>
            </Link>
        </div>
    )
}


export default VideoContainer