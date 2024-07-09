import { styled } from "styled-components";

const ExpensesStyled = styled.div`
    width: 370px;
    min-height: 300px;
    background-color: hsl(33, 100%, 98%);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;

    @media screen and (max-width: 425px) {
        width: 80%;
    }

    h3 {
        margin: 0;
    }

    .spending {
        width: 100%;
        display: flex;
        align-self: flex-start;
        margin-bottom: 60px;
    }

    .bar-chart-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .total {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .total-left-text {
            min-height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            .total-this-month {
                color: hsl(28, 10%, 53%);
                margin: 0;
            }

            .total-left-cash {
                color: hsl(25, 47%, 15%);
                margin: 0;
                font-weight: 700;
                font-size: 2rem;
            }
        }

        .total-right-text {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            .percent {
                color: hsl(25, 47%, 15%);
                margin: 0;
                font-weight: 700;   
                text-align: end;
            }
            
            .from-last-month {
                color: hsl(28, 10%, 53%);
                margin: 0;
            }
        }
    }

    hr {
        background-color: hsl(28, 10%, 53%);
        opacity: 20%;
    }
`

export default ExpensesStyled