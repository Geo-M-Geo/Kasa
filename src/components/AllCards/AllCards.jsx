import { appartements } from '../../datas/appartements';
import'../AllCards/AllCards.scss'

// Function that display each appartement into a list
function DisplayCards() {
    return (
        <ul className='appartement-container'>
            {/* Map function wich is use to create a list with a key to each items and display into a list */}
            {appartements.map(({ id, title, cover }) => 
                <li key={id} className='appartement-container__appartement' >
                    <h3 className='appartement-container__appartement__title'>{title}</h3>
                    <img className='appartement-container__appartement__picture' src={cover} alt="cover picture of the appartement" />
                </li>
            )}
        </ul>
    )
};
export default DisplayCards