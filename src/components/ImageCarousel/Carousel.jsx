import { useState } from 'React';
import { Link } from 'react-router-dom'
import { appartements } from '../../datas/appartements';

function Carousel() {
    const [currentIndex, setIndex] = useState(0);
    const appartementPicture = parseInt(appartements)
    return (

        <div className="carousel-container">
            <img src=${appartementPictures[currentIndex]} className="carousel-container__image" />
            <Link className="carousel-container__image_back" onClick={() => setIndex(-1)}/>
            <Link className="carousel-container__image_foward" onClick={() => setIndex(1)}/>
        </div>

    )
}