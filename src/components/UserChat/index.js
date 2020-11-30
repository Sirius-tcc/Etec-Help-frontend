import React from 'react'
import { Link } from 'react-router-dom'


import './styles.css'

function UserChat({ img, notifications, selected, ...rest }){


    return(

        <>
            <div id="user-chat" { ...rest }>
                {selected?<div className="selected"/>:<></>}

                <div className={`user ${selected ? "border" : "" }`}>
                    <Link to="/chat">
                        {img?<img src={ img } alt=""/>:""}
                    </Link>

                </div>

                {notifications>0?<div className="notifications">
                    <span>
                        { notifications }
                    </span>
                </div>:<></>}
            </div>
        </>
    )
}

export default UserChat