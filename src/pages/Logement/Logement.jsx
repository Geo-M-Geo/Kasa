import { useParams } from 'react-router-dom';
import  {appartements}  from '../../datas/appartements'
import Carousel from '../../components/ImageCarousel/Carousel'
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import Erreur from '../Erreur/Erreur';
import styled from 'styled-components';


function Logement() {
const { id } = useParams(0);
const items = appartements.find((item) => item.id === id);
console.log(items)
if (!items) {return <Erreur />}

const ItemEquipement = items.equipments.map((equipment, index) => {
  return <li key={index}>{equipment}</li>
})



return (
  <div>
    <Carousel pictures={items.pictures}/>
    <div>
        <h3>{items.title}</h3>
        <p>{items.location}</p>
        <ul>
          {items.tags.map((tags, index) => {
            return (
                <li key={index}>{tags}</li>
            )
          })}
        </ul>
    </div>
  <div>
    <div>
        <p>{items.host.name}</p>
        <img alt="Propriétaire de l'appartement" src={items.host.picture} />
    </div>
    <Rating rating={items.rating} />
  </div>
  <div className='logement-container'>               
    <Collapse title='Descritpion' description={items.description} className='logement-container-collapse' />
    <Collapse title='Equipements' description={ItemEquipement} className='logement-container-collapse'/>
  </div>
</div> 

)

}

export default Logement;





















{/* <Divo>
{appartements.filter(item => item.id === {id}).map(({ index, id, title, pictures, description, host, rating, location, equipements, tags}) => (
  <div key={index}>
    {title};
  </div>
))}
</Divo> */}



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
