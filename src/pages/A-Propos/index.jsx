import AProposBanner from "../../components/Banners/AProposBanner"
import Collapse from '../../components/Collapse'
import styled from 'styled-components'

// A propos page. It contain a banner and 4 collapses container with informations about the websits in the props.

const Container = styled.div`
    margin: 43px 100px 60px 100px;
    @media only screen and (max-width: 750px) {
        font-size: 16px;
        height: 500px;
    };

    @media only screen and (max-width: 520px) {
        font-size: 14px;
    };
`
function APropos() {
    return ( 
        <div>
            <AProposBanner />
            <Container >
                {/* Each Collapse component is given all the props to display */}
            <Collapse title='Fiabilité' description='Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'/>
            <Collapse title='Respect' description='La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
            <Collapse title='Service' description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                N'hésitez pas à nous contacter si vous avez la moindre question." />
            <Collapse title='Sécurité' description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, 
                cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </Container>
        </div>
    )
}

export default APropos