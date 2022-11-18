import { appartements } from '../../datas/appartements'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const AppartementsContainer = styled.div`
    margin: 40px 100px 0 100px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 25px;
    // padding: 50px: 0 50px 0;
    background-color: ${colors.secondary}
`
const AppartementTitle = styled.p`
    position: absolute;
    color: ${colors.quaternary}
`
const PictureContainer = styled.div`
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
            {appartements.map(({ id, title, cover }) => 
                <PictureContainer key={id}>
                    <AppartementTitle>{title}</AppartementTitle>
                    <AppartementPicture src={cover} alt="Cover phot" />
                </PictureContainer>
            )}
        </AppartementsContainer>

    )

}

export default DisplayCards