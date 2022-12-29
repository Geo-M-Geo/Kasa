import { useParams } from 'react-router-dom';
import  {appartements}  from '../../datas/appartements'
import Carousel from '../../components/ImageCarousel/Carousel'
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import Erreur from '../Erreur/Erreur';

// Function that display all the logement page, it include 3 component and the error page.
function Logement() {
// The useParams const take the id in the url and save it in the const
const { id } = useParams(0);
/* The items const go through the appartement's data file 
   and with the find fonction make items un array with the same id as the param */
const items = appartements.find((item) => item.id === id);
// This condition check if there is a items's match other way it send the user to the error page
if (!items) {return <Erreur />}
// ItemEquipement go through the equipement's array to display it into a list
const ItemEquipement = items.equipments.map((equipment, index) => {
  return <li key={index}>{equipment}</li>
})

/* The logement function return the carousel of image with the props, 
   the title, the location, a list of tags, the host's name and picture, the description and equipement list */
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
