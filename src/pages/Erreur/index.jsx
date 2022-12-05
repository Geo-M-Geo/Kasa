import Error from '../../assets/404_Error.png'
import styled from 'styled-components'


const ErrorContainer = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
`

const ErrorImage = styled.img`
    width: 597px;
`

const ErrorTitle = styled.h3`

`

const ErrorLink = styled.a`

`
function Erreur() {
    return ( 
        <ErrorContainer>
            <ErrorImage src={Error} />
            <ErrorTitle>Oups! La page que vous <span>demandez n'existe pas.</span></ErrorTitle>
            <ErrorLink>Retournez sur la page d'accueil</ErrorLink>

        </ErrorContainer>
    )
}

export default Erreur