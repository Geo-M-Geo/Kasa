import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { appartements } from '../../datas/appartements';
import  vector_foward  from '../../assets/vector_foward.png';
import  vector_back  from '../../assets/vector_back.png';


function Carousel(pictures) {
    console.log(pictures)

    const displayPicture = pictures.map((pic, index) => {
        <img key={index} src={pic}/>
    } )
    const { Id } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = appartements.length;
    const NextPicture = currentIndex === length ? 0 : currentIndex + 1;
    const PreviousPicture = currentIndex === 0 ? length -1 : currentIndex - 1;
    const TheAppartment = appartements[currentIndex]

    // return (
    //     // <div className="carouselcontainer">
    //     //     {currentIndex} >= {length} ? (

    //     //     <img alt="" key={pictures.index}>{pictures.picture}</img>
    //     //     <img alt="" to={vector_foward} className="carousel-container__image_back" onClick={setCurrentIndex(NextPicture) }/>
    //     //      <img alt="" to={vector_back} className="carousel-container__image_foward" onClick={setCurrentIndex(PreviousPicture)}/>
    //     //      ) : ({setCurrentIndex} = 0)
            
    //     // </div>
    // ) 
}

export default Carousel;


