import styled from "styled-components";
import {media} from "../../GlobalStyle.ts";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
    column-gap: 96px;

    @media (max-width: ${media.desktop}) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;
