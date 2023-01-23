import { useState } from 'react'
import vectorDown from '../../assets/vector_down.png'
import vectorUp from '../../assets/vector_up.png'
import"../Collapse/Collapse.scss";

/* The collapse component contain a ternaire condition that display a bar with a title and an arrow,
     if the user click on it, it open a text under it. */
function Collapse({title, description}) {

    // UseState that keep the actual state of the bar then give a fonction to change it. Its set on true 
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className='collapse-container'>
            {/* If the user click on the bar it set the usestate on false  and only the bar is diplay */}
            <button className='collapse-container__button' onClick={() => setIsOpen(false)}> 
                <h3 className='collapse-container__button__title'>{title}</h3>
                <img className='collapse-container__button__image' src={vectorDown} alt="flèche vers le bas"/>
            </button>
        </div>
    ) : (
        <div className='collapse-container-open'>
            {/* If the user click on the bar it set the usestate on true so the text is display */}
                <button className='collapse-container__button' onClick={() => setIsOpen(true)}>
                    <h3 className='collapse-container__button__title'>{title}</h3>
                    <img className='collapse-container__button__image' src={vectorUp} alt="flèche vers le haut"/>
                </button>
                {/* Paragraph that contain the text */}
                <p className='collapse-container-open__description'>
                    {description}
                </p>            
        </div>
    )
};
export default Collapse;