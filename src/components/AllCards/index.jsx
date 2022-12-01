import { appartements } from '../../datas/appartements'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

// const AppartementsContainer = styled.ul`
//     padding: inherit;
//     width: 1240px;
//     margin: 0 100px 40px 100px;
//     padding: inherit;
//     list-style:none;
//     display: flex;
//     align-items: center;
//     flex-wrap: wrap;
//     justify-content: space-around;
//     border-radius: 25px;
//     background-color: ${colors.secondary};
//     `

//     const Cards = styled.div`
//     width: 1240px;
//     margin: 0 100px 40px 100px;
//     padding: inherit;
//     list-style:none;
//     // display: flex;
//     // align-items: center;
//     // flex-wrap: wrap;
//     justify-content: space-around;
//     border-radius: 25px;
//     background-color: ${colors.secondary};
    
//     @media only screen and (max-width: 1025px) {
//         margin: 0 50px 20px 50px;
//     };

//     @media only screen and (max-width: 895px) {
//         background-color: ${colors.primary};
//         // // flex-wrap: nowrap;
//         // flex-direction: column;
//         justify-content: between;
//         // width: 150%;
//     };

//     @media only screen and (max-width: 800px) {
//             width: 100%;
//         };
// `
// const AppartementTitle = styled.p`
//     position: absolute;
//     color: ${colors.primary};
//     overflow-wrap: break-word;
//     max-width: 300px;   
//     bottom: 70px;
//     left: 30px;
//     font-size: 18px;

//     @media only screen and (max-width: 600px) {
//         bottom: 30px;
//     };


//     @media only screen and (max-width: 395px) {
//         font-size: 15px;
//     };
// `
// const PictureContainer = styled.li`
//     position: relative;
//     border-radius: 10px;
//     padding: 56px 0 56px 0;
//     // width: 340px;
//     height: 340px;

//     @media only screen and (max-width: 600px) {
//         padding: 0 20px 20px 20px;
//     };
    
//     @media only screen and (max-width: 395px) {
//         padding: 0 20px 20px 20px;
//         height: 255px;
//         max-width: 100%;
//     };
//     @media only screen and (max-width: 800px) {
//         width: 100%;
//     };

//     @media only screen and (max-width: 1234px) {
//         max-width: 20%;
//     };

    
// `
// const AppartementPicture = styled.img`
//     // position: relative;
//     max-width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 10px;
    
//     @media only screen and (max-width: 800px) {
//         width: 100%;
//     };

//     @media only screen and (max-width: 395px) {
//         max-height: 255px;
//         width:100%;
//     };
//     // @media only screen and (max-width: 1234px) {
//     //     width: 40%;
//     // };
// `
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



function DisplayCards() {
    return (
            <AppartementContainer>
                {appartements.map(({ id, title, cover }) => 
                    <PictureContainer key={id}>
                        <AppartementTitle>{title}</AppartementTitle>
                        <AppartementPicture src={cover} alt="Cover phot" />
                    </PictureContainer>
                )}
            </AppartementContainer>


    )

}

export default DisplayCards