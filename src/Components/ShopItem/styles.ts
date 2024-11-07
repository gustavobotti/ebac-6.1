import styled from "styled-components";
import { colors } from "../../colors";
import {media} from "../../GlobalStyle.ts";

export const Card = styled.div`
    padding: 8px;
    background-color: ${colors.salmon};

    * {
        color: ${colors.pastel};
    }

    img {
        width: 100%;
        height: 167px;
    }

    @media (max-width: ${media.desktop}) {
        max-width: 320px;
    }
`;

export const Container = styled.div`
    margin-top: 4px;
    gap: 8px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    font-size: 16px;
    font-weight: 900;
    line-height: 18.75px;
`;

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`;

export const Button = styled.button`
    cursor: pointer;
    border: none;
    font-size: 14px;
    font-weight: 700;
    background-color: ${colors.pastel};
    color: ${colors.salmon};
    padding: 6px 12px;
`;
