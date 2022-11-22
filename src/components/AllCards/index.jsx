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
    background-color: ${colors.secondary}
`
const AppartementTitle = styled.p`
    position: absolute;
    color: ${colors.primary}
    overflow-wrap: break-word;
    max-width: 300px;   
    
`
const PictureContainer = styled.li`
    border-radius: 10px;
    padding:56px 0 56px 0;
    width: 340px;
    height: 340px
`
const AppartementPicture = styled.img`
    // position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
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