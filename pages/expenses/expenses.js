import ExpensesStyled from "@/pages/expenses/expenses.styled";
import BarChart from "@/pages/custom/barchart/barchart";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Expenses = () => {
    const expensesDataArr = [
        {
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "mon"
        }, 
        {
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "tue"
        },    
        {
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "wed"
        },
        {
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "thu"
        },
        {
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "fri"
        },
        {
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "sat"
        },
        {
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "sun"
        },
    ]
    console.log("CHECK_expensesDataArr", expensesDataArr)
    
    const expensesArr = expensesDataArr.map((items) => {
        return items.expenses
    })
    
    const highestNum = Math.max(...expensesArr)
    console.log("CHECK_highestNum", highestNum)

    return (
        <ExpensesStyled>
            <div className="spending">
                <Title level={3} style={{color: "hsl(25, 47%, 15%)", textAlign: "center"}}>Spending - Last 7 Days</Title>
            </div>

            <div className="bar-chart-wrapper">
                {
                    expensesDataArr.map((item, index) => {
                        console.log("CHECK_item", item)
                        return(
                            <BarChart 
                            key={`${index}-${item.day}`}
                            expenses={item.expenses}
                            day={item.day}
                            highestNum={highestNum}
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
        </ExpensesStyled>
    )
}

export default Expenses