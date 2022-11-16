import { Link } from 'react-router-dom'
import logo_desktop from '../../assets/logo_desktop.png'
import styled from 'styled-components'

const HomeContainer = styled.nav`
    display: flex;
    flex-direction: raw;
    justify-content: space-between;
    padding: 40px 100px 0 100px;
`

const HomeLogo = styled.img `
    // height: 68px;
`
 
function Header() {
    return (
        <HomeContainer>
            <Link to="/">
                <HomeLogo src={logo_desktop} alt='Logo du site Kasa dans le header'/>
            </Link>
            <div>
                    <Link to="/">Accueil</Link>
                    <Link to="/A-Propos">A Propos</Link>
            </div>
        </HomeContainer>
    )
}

export default Header