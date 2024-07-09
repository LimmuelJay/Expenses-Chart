import BarChartStyled from "@/pages/custom/barchart/barchart.styled";
import { Button, Tooltip, Typography } from "antd"

const BarChart = (props) => {
    const { Paragraph } = Typography;
    const text = <BarChartStyled><Paragraph className="money">{`$${props.money}`}</Paragraph></BarChartStyled>

    return (
        <BarChartStyled height={props.height} bgColor={props.bgColor} bgColorHover={props.bgColorHover}>
            <Tooltip title={text}>
                <Button />
            </Tooltip>
            <Paragraph className="days">{props.days}</Paragraph>
        </BarChartStyled>
    )
}

export default BarChart;