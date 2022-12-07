import AProposPicture from '../../assets/A_propos_background.png'
import styled from 'styled-components'
import AProposMobile from '../../assets/A_propos_mobile.png'

// CSS of the component Banner for the A propos page.
const BannerContainer = styled.div`
display:flex;
justify-content: center;
padding: 43px 100px 0 100px;
height: 223px;

@media only screen and (max-width: 1024px) {
    padding: 30px 50px 0 50px;
};
@media only screen and (max-width: 750px) {
    padding: 20px 20px 0 20px;
};
`

const BannerImageDesktop = styled.img`
    border-radius: 25px;
    max-width: 100%;
    object-fit: cover;
    display: block;
    opacity: 0.8;
    @media only screen and (max-width: 375px) {
        display: none; 
    };
`

const BannerImageMobile = styled.img`
    background-image: url();
    display: none;
    opacity: 0.8;
    @media only screen and (max-width: 375px) {
        display: block;
        border-radius: 10px;
        width: 100%;
        object-fit: cover;
    };
`
// This component display a picture for the desktop and a different picture for the mobiles
function AProposBanner() {
    return (
        <BannerContainer>
            <BannerImageDesktop src={AProposPicture} />
            <BannerImageMobile src={AProposMobile}/>
        </BannerContainer>
    )
}

export default AProposBanner