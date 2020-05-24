import React from 'react'
import classes from './pieChartCard.module.css'
import { Pie } from 'react-chartjs-2'
import 'chart.piecelabel.js'
const pieChartCard = (props) => {
    return (
        <div className={classes.PieChartCard}>
            <h3>{props.title}</h3>
            <p>{props.line1}</p>
            <Pie data={props.data}
            height={"100%"}
                options={
                    { maintainAspectRatio: false },
                    {
                        pieceLabel: {
                            render: 'value'
                        },

                    }}
            />
        </div>
    )
}
export default pieChartCard