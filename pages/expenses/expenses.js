import ExpensesStyled from "./expenses.styled";
import BarChart from "../custom/barchart/barchart";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const Expenses = () => {
    const expensesDataArray = [
        {
            key: 0,
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "mon"
        }, 
        {
            key: 1,
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "tue"
        },    
        {
            key: 2,
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "wed"
        },
        {
            key: 3,
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "thu"
        },
        {
            key: 4,
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "fri"
        },
        {
            key: 5,
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "sat"
        },
        {
            key: 6,
            expenses: parseFloat((Math.random() * 100).toFixed(2)),
            day: "sun"
        },
    ]

    const expensesArr = expensesDataArray.map((items,index) => {
        return items.expenses
    })
    const highestNum = Math.max(...expensesArr)

    const highestExpenseObj = expensesDataArray.find(item => item.expenses === highestNum);
    console.log("CHECK_highestExpenseObj", highestExpenseObj)

    const updatedObj = { ...highestExpenseObj, bgColor: "hsl(186, 34%, 60%)", bgColorHover: "hsl(186, 34%, 60%)"};
    console.log("CHECK_updatedObject", updatedObj);

    const updatedExpensesDataArr = expensesDataArray.map(item => 
        item.key === highestExpenseObj.key ? updatedObj : item
    );
    console.log("CHECK_updatedExpensesDataArr", updatedExpensesDataArr)

    return (
        <ExpensesStyled>
            <div className="spending">
                <Title level={3} style={{color: "hsl(25, 47%, 15%)", textAlign: "center"}}>Spending - Last 7 Days</Title>
            </div>

            <div className="bar-chart-wrapper">
                {
                    updatedExpensesDataArr.map((items, index) => {
                        const percent= items.expenses / highestNum;
                        const barMaxHeight = 120
                        
                        console.log("CHECK_percent", percent)

                        return(
                            <BarChart 
                            money={items.expenses} 
                            days={items.day} 
                            height={`${percent * barMaxHeight}px`} 
                            bgColor={items.bgColor}
                            bgColorHover={items.bgColorHover}
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