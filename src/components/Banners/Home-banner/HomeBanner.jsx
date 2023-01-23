import BannerPicture from '../../../assets/Home_background.png'
import '../Home-banner/HomeBanner.scss'

// Home Banner is a component who display a picture and a text inside the picture for the Home page
function HomeBanner() {
    return (
        <div className='home-banner-container'>
            <img className='home-banner-container__image' src={BannerPicture} alt='Image de la banniere du site' />
            {/* The title of the home container contain a span which is use to break the line during the responsive */}
            <h3 className='home-banner-container__title'>Chez vous, <span>partout et ailleurs</span></h3>
        </div>
    )
};
export default HomeBanner