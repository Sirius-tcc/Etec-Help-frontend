import React from 'react'
import './styles.css'

function ImageApresentation ({text, text_above, children}){




    return(
        <section className="logo-apresentation">
            <div className="background">

                <div className="logo">
                    <h2>{ text_above }</h2>

                    <div className="img">
                        { children }
                    </div>

                    <h2>{ text }</h2>
                </div>
            </div>
        </section>
    )
}



export default ImageApresentation