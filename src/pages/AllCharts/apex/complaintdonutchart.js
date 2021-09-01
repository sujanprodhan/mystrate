import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"

class dountchart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [44, 55, 41],
      options: {
        labels: ["Owner", "Tenant", "Other"],
        colors: ["#34c38f", "#556ee6", "#f46a6a"],
        legend: {
          show: true,
          position: "bottom",
          horizontalAlign: "center",
          verticalAlign: "middle",
          floating: false,
          fontSize: "14px",
          offsetX: 0,
          offsetY: -10,
        },
        responsive: [
          {
            breakpoint: 600,
            options: {
              chart: {
                height: 240,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
      },
    }
  }
  render() {
    return (
      <React.Fragment>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height="320"
          className="apex-charts"
        />
      </React.Fragment>
    )
  }
}

export default dountchart
