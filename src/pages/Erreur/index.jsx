import Error from '../../assets/404_Error.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


// CSS of the error page
const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    flex-grow: 1;
    position: relative;
`

const ErrorImage = styled.img`
    width: 597px;
    margin: auto;
`

const ErrorTitle = styled.h3`
margin: auto;
`

const ErrorLink = styled(Link)`
margin: auto;
`


// Error page that containt and image, a title and a link to go back to the home page
function Erreur() {
    return ( 
        <ErrorContainer>
            <ErrorImage src={Error} />
            <ErrorTitle>Oups! La page que vous <span>demandez n'existe pas.</span></ErrorTitle>
            <ErrorLink to="/">Retournez sur la page d'accueil</ErrorLink>
        </ErrorContainer>
    )
}

export default Erreur