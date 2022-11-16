import { createGlobalStyle } from "styled-components"
import colors from '../styles/colors'

const StyledGlobalStyle = createGlobalStyle`
    *{
        font-family: 'Montserrat', sans-serif;
        background-color: ${colors.secondary};
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle