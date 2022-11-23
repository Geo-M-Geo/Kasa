import { Link } from 'react-router-dom'
import logo_desktop from '../../assets/logo_desktop.png'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const HomeContainer = styled.nav`
    display: flex;
    flex-direction: raw;
    justify-content: space-between;
    padding: 40px 100px 0 100px;
    align-items: center;
    margin: auto;
    max-width: 1240px;
    @media only screen and (max-width: 1024px) {
        padding: 20px 50px 0 50px;
    };
    @media only screen and (max-width: 750px) {
        padding: 20px 20px 0 20px;
    };
`

const HomeLogo = styled.img `
@media only screen and (max-width: 750px) {
    max-width: 100%;
    height: auto;
};
`
const LinkContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 520px) {
        text-transform: uppercase;
        margin-left: 50px;
        padding-left: 0px;
    };
`

const LinksStyle = styled(Link)`
    color: ${colors.tertiary};
    font-size: 20px;
    text-decoration: none;
    :hover {
        text-decoration: underline;
    };
    
    @media only screen and (max-width: 520px) {
        font-size: 12px;
        font-weight: 500;
    };
`


function Header() {
    return (
        <HomeContainer>
            <Link to="/">
                <HomeLogo src={logo_desktop} alt='Logo du site Kasa dans le header'/>
            </Link>
            <LinkContainer>
                    <LinksStyle to="/">Accueil</LinksStyle>
                    <LinksStyle to="/A-Propos">A Propos</LinksStyle>
            </LinkContainer>
        </HomeContainer>
    )
}

export default Header