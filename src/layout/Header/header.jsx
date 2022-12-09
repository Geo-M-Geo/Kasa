import { Link } from 'react-router-dom'
import logo_desktop from '../../assets/logo_desktop.png'
import"../Header/header.scss";

// Header component that contain a logo and a nav bar
function Header() {
    return (
        <div className='header-container'>
            <Link to="/">
                <img className='header-container__logo' src={logo_desktop} alt='Logo du site Kasa dans le header'/>
            </Link>
            <nav className='header-container__list'>
            {/* Nav bar of the header component who link to an Accueil page and a A propos page */}
                    <Link className='header-container__list__links' to="/">Accueil</Link>
                    <Link className='header-container__list__links' to="/A-Propos">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header