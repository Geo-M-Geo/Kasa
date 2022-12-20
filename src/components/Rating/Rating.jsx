import React from 'react';
import orangeStar from '../../assets/orange_star.png';
import greyStar from '../../assets/grey_star.png'

// Function that display the ratin starts 
function Rating({rating}) {
    const ratingArray = [1, 2, 3, 4, 5];
    return (
        <div>
            {ratingArray.map((star, index) => 
            rating >= star ? (
                <img key={index} src={orangeStar} alt="Etoile orange donc valide"/>
            ) : (
                <img key={index} src={greyStar} alt="Etoile grise donc invalide" />
            )
            )};
        </div>
    )

}

export default Rating