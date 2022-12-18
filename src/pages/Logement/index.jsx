// import { useParams } from 'react-router-dom';
// import { appartements } from '../../datas/appartements'
import Carousel from '../../components/ImageCarousel/Carousel'
import Collapse from '../../components/Collapse/Collapse';
// import LogementInfos from '../../components/LogementInfos/LogementInfos'

function Logement() {

    return ( 
        <div>
            <Carousel />
            {/* <LogementInfos id={id} /> */}
            {/* <Collapse /> */}
        </div>
    )
}

export default Logement