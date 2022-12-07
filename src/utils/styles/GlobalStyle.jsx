import { createGlobalStyle } from "styled-components"

// Style for all the page 
const StyledGlobalStyle = createGlobalStyle`
    body{
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        height: 100%;
    };

`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle