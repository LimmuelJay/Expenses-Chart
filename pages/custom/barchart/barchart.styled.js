import { styled } from "styled-components";

const BarChartStyled = styled.div`
    .ant-btn-default {
        background-color: ${props => props.color} !important;
        width: 42px;
        height: ${props => props.height};

        @media screen and (max-width: 425px) {
            width: 37px;
        }

        @media screen and (max-width: 320px) {
            width: 32px;
        }
    }

    .ant-btn-default:hover {
        background-color: ${props => props.color} !important
    }

    .days {
        text-align: center;
        color: hsl(28, 10%, 53%);
    }

    .expenses {
        color: white;
        font-weight: 500;
        margin: 0;
    }
`

export default BarChartStyled;