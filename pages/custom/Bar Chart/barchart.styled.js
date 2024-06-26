import { styled } from "styled-components";

const BarChartStyled = styled.div`
    .ant-btn-default {
        background-color: ${props => (props.bgColor ? props.bgColor : 'hsl(10, 79%, 65%)')};
        width: 42px;
        height: ${props => (props.height ? props.height : 'auto')};

        @media screen and (max-width: 425px) {
            width: 37px;
        }

        @media screen and (max-width: 320px) {
            width: 32px;
        }
    }

    .ant-btn-default:hover {
        background-color: ${props=> (props.bgColorHover ? props.bgColorHover : 'hsl(10, 79%, 65%)')} !important;
    }

    .days {
        text-align: center;
        color: hsl(28, 10%, 53%);
    }

    .money {
        color: white;
        font-weight: 500;
        margin: 0;
    }
`

export default BarChartStyled