// import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

// CSS of the Cards component
const CardImage = styled.img`
    border-radius: 10px;
    position: absolute;
`
const CardTitle = styled.h2`
  position: relative;
  font-size: 18px;
  color: ${colors.primary};
`
// Component that display one card, the picture and the title of the card
function Card({ title, picture }) {
  
    return (
        <CardImage src={picture} alt="Photo de couverture de l'appartement">
            <CardTitle>{title}</CardTitle>
        </CardImage>
    )
  }
export default Card;


  