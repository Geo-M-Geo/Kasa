import { appartements } from '../../datas/appartements'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

// CSS about the AllCards component 
const AppartementContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    margin: 43px 100px 60px 100px;
    max-width: 100%;
    border-radius: 25px;
    background-color: ${colors.secondary};
    list-style:none;
    padding: inherit;
    @media only screen and (max-width: 1024px) {
        margin: 30px 50px 40px 50px;
    };

    @media only screen and (max-width: 810px) {
        flex-direction: column;
        align-items: center;
        padding-bottom: 30px;
    };

    @media only screen and (max-width: 750px) {
        margin: 20px 20px 20px 20px;
        border-radius: 10px;
    };

    @media only screen and (min-width: 1455px) {
        max-width: 1239px;
        margin: auto;
        margin-bottom: 40px;
    };
`

const PictureContainer = styled.li`
    position: relative;
    border-radius: 10px;
    padding: 56px 0 56px 0;
    width: 340px;
    height: 340px;
    
    @media only screen and (max-width: 810px) {
            width: 90%;
            display:flex;
            justify-content: center;
            padding: 40px 0 0 0;
    };
    @media only screen and (max-width: 810px) {
        height: 90%;  
    };

    @media only screen and (max-width: 500px) {
        padding: 20px 0 0 0; 
    };
`

const AppartementTitle = styled.p`
    position: absolute;
    color: ${colors.primary};
    overflow-wrap: break-word;
    max-width: 300px;   
    bottom: 70px;
    left: 30px;
    font-size: 18px;

    @media only screen and (max-width: 810px) {
        bottom: 20px;
};
`

const AppartementPicture = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    @media only screen and (max-width: 810px) {
        width: 100%;
    };
`


// This component display all the cards using the map function 
function DisplayCards() {
    return (
            <AppartementContainer>
                {appartements.map(({ id, title, cover }) => 
                    <PictureContainer key={id}>
                        <AppartementTitle>{title}</AppartementTitle>
                        <AppartementPicture src={cover} alt="Cover photo" />
                    </PictureContainer>
                )}
            </AppartementContainer>
    )

}

export default DisplayCards