import BannerPicture from '../../assets/Home_background.png'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const BannerContainer = styled.div`
    display:flex;
    justify-content: center;
    margin: 43px 100px 60px 100px;
    max-height: 223px;
    align-items: center;
    @media only screen and (max-width: 750px) {
        margin: 20px 20px 0 20px;
    };
    @media only screen and (max-width: 500px) {
        justify-content: flex-start;
    };
`
const BannerImage = styled.img`
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    @media only screen and (max-width: 750px) {
        border-radius: 10px;
    };
`
const TextBanner = styled.p`
    position: absolute;
    font-weight: 500;
    font-size: 48px;
    color: ${colors.primary};
    @media only screen and (max-width: 1235px) {
        font-size: 30px;
    };
    @media only screen and (max-width: 850px) {
        font-size: 24px;
    };
    @media only screen and (max-width: 500px) {
        font-size: 15px;
        width: 200px;
        display: flex;
        flex-direction: column;
        padding-left: 20px;
    };
`
function Banner() {
    return (
        <BannerContainer>
            <BannerImage src={BannerPicture} alt='Image de la banniere du site' />
            <TextBanner>Chez vous, <span>partout et ailleurs</span></TextBanner>
        </BannerContainer>
    )
}

export default Banner