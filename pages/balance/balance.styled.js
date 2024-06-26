import { styled } from "styled-components"

const BalanceStyled = styled.div`
    width: 400px;
    min-height: 130px;
    background-color: hsl(10, 79%, 65%);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 425px) {
        width: 90%;
    }

    .balance-wrapper {
        width: 80%;
        display: flex;
        justify-content: space-between;

    }

    .my-balance {
        display: flex;
        flex-direction: column;

        .text {
            color: white;
            margin: 0;
        }

        .balance-cash {
            color: white;
            margin: 0;
            font-weight: 700;
            font-size: 2rem;
        }
    }

    .logo {
        display: flex;
        
        .logo-wrapper {
            width: 100%;
            display: flex;

            img {
                width: 100%;
            }
        }
    }
`

export default BalanceStyled