import React, { Component } from "react";
import BarChartCard from '../container/barChartCard/barchartCard'
import data from '../data/bar.json'
class BarChart extends Component {
    state = {
        labels: [],
        datasets: [{
            label: '',
            backgroundColor: null,
            borerWidth: null,
            data: []
        }
        ]
    }


    componentDidMount() {


        let stateData = [];
        let newLabels = [];
        newLabels = this.state.labels.slice();
        newLabels = data.data.labels;
        stateData = this.state.datasets[0].data.slice();

        this.setState({
            labels: newLabels
        })
        stateData = data.data.datasets[0].data;
        let backColor = { ...this.state.datasets };
        backColor[0].backgroundColor = data.data.datasets[0].backgroundColor;
        backColor[0].data = stateData
        backColor[0].label=''
        this.setState({ backColor });

    }
    render() {
        return (
            <div style={{ width: '100%' }}>
                <BarChartCard data={this.state} title="Bar Chart" line1="Add a Bar Chart" />
            </div>
        )
    }
}
export default BarChart