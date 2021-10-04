import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"

class Apaexlinecolumn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: "Income",
          data: [46, 57, 59, 54, 62, 58, 64, 60, 66],
        },
        {
          name: "Expenses",
          data: [74, 83, 102, 97, 86, 106, 93, 114, 94],
        },
        {
          name: "Surplus/deficit",
          data: [37, 42, 38, 26, 47, 50, 54, 55, 43],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "45%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },

        colors: ["#34c38f", "#556ee6", "#f46a6a"],
        xaxis: {
          categories: [
            "Jan 2019",
            "Feb 2019",
            "Mar 2019",
            "Apr 2019",
            "May 2019",
            "Jun 2019",
            "Jul 2019",
            "Aug 2019",
            "Sep 2019",
            "Oct 2019",
            "Nov 2019",
            "Dec 2019",
          ],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        grid: {
          borderColor: "#f1f1f1",
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            },
          },
        },
      },
    }
  }
  render() {
    return (
      <React.Fragment>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
          className="apex-charts"
        />
      </React.Fragment>
    )
  }
}

export default Apaexlinecolumn
