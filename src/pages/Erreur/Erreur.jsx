import Error from '../../assets/404_Error.png'
import { Link } from 'react-router-dom'
import'../Erreur/Erreur.scss';



// Error page that containt and image, a title and a link to go back to the home page
function Erreur() {
    return ( 
        <div className='error-container'>
            <img className='error-container__image' src={Error} alt="Erreur page introuvable"/>
            <h3 className='error-container__title'>Oups! La page que vous <span>demandez n'existe pas.</span></h3>
            <Link className='error-container__link' to="/">Retournez sur la page d'accueil</Link>
        </div>
    )
}

export default Erreur