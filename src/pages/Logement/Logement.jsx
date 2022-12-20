import { useParams } from 'react-router-dom';
import  {appartements}  from '../../datas/appartements'
import Carousel from '../../components/ImageCarousel/Carousel'
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
// import LogementInfos from '../../components/LogementInfos/LogementInfos'

function Logement() {
const { id } = useParams();
const appartement = appartements.map((appartement) => appartement.id === {id});
// console.log(appartement)
const { title, pictures, description, host, rating, location, equipements, tags } = appartement;
console.log(title)
    return ( 
        <div>
                    <div>
                        <div>

                            <h3>{title}</h3>
                            <p>{location}</p>
                            {/* {tags.map((tag, index) =>
                            <p key={index}>{tag}</p>
                            )} */}
                        </div>
                        {/* <div>
                            <div>
                                <p>{host.name}</p>
                                <img alt="Propriétaire de l'appartement">{host.picture}</img>
                            </div>
                            <Rating rating={rating} />
                        </div> */}
                        {/* <div className='logement-container'>               
                        <Collapse title='Descritpion' description={description} className='logement-container-collapse' />
                        <Collapse title='Equipements' equipement={equipements} className='logement-container-collapse' />
                        </div> */}
                    </div>      

        </div>
    )
}

export default Logement