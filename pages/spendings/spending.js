import SpendingStyled from "./spendings.styled";
import BarChart from "../custom/barchart/barchart";
import { Typography } from "antd";
import SpendingsApi from "../api/SpendingsApi";

const { Title, Paragraph } = Typography;

const Spending = () => {

    const num = SpendingsApi.map((items,index) => {
        return items.spent
    })
    const highestNum = Math.max(...num)

    return (
        <SpendingStyled>
            <div className="spending">
                <Title level={3} style={{color: "hsl(25, 47%, 15%)", textAlign: "center"}}>Spending - Last 7 Days</Title>
            </div>

            <div className="bar-chart-wrapper">
                {
                    SpendingsApi.map((items, index) => {
                        const percent= items.spent / highestNum;
                        const barMaxHeight = 120
                        
                        console.log("CHECK_percent", percent)

                        return(
                            <BarChart 
                            money={items.spent} 
                            days={items.day} 
                            height={`${percent * barMaxHeight}px`} 
                            bgColor={items.color ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"} 
                            />
                        )
                    })
                }

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