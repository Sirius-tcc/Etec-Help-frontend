import React from 'react'
import './styles.css'

function ImageApresentation ({text, children}){




    return(
        <section className="logo-apresentation">
            <div className="background">

                <div className="logo">

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