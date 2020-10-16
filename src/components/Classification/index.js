import React from 'react'
import Star from '../../assets/images/star.svg'

import './styles.css'
function Classification({ classification, width }){

    const starWidth = {
      width: width,
      height: width
    }

    const getStarsNumbers = (starsNumber) => {
        let stars = [];

        for (let i = 0; i < starsNumber; i++) {
          stars.push(<img key={ i } src={ Star } style={ starWidth } alt="estrela"/>);
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