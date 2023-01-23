import logo_dark from '../../assets/logo_dark.png'
import './footer.scss'

// Footer component who contain a white logo of the website and the rights
function Footer() {
    return (
        <footer className='footer-container'>
            <img className='footer-container__logo' src={logo_dark} alt='Logo sombre du site Kasa dans le footer' />
            <h3 className='footer-container__title'>© 2020 Kasa. All rights reserved</h3>
        </footer>
    )
}
export default Footer

