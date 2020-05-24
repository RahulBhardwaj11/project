import React, { Component } from "react";
import PieChartCard from '../container/pieChartCard/pieChartCard'
import data from '../data/pie.json'
class PieChart extends Component {
    state = {
        datasets: [{

            backgroundColor: [],
            data: []
        }
        ]
    }


    componentDidMount() {

        let backArray = [];
        let stateData = [];
        backArray = this.state.datasets[0].backgroundColor.slice();
        stateData = this.state.datasets[0].data.slice();
        backArray = data.data.datasets[0].backgroundColor;
        stateData = data.data.datasets[0].data;
        let backColor = { ...this.state.datasets };
        backColor[0].backgroundColor = backArray;
        backColor[0].data = stateData
        this.setState({ backColor });

    }
    render() {
        return (
            <div style={{width:'100%' }}>
                <PieChartCard data={this.state} title="Pie Chart" line1="Add a Pie Chart"/>
            </div>
        )
    }
}
export default PieChart