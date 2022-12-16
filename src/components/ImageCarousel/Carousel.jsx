// import React from "react";
// import { useState } from 'React';
// // import { appartements } from '../../datas/appartements';
// import  vector_foward  from '../../assets/vector_foward.png';
// import  vector_back  from '../../assets/vector_back.png';


// function Carousel({ appartements }) {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const length = appartements.length;



//     return(
//         <div className="carouselcontainer">
//             {appartements.map((picture, index) => {
//                 return (
//                     <div>
//                         <img alt="" key={index}>{picture}</img>
//                         <img alt="" to={vector_foward} className="carousel-container__image_back" onClick={setCurrentIndex(currentIndex === length ? 0 : currentIndex + 1) }/>
//                         <img alt="" to={vector_back} className="carousel-container__image_foward" onClick={(setCurrentIndex(currentIndex === 0 ? length -1 : currentIndex - 1))}/>
//                     </div>
//                 )
//             })}
//         </div>
//     ) 


    
    
// } 
// export default Carousel;