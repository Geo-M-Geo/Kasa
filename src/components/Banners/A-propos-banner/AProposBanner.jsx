import AProposPicture from '../../../assets/A_propos_desktop.png'
import AProposMobile from '../../../assets/A_propos_mobile.png'
import'../A-propos-banner/AProposBanner.scss'

// This component display a picture for the desktop and a different picture for the mobiles
function AProposBanner() {
    return (
        <div className="A-propos-banner-container">
            <img className="A-propos-banner-container__image-desktop" src={AProposPicture} alt="Image de la bannier dans la page A porpos" />
            <img className="A-propos-banner-container__image-mobile" src={AProposMobile} alt="Image de la bannier page A propos version mobile"/>
        </div>
    )
}

export default AProposBanner