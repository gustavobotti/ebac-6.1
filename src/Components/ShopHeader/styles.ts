import styled from "styled-components";
import {media} from "../../GlobalStyle.ts";

export const Container = styled.header`
    div {    
        padding-top: 64px;
        padding-bottom: 96px;
        padding-left: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        @media (max-width: ${media.desktop}) {
            padding-top: 38px;
            padding-bottom: 70px;
        }

        span {
            font-size: 18px;
            font-weight: 900;
            cursor: pointer;
        }
        
        @media (max-width: ${media.desktop}) {
            flex-direction: column;
            padding-left: 0;
        }
    }
`;

export const Logo = styled.img`
    width: 125px;

    @media (max-width: ${media.desktop}) {
        margin: 42px;
    }
`;