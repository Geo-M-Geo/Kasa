import { useState } from 'react'
import vectorDown from '../../assets/vector_down.png'
import vectorUp from '../../assets/vector_up.png'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const CollapseButton = styled.button`
    background-color: ${colors.tertiary};
    display: flex;
    flex-direction: raw;
    justify-content: space-between;
`

const TitleCollapse = styled.h3`
    color: ${colors.primary};
`

function Collapse(titleCollapse, DescriptionCollapse) {

    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div>
            <CollapseButton onClick={() => setIsOpen(false)}>
                <TitleCollapse>{titleCollapse}</TitleCollapse>
                {vectorDown}
            </CollapseButton>
        </div>
    ) : (
        <div>
        <button onClick={() => setIsOpen(true)}>
            <h3>{titleCollapse}</h3>
                {vectorUp}
        </button>
        <p>
            {DescriptionCollapse}
        </p>
        </div>
    )
}

export default Collapse