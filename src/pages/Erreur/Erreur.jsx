import Error from '../../assets/404_Error.png'
import { Link } from 'react-router-dom'
import'../Erreur/Erreur.scss';

// Error function. It contain a main container that contain another container with the error's image and title inside then the link to go back to the Home page
function Erreur() {
    return ( 
        <div className='error-container'>
             <div className='error-container__top'>
                <img className='error-container__top__image' src={Error} alt="Erreur page introuvable"/>
                <h3 className='error-container__top__title'>Oups! La page que <span> vous demandez n'existe pas.</span></h3> 
             </div>
        <Link className='error-container__link' to="/">Retournez sur la page d'accueil</Link>
        </div>
    )
};
export default Erreur

