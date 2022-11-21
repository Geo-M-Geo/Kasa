import BannerPicture from '../../assets/Home_background.png'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const BannerContainer = styled.div`
    display:flex;
    justify-content: center;
    margin: 43px 40px 60px 40px;
    max-height: 223px;
    align-items: center;
`
const BannerImage = styled.img`
    border-radius: 25px;
    max-width: 100%;
    height: auto;
`
const TextBanner = styled.p`
    position: absolute;
    font-weight: 500;
    font-size: 48px;
    color: ${colors.primary}
`

function Banner() {
    return (
        <BannerContainer>
            <BannerImage src={BannerPicture} alt='Image de la banniere du site' />
            <TextBanner>Chez vous, partout et ailleurs</TextBanner>
        </BannerContainer>
    )
}

export default Banner