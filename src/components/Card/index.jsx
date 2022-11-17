import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const CardImage = styled.img`
    border-radius: 10px;
    position: absolute;
`
const CardTitle = styled.h2`
  position: relative;
  font-size: 18px;
  color: ${colors.primary};
`

function Card({ title, picture }) {
  
    return (
        <CardImage src={picture} alt="Photo de couverture de l'appartement">
            <CardTitle>{title}</CardTitle>
        </CardImage>
    )
  }
  
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }
  
  Card.defaultProps = {
    title: '',
    picture: '',
  }
  
  export default Card


  