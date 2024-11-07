import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
*{
    font-family: Roboto, sans-serif;
    color: ${colors.salmon};
    margin: 0;
    padding: 0;
    text-decoration: none;

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
}

body{ 
    background-color: ${colors.offwhite};
}
`;

export const MainContainer = styled.div`
    padding-top: 60px;
    padding-bottom: 120px;
`;

export const media = {
    desktop: '1024px',
    tablet: '768px'
}
