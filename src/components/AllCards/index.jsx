import { appartements } from '../../datas/appartements'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const AppartementsContainer = styled.ul`
    padding: inherit;
    display:flex;
    justify-content: center;
    `

    const Cards = styled.div`
    width: 1240px;
    margin: 0 100px 40px 100px;
    padding: inherit;
    list-style:none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 25px;
    background-color: ${colors.secondary};
    
    @media only screen and (max-width: 895px) {
        background-color: ${colors.primary};
        flex-wrap: nowrap;
        flex-direction: column;
    };
`
const AppartementTitle = styled.p`
    position: absolute;
    color: ${colors.primary};
    overflow-wrap: break-word;
    max-width: 300px;   
    bottom: 30px;
    left: 30px;
    font-size: 18px;

    @media only screen and (max-width: 395px) {
        font-size: 15px;
    };
`
const PictureContainer = styled.li`
    position: relative;
    border-radius: 10px;
    padding: 56px 0 56px 0;
    width: 340px;
    height: 340px;

    @media only screen and (max-width: 600px) {
        padding: 0 20px 20px 20px;
    };
    
    @media only screen and (max-width: 395px) {
        padding: 0 20px 20px 20px;
        height: 255px;
        max-width: 100%;
    };
`
const AppartementPicture = styled.img`
    // position: relative;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    
    @media only screen and (max-width: 395px) {
        max-height: 255px;
        width:100%;
    };
`


function DisplayCards() {
    return (
        <AppartementsContainer>
            <Cards>
                {appartements.map(({ id, title, cover }) => 
                    <PictureContainer key={id}>
                        <AppartementTitle>{title}</AppartementTitle>
                        <AppartementPicture src={cover} alt="Cover phot" />
                    </PictureContainer>
                )}
            </Cards>
        </AppartementsContainer>

    )

}

export default DisplayCards