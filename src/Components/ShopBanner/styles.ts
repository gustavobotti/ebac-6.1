import styled from "styled-components";

export const Banner = styled.div`
    width: 100%;
    height: 280px;
    background-position: center;
    background-size: cover;
    position: relative;

    .overlay {
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 1;
        opacity: 0.5;
    }

    .container {
        z-index: 2;
        height: 100%;

        h2 {
            position: absolute;
            bottom: 32px;
            color: #fff;
            font-size: 32px;
            font-weight: 900;
            line-height: 37.5px;
        }
        p {
            position: absolute;
            top: 25px;
            color: #fff;
            font-size: 32px;
            font-weight: 100;
            line-height: 37.5px;
        }

        @media (max-width: 1200px) {
            h2, p {
                margin-left: 20px;
            }
        }
    }
`;
