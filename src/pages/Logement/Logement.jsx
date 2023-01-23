import { useParams } from 'react-router-dom';
import  {appartements}  from '../../datas/appartements'
import Carousel from '../../components/ImageCarousel/Carousel'
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import Erreur from '../Erreur/Erreur';
import '../../pages/Logement/Logement.scss'

// Function that display all the logement page, it include 3 component and the error page.
function Logement() {
// The useParams const take the id in the url and save it in the const
const { id } = useParams(0);
/* The items const go through the appartement's data file and with the find 
    fonction make an array with the datas of the file with the same id as the param */
const items = appartements.find((item) => item.id === id);
// This condition check if there is an item is found other way it send the user to the error page.
if (!items) {return <Erreur />}
// ItemEquipement go through the equipement's array to display it into a list
const ItemEquipement = items.equipments.map((equipment, index) => {
  return <li key={index}>{equipment}</li>
})

/* The logement function return the carousel of image with the props, 
   the title, the location, a list of tags, the host's name and picture, the description and equipement list */
  return (
    <div className='logement'>
      {/* The Carousel component is called and its given in the props the items from the data to display it */}
    <Carousel pictures={items.pictures}/>
      <div className='logement-main' >
        <div className='logement-main__container' >
          <div className='logement-main__container__infos' >
              <h3 className='logement-main__container__infos__title'>{items.title}</h3>
              <p className='logement-main__container__infos__location'>{items.location}</p>
              <ul className='logement-main__container__infos__tags'>
                {items.tags.map((tags, index) => {
                  return (
                    <li key={index}>{tags}</li>
                  )
                })}
              </ul>
          </div>
          <div className='logement-main__container__host' >
            <div className='logement-main__container__host__info'>
                <p className='logement-main__container__host__info__name' >{items.host.name}</p>
                <img className='logement-main__container__host__info__picture' alt="Propriétaire de l'appartement" src={items.host.picture} />
            </div>
            {/* The rating component is called and its given the items from the data to display it */}
            <Rating id="rating" rating={items.rating} />
          </div>
        </div>
        {/* The collapses component is called and its given the items from the data to display it */}
        <div className='logement-main__collapse '> 
          <div className='logement-main__collapse__element' >
            <Collapse  title='Descritpion' description={items.description} />
          </div>
          <div className='logement-main__collapse__element' >
            <Collapse  title='Equipements' description={ItemEquipement} />  
          </div>              
        </div>
      </div> 
    </div>
  )
}

export default Logement;
