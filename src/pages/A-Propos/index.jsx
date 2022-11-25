import AProposBanner from "../../components/Banners/AProposBanner"
import Collapse from "../../components/Collapse"

const Fiabilité = 'Fiabilité'
const DescriptionCollapse = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
function APropos() {
    return ( 
        <div>
            <AProposBanner />
            <Collapse({Fiabilité}, {Fiabilité}) />
        </div>
    )
}

export default APropos