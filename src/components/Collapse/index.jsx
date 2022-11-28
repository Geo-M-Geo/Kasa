import { useState } from 'react'
import vectorDown from '../../assets/vector_down.png'
import vectorUp from '../../assets/vector_up.png'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import PropTypes from 'prop-types'

const CollapseButton = styled.button`
    background-color: ${colors.tertiary};
    display: flex;
    flex-direction: raw;
    justify-content: space-between;
`

const TitleCollapse = styled.h3`
    color: ${colors.primary};
`

const DescriptionOfCollapse = styled.p`
    max-width: 1023px;
`

const Vector = styled.img`
    color: ${colors.quaternary}
`

function Collapse({title, description}) {

    // const { title, description } = props
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div>
            <CollapseButton onClick={() => setIsOpen(false)}>
                <TitleCollapse>{title}</TitleCollapse>
                <Vector>{vectorDown}</Vector>
            </CollapseButton>
        </div>
    ) : (
        <div>
        <button onClick={() => setIsOpen(true)}>
        <TitleCollapse>{title}</TitleCollapse>
        {/* <Vector>{vectorUp}</Vector> */}
        </button>
        <DescriptionOfCollapse>
            {description}
        </DescriptionOfCollapse>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }
  
  Collapse.defaultProps = {
    title: '',
    description: '',
  }

export default Collapse