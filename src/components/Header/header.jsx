import { Link } from 'react-router-dom'
import logo_desktop from '../../assets/logo_desktop.png'
import"./header.scss";

// Header component that contain a logo which is too a link to the home page and a nav bar with two links.
function Header() {
    return (
        <header className='header-container'>
            <Link to="/">
                <img className='header-container__logo' src={logo_desktop} alt='Logo du site Kasa dans le header'/>
            </Link>
            {/* Nav bar of the header component with two links, one to the Accueil page and one to the A propos page */}
            <nav className='header-container__list'>
                    <Link className='header-container__list__links' to="/">Accueil</Link>
                    <Link className='header-container__list__links' to="/A-Propos">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header