import React from "react";
import { useState } from "react";
import { appartements } from "../../datas/appartements";
import arrowLeft from "../../assets/vector_foward.png";
import arrowRight from "../../assets/vector_back.png";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = appartements.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {appartements.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt="" className="slider__picture" />
            )}
          </div>
        );
      })}
      {/* get button if there are more thant one picture */}
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="slider__previous-icon" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={arrowRight} alt="" className="slider__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slider;


    // const nextPicture = () => {
    //     setCurrentIndex(currentIndex === length -1 ? 0 : currentIndex + 1)};

    // const prevPicture = () => {
    //     setCurrentIndex(currentIndex === 0 ? length -1 : currentIndex - 1)};
        

    //     return (
    //         <div>
    //         {appartements.map((pictures, index) => {
    //             return  (
    //             <div>
    //             <div key={index}
    //                 {index === currentIndex && ( <img src={pictures} alt='' />)}>
    //             </div>
    //             <div src={vector_foward} className="carousel-container__image_foward" onClick={(nextPicture)}/>
    //             <div src={vector_back} className="carousel-container__image_back" onClick={(prevPicture)}/>
    //             </div>
    //             )
    //         })}
    //         </div>
    //     )
    // }

    // export default Carousel




//             <div className="carousel-container">
    
//             {appartements.map((appartements, index) => {
//                 return  <img key={index}>{appartements.pictures[currentIndex]}</img>
//             })}

//         </div>
//     )
    
// }