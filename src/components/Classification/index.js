import React from 'react'
import Star from '../../assets/images/star.svg'

import './styles.css'
function Classification({ classification, width, getStarsNumber }){

    const starWidth = {
      width: width,
      height: width
    }

    const getStarsNumbers = (starsNumber) => {
        let stars = [];
      
        let j = 5

        for (let i = 1; i <= starsNumber; i++) {

          if (i <= 5){
            stars.push(
              <img 
                key={ i } 
                src={ Star } 
                value={ j - (i - 1) } 
                className={`star${i}`} 
                style={ starWidth } 
                alt={'Stars'}
                onClick ={getStarsNumber}
              />
            )
          } else { break } 
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