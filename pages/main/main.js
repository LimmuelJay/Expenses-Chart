import MainStyled from "./main.styled";
import Balance from "../balance/balance";
import Expenses from "@/pages/expenses/expenses";

const Main = () => {
    return (
        <MainStyled>
            <Balance />
            <Expenses />
        </MainStyled>
    )
}

export default Main