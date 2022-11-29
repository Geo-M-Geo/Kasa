import { useState } from 'react'
import vectorDown from '../../assets/vector_down.png'
import vectorUp from '../../assets/vector_up.png'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const CollapseContainer = styled.div`
    display: flex; 
    flex-direction: row;
    // align-items: center;
    margin: auto;
    background-color: ${colors.tertiary};
    width:1023px;
`

const CollapseButton = styled.button`
    background-color: ${colors.tertiary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: auto 18px auto 18px;
`

const TitleCollapse = styled.h3`
    color: ${colors.primary};
    font-weight: normal;
`

const DescriptionOfCollapse = styled.p`
    max-width: 1023px;
`

const Vector = styled.img`
    color: ${colors.quaternary}
    align-items: center;
`

const CollapseTextContainer = styled.div`

`

function Collapse({title, description}) {

    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <CollapseContainer>
            <CollapseButton onClick={() => setIsOpen(false)}>
                <TitleCollapse>{title}</TitleCollapse>
                <Vector src={vectorDown} />
            </CollapseButton>
        </CollapseContainer>
    ) : (
        <CollapseContainer>
        
        <CollapseTextContainer>
        <button onClick={() => setIsOpen(true)}>
        <TitleCollapse>{title}</TitleCollapse>
        <Vector src={vectorUp} />
        </button>
        <DescriptionOfCollapse>
        {description}
        </DescriptionOfCollapse>
        </CollapseTextContainer>
        </CollapseContainer>
    )
}

export default Collapse