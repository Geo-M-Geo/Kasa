import logo_dark from '../../assets/logo_dark.png'
import styled from 'styled-components'

const FooterStyle = styled.div `
    height: 209px;
    width: 100%;
    left:0;
    background: #000000;
    // position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
`
const FooterContents = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100px;

`

const HomeLogo = styled.img `
    height: 39.444419860839844px;
    width: 122px;
    padding-top: 51%;
`

const TextContent = styled.p `
    color: #FFFFFF;
    font-size: 20px;
    padding-top 20px;
    
    @media only screen and (max-width: 750px) {
        font-size: 16px;
        height: 500px;
    };
    
    @media only screen and (max-width: 520px) {
        font-size: 14px;
        height: 420px;
    };
`

function Footer() {
    return (
        <FooterStyle>
            <FooterContents>
                <HomeLogo src={logo_dark} alt='Logo sombre du site Kasa dans le footer' />
                <TextContent>© 2020 Kasa. All rights reserved</TextContent>
            </FooterContents>
        </FooterStyle>
    )
}

export default Footer