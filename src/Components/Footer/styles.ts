import styled from "styled-components";
import { colors } from "../../colors";
import {media} from "../../GlobalStyle.ts";

export const Container = styled.footer`
    background-color: ${colors.pastel};
    text-align: center;
    padding: 40px;

    p {
        width: 44%;
        font-size: 10px;
        line-height: 12px;
        margin: 104px auto 0;
        font-weight: 400;

        @media (max-width: ${media.desktop}) {
            margin-top: 78px;
        }

        @media (max-width: ${media.tablet}) {
            margin-top: 52px;
        }
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 32px;
`;
