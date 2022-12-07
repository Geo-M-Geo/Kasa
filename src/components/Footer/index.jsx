import logo_dark from '../../assets/logo_dark.png'
import styled from 'styled-components'


// CSS of the footer component

const FooterContainer = styled.div`
  position: relative;
`
const FooterStyle = styled.div `
    height: 209px;
    width: 100%;
    background: #000000;
    display: flex;
    justify-content: center;
    margin-top: auto;
`
const FooterContents = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100px;
`

const HomeLogo = styled.img `
    height: 40px;
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

// Footer component
function Footer() {
    return (
        <FooterContainer>
            <FooterStyle>
                {/* The Footer component containt 2 elements, a log and a text */}
                <FooterContents>
                    <HomeLogo src={logo_dark} alt='Logo sombre du site Kasa dans le footer' />
                    <TextContent>© 2020 Kasa. All rights reserved</TextContent>
                </FooterContents>
            </FooterStyle>
        </FooterContainer>
    )
}

export default Footer