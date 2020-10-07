import React from 'react'
import Star from '../../assets/images/star.svg'

import './styles.css'
function Classification({ classification }){

    const getStarsNumbers = (starsNumber) => {
        let stars = [];

        for (let i = 0; i < starsNumber; i++) {
          stars.push(<img src={ Star } alt="estrela"/>);
        }
        return stars;
      };


    return(
        <div id="classification">
            {getStarsNumbers(classification) }
        </div>
    )
}

export default Classification