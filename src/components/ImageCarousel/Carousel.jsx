import { useState } from 'React';
import { Link } from 'react-router-dom'
import { appartements } from '../../datas/appartements';

function Carousel({appartements}) {
    const [currentIndex, setIndex] = useState(0);

    const prevPicture = () => {
        setIndex(currentIndex === 1 ? 1 : currentIndex - 1)};
        
    const nextPicture = () => {
        setIndex(currentIndex + 1)};

        return (
            
            <div>
            {appartements.map((pictures, index) => {
                return  (
                <div>
                <div key={index}>
                    {index === currentIndex && ( <img src={pictures} alt='' />)}
                </div>
                <Link className="carousel-container__image_back" onClick={(prevPicture)}/>
                <Link className="carousel-container__image_foward" onClick={(nextPicture)}/>
                </div>
                )
            })}
            </div>
        )
    }

    export default Carousel




//             <div className="carousel-container">
    
//             {appartements.map((appartements, index) => {
//                 return  <img key={index}>{appartements.pictures[currentIndex]}</img>
//             })}
//             <Link className="carousel-container__image_back" onClick={() => setIndex(-1)}/>
//             <Link className="carousel-container__image_foward" onClick={() => setIndex(1)}/>
//         </div>
//     )
    
// }