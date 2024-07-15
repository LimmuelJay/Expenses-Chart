import BarChartStyled from "@/pages/custom/barchart/barchart.styled";
import { Button, Tooltip, Typography } from "antd"

const BarChart = (props) => {
    const {
        expenses,
        day,
        highestNum,
    } = props

    const { Paragraph } = Typography;
    const text = <BarChartStyled><Paragraph className="expenses">{`$${expenses}`}</Paragraph></BarChartStyled>

    const heightCalcu = (expenses / highestNum) * 120
    const isHighestExpenses = expenses === highestNum
    const height = `${heightCalcu}px`

    console.log("CHECK_isHighestExpenses", isHighestExpenses)
    console.log("CHECK_height", day, height)

    return (
        <BarChartStyled height={height} isHighestExpenses={isHighestExpenses}>
            <Tooltip title={text}>
                <Button />
            </Tooltip>
            <Paragraph className="days">{day}</Paragraph>
        </BarChartStyled>
    )
}

export default BarChart;