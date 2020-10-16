import React from 'react'


import './styles.css'

function Message(){

    const img ="https://instagram.fcgh5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/30592708_175512366435660_7668017220508712960_n.jpg?_nc_ht=instagram.fcgh5-1.fna.fbcdn.net&_nc_ohc=ZaHNWQgYuoUAX-zXj-G&oh=e104f22c16da5b906a9039d81c00f3d1&oe=5FB1886A"


    return(
        <div id="message">
            <div className="message">
                
                <div className="photo-user">
                    <img src={img} alt=""/>
                </div>

                <div className="other-menssage">
                    <div className="message-info">
                        <div className="name">
                            <h2>Beatriz</h2>
                        </div>

                        <div className="time-hour">
                            <span>18/10/2020 às 18:31</span>
                        </div>
                    </div>

                    <div className="menssage-words">
                        <p className="message-content" >
                            quuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam co
                        </p>
                    </div>
                   
                </div>
                
            </div>
        </div>
    )
}

export default Message