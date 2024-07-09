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

    const newExpensesDataArr = expensesDataArr.map((item, index) => ({
        ...item,
        key: index 
    }));
    console.log("CHECK_newExpensesDataArr", newExpensesDataArr)

    const expensesArr = newExpensesDataArr.map((items) => {
        return items.expenses
    })
    const highestNum = Math.max(...expensesArr)

    const highestExpenseObj = newExpensesDataArr.find(item => item.expenses === highestNum);
    console.log("CHECK_highestExpenseObj", highestExpenseObj)

    const updatedObj = { ...highestExpenseObj, bgColor: "hsl(186, 34%, 60%)", bgColorHover: "hsl(186, 34%, 60%)"};
    console.log("CHECK_updatedObject", updatedObj);

    const updatedExpensesDataArr = newExpensesDataArr.map(item => 
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
                            key={items.key} 
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