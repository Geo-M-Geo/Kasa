import { useParams } from 'react-router-dom';
import  {appartements}  from '../../datas/appartements'
import Carousel from '../../components/ImageCarousel/Carousel'
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import Erreur from '../Erreur/Erreur';
import styled from 'styled-components';
// import LogementInfos from '../../components/LogementInfos/LogementInfos'
const Divo = styled.h3`
    background-color: black;
`

function Logement() {
const {id} = useParams(1);
console.log({id})
const items = appartements.filter((item) => item.id === {id})
// const parsedItem = parseInt(items)
console.log(items)

    return ( 
        <div>
            
            {items.map(({ id, title, pictures, description, host, rating, location, equipements, tags}) => 
                <Divo key={id}>
                    <h3>{title}</h3>
                    console.log({title})
                </Divo>
            )}
        </div>
    )
}

export default Logement;
























            {/* console.log({appart.title})

                            <h3>{appart.title}</h3>
                            <p>{location}</p>
                            {tags.map((tag, index) =>
                            <p key={index}>{tag}</p>
                            )}
                        </div>
                        <div>
                            <div>
                                <p>{host.name}</p>
                                <img alt="Propriétaire de l'appartement">{host.picture}</img>
                            </div>
                            <Rating rating={rating} />
                        </div>
                        <div className='logement-container'>               
                        <Collapse title='Descritpion' description={description} className='logement-container-collapse' />
                        <Collapse title='Equipements' equipement={equipements} className='logement-container-collapse' />
                        </div>
                    </div>       */}
