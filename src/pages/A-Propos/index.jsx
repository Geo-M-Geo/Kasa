import AProposBanner from "../../components/Banners/AProposBanner"
import { AProposData} from '../../datas/APropos.js'
import Collapse from '../../components/Collapse'

function APropos() {
    return ( 
        <div>
            <AProposBanner />
            {AProposData.map(({ id, title, description }) => 
                    <Collapse key={id}
                        title={title}
                        descritopn={description}
                    />
                )}
        </div>
    )
}

export default APropos