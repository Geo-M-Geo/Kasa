import React from 'react';
import orangeStar from '../../assets/orange_star.png';
import greyStar from '../../assets/grey_star.png'
import '../Rating/Rating.scss'

// Function that display the ratin stars 
function Rating({rating}) {
    const ratingArray = [1, 2, 3, 4, 5];
    return (
        <div className='rating-container'>
{/* The map function go through the ratingArray and compare each number with the rating number 
    and display an orange star till its superior or equal to the rating number then the next stars will be grey */}
            {ratingArray.map((star, index) => 
                rating >= star ? (
                    <img key={index} src={orangeStar} alt="Etoile orange donc valide"/>
                ) : (
                    <img key={index} src={greyStar} alt="Etoile grise donc invalide" />
                )
            )}
        </div>
    )
}
export default Rating