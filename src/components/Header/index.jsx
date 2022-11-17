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
`

const HomeLogo = styled.img `
    // height: 68px;
`
const LinkContainer = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
`

const LinksStyle = styled(Link)`
    color: ${colors.tertiary};
    font-size: 20px;
    text-decoration: none;
    :hover {
        text-decoration: underline;
      }
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