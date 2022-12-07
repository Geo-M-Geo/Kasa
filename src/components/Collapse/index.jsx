import { useState } from 'react'
import vectorDown from '../../assets/vector_down.png'
import vectorUp from '../../assets/vector_up.png'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const CollapseContainer = styled.div`
    display: flex; 
    flex-direction: row;
    margin: auto;
    max-width:1023px;
    margin-top: 31px;
    // padding: 0 100px 0 100px;
    margin-bottom:  30px;
    @media only screen and (max-width: 1024px) {
        padding: 0 50px 0 50px;
    };
    @media only screen and (max-width: 750px) {
        padding: 0 20px 0 20px;
        margin-top: 20px;
    };   
`

const CollapseButton = styled.button`
    background-color: ${colors.tertiary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 0;
    width: 100%;
    border-radius: 5px;
    height: 47px;

    @media only screen and (max-width: 520px) {
        height: 30px;
    };
`

const TitleCollapse = styled.h3`
    color: ${colors.primary};
    font-weight: normal;
    font-size: 24px;
    padding-left: 18px;

    @media only screen and (max-width: 750px) {
        font-size: 16px;
    };

    @media only screen and (max-width: 520px) {
        font-size: 14px;
    };
`

const DescriptionOfCollapse = styled.p`
    max-width: 1023px;
    background-color: ${colors.secondary};
    margin: 0;
    color: ${colors.tertiary};
    font-size: 24px;
    border-radius: 5px;
    padding: 36px 27px 19px 18px;  

    @media only screen and (max-width: 750px) {
        font-size: 18px;
        padding: 25px 27px 28px 18px; 
    };

    @media only screen and (max-width: 520px) {
        font-size: 14px;
        padding: 15px 27px 36px 18px; 
    };
`

const Vector = styled.img`
    color: ${colors.quaternary}
    justify-content: center;
    padding-right: 18px;

    @media only screen and (max-width: 750px) {
        height: 12px;
        width: 16px;
    };
`

const CollapseOpenContainer = styled.div`
    flex-direction: column;
`
// The collapse compoenent contain a ternaire condition that display just a bar with a titel and an image or if the user click on it open a text with it.
function Collapse({title, description}) {

    // UseState that keep the actual state then give a fonction to change it. Its set on true
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <CollapseContainer>
            {/* If the user click on the bar it set the usestate on false  */}
            <CollapseButton onClick={() => setIsOpen(false)}> 
                <TitleCollapse>{title}</TitleCollapse>
                <Vector src={vectorDown} />
            </CollapseButton>
        </CollapseContainer>
    ) : (
        <CollapseContainer>
            <CollapseOpenContainer>
            {/* If the user click on the bar it set the usestate on true so the text is display  */}
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