// import React from 'react'
import { useState } from 'react';
import  vector_foward  from '../../assets/vector_foward.png';
import  vector_back  from '../../assets/vector_back.png';
import '../ImageCarousel/Carousel.scss'

// Function that display the image's carousel of the selected appartement
function Carousel({pictures}) {

    // constant with the current index and the function to change it
    const [currentIndex, setCurrentIndex] = useState(0);

    /* If the current index is 0 it take the length of the pictures'array 
       and add -1 to display the last array's picture */
    const PreviousPicture = () => {
        currentIndex === 0 ? setCurrentIndex( pictures.length -1 ) 
        : setCurrentIndex( currentIndex - 1 )
    }
    /* It take the current index and add one because the display start at one and the array at 0,
       it set it at 0 to start again or add one. */
    const NextPicture = () => {
        currentIndex + 1 === pictures.length ? setCurrentIndex(0) 
        : setCurrentIndex(currentIndex + 1)
    }

    return (
        /* The div contain 4 elements, the appartements current picture, 
           2 arrows to go back and foward and a small element that tell which picture's number is display */
        <div className='carousel-container' >
            <img className='carousel-container__image' src={pictures[currentIndex]} alt="image choisi de l'appartement"/>
            <img className='carousel-container__previous-button' src={vector_back} alt='bouton precedent' onClick={PreviousPicture} />
            <img className='carousel-container__next-button' src={vector_foward} alt='bouton suivante' onClick={NextPicture} />
            <p className='carousel-container__picture-number-info' >{currentIndex +1}/{pictures.length}</p>
        </div>
    )
}

export default Carousel;


