import { useParams } from 'react-router-dom';
import  {appartements}  from '../../datas/appartements'
import Carousel from '../../components/ImageCarousel/Carousel'
import Collapse from '../../components/Collapse/Collapse';
// import LogementInfos from '../../components/LogementInfos/LogementInfos'

function Logement() {
const { ID } = useParams();
const appartement = appartements.map((appartement) => appartement.id === ID);
const { title, pictures, description, host, rating, location, equipements, tags } = appartement;
    return ( 
        <div>
            {/* <Carousel pictures={pictures} /> */}
                <div>
                    <h3>{title}</h3>
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
                    {/* <img alt='etoiles'>je conseillerai de créer un composant rating auquel tu passe le rating en prop.  */}
{/* A l'intérieur tu importes l'étoile en svg et peux créer un tableau intermédiaire dans lequel tu stocke l'état de tes étoiles ( de taille 5 du coup ). Une fois que c'est fait, tu as un tableau sur lequel tu peux utiliser la fonction map().</img> */}

                </div>
            <div className='logement-container'>
                
            <Collapse title='Descritpion' description={description} className='logement-container-collapse' />
            <Collapse title='Equipements' equipement={equipements} className='logement-container-collapse' />
            </div>
        </div>
    )
}

export default Logement