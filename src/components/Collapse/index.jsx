import { useState } from 'react'
import vectorDown from '../../assets/vector_down.png'
import vectorUp from '../../assets/vector_up.png'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const CollapseContainer = styled.div`
    display: flex; 
    flex-direction: row;
    margin: auto;
    width:1023px;
    margin-top: 31px;
`

const CollapseButton = styled.button`
    background-color: ${colors.tertiary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 0;
    width: 100%;
    // padding: auto 18px auto 18px;
    border-radius: 5px;
    height: 47px;
`

const TitleCollapse = styled.h3`
    color: ${colors.primary};
    font-weight: normal;
    font-size: 24px;
    padding-left: 18px;
`

const DescriptionOfCollapse = styled.p`
    max-width: 1023px;
    background-color: ${colors.secondary};
    margin: 0;
    color: ${colors.tertiary};
    font-size: 24px;
    border-radius: 5px;
    padding: 36px 27px 19px 18px;
`

const Vector = styled.img`
    color: ${colors.quaternary}
    justify-content: center;
    padding-right: 18px;
`

const CollapseOpenContainer = styled.div`
    flex-direction: column;
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
            <CollapseOpenContainer>
                <CollapseButton onClick={() => setIsOpen(true)}>
                    <TitleCollapse>{title}</TitleCollapse>
                    <Vector src={vectorUp} />
                </CollapseButton>
                <DescriptionOfCollapse>
                    {description}
                </DescriptionOfCollapse>            
            </CollapseOpenContainer>
        </CollapseContainer>
    )
}

export default Collapse