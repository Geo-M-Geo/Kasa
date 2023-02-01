import { Link } from 'react-router-dom';
import { appartements } from '../../datas/appartements';
import'../AllCards/AllCards.scss';

// Function that display each appartement into a list
function DisplayCards() {
    return (
        <ul className='appartements-container'>
            {/* Map function wich is use to create a list with a key to each items and display into a list */}
            {appartements.map(({ id, title, cover }) => 
                <Link to={`/logement/${id}`} key={id} className='appartements-container__appartement' >
                    <h3 className='appartements-container__appartement__title'>{title}</h3>
                    <img className='appartements-container__appartement__picture' src={cover} alt="Aperçu de l'appartement" />
                </Link>
            )}
        </ul>
    )
};
export default DisplayCards;