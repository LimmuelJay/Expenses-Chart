import SpendingStyled from "./spendings.styled";
import BarChart from "../custom/Bar Chart/barchart";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Spending = () => {
    return (
        <SpendingStyled>
            <div className="spending">
                <Title level={3} style={{color: "hsl(25, 47%, 15%)", textAlign: "center"}}>Spending - Last 7 Days</Title>
            </div>

            <div className="bar-chart-wrapper">
                <BarChart money="$13.65" days="mon" height="43px"/>
                <BarChart money="$34.78" days="tue" height="74px"/>
                <BarChart money="$52.36" days="wed" height="122px" bgColor="hsl(186, 34%, 60%)" bgColorHover="hsl(186, 34%, 60%)"/>
                <BarChart money="$31.07" days="thu" height="61px"/>
                <BarChart money="$23.17" days="fri" height="47px"/>
                <BarChart money="$42.65" days="sat" height="98px"/>
                <BarChart money="$27.12" days="sun" height="53px"/>
            </div>

            <hr />

            <div className="total">
                <div className="total-left-text">
                    <Paragraph className="total-this-month">Total this month</Paragraph>
                    <Paragraph className="total-left-cash">$478.33</Paragraph>
                </div>

                <div className="total-right-text">
                    <Paragraph className="percent">+2.4%</Paragraph>
                    <Paragraph className="from-last-month">from last month</Paragraph>
                </div>
            </div>
        </SpendingStyled>
    )
}

export default Spending