import BannerPicture from '../../assets/Home_background.png'
import styled from 'styled-components'

const BannerContainer = styled.div`
    display:flex;
    justify-content: center;
    margin: 43px 0 60px 0;
    max-height: 223px;
    align-items: center;
    
`
const BannerImage = styled.img`
    border-radius: 25px;
`
const TextBanner = styled.p`
    position: absolute;
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