import AProposBanner from "../../components/Banners/A-propos-banner/AProposBanner"
import Collapse from '../../components/Collapse/Collapse'
import"../A-Propos/A-propos.scss";
import  { infos }  from '../../datas/infos';

/* A propos page. It contain a banner and a number of collapse that will depends on how many items there is to
     diplay into the data file. The info to display are given into the props. */
function APropos() {

    return ( 
        <div>
            {/* Call of the A propos banner */}
            <AProposBanner />
            <div className="collapses-container" >
                {/* A map list is use to go though the Infos Json data file and each Collapse component is given all the props to display what is inside */}
                {infos.map((info, index) => {
                    return (
                        <Collapse key={index} title={info.title} description={info.description} />
                    )
                })}
            </div>
        </div>
    )
}
export default APropos
