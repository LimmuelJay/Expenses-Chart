import MainStyled from "./main.styled";
import Balance from "../balance/balance";
import Spending from "../spendings/spending";

const Main = () => {
    return (
        <MainStyled>
            <Balance />
            <Spending />
        </MainStyled>
    )
}

export default Main