import BalanceStyled from "./balance.styled";
import { Typography } from "antd";


const Balance = () => {
    const { Paragraph } = Typography;

    return (
        <BalanceStyled>
            <div className="balance-wrapper">
                <div className="my-balance">
                    <Paragraph className="text">My balance</Paragraph>
                    <Paragraph className="balance-cash">$921.48</Paragraph>
                </div>

                <div className="logo">
                    <div className="logo-wrapper">
                        <img src="/assets/images/logo.svg" alt="logo"/>
                    </div>
                </div>
            </div>
        </BalanceStyled>
    )
}

export default Balance