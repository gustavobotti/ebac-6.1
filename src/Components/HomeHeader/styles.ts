import styled from "styled-components";
import {media} from "../../GlobalStyle.ts";

export const HeaderContainer = styled.header`
    div {
        align-items: center;
        text-align: center;
        height: 384px;

        @media (max-width: ${media.desktop}) {
            height: 356px;
        }

        @media (max-width: ${media.tablet}) {
            height: 328px;
        }
    }

    h3 {
        font-weight: 900;
        line-height: 42.2px;
        font-size: 36px;
        text-align: center;
        margin-top: 138px;

        @media (max-width: ${media.desktop}) {
            margin-top: 110px;
            font-size: 34px;
        }

        @media (max-width: ${media.tablet}) {
            margin-top: 68px;
            font-size: 32px;
        }
    }
`;

export const Logo = styled.img`
    width: 125px;
    margin-top: 40px;
`;