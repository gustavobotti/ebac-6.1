import styled from "styled-components";
import {media} from "../../GlobalStyle.ts";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 30px;
    column-gap: 30px;
    margin: 56px 0px 150px;

    @media (max-width: ${media.desktop}) {
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        margin-bottom: 125px;
        column-gap: 0px;
    }

    @media (max-width: ${media.tablet}) {
        grid-template-columns: 1fr;
        justify-items: center;
        margin-bottom: 100px;
        column-gap: 0px;
    }
`;
