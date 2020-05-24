import React from 'react'
import classes from './barChartCard.module.scss'
import { Bar } from 'react-chartjs-2'
import 'chart.piecelabel.js'
const barChartCard = (props) => {
    return (
        <div className={classes.BarChartCard}>
            <h3>{props.title}</h3>
            <p>{props.line1}</p>
            <Bar data={props.data}
                height={"38%"}
                options={
                    { maintainAspectRatio: false }}

            />
        </div>
    )
}
export default barChartCard