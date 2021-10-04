import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"

class Apaexlinecolumn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: "Open Credit",
          data: [46, 57, 59, 54, 62, 58, 64, 60, 66, 45, 55,65],
        },
        {
          name: "5 Months >",
          data: [86, 28, 23, 13, 56, 65, 29, 65, 156, 85, 85,55],
        },
        {
          name: "4 Months",
          data: [37, 42, 38, 26, 47, 50, 54, 55, 43, 45, 55,65],
        },
        {
            name: "3 Months ",
            data: [74, 83, 102, 97, 86, 106, 93, 114, 94, 75, 55,65],
          },
          {
            name: "2 Months ",
            data: [52, 96, 80, 77, 96, 80, 73, 114, 110,45, 55,65],
          },
          {
            name: "1 Month",
            data: [21, 100, 65, 54, 99, 154, 65, 145, 188,65, 85,85],
          },
          {
            name: "Current",
            data: [55, 72, 80, 90, 96, 122, 99, 133, 123,35, 85,65],
          },
          {
            name: "Total",
            data: [74, 83, 102, 97, 86, 106, 93, 114, 94,95, 85,75],
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

        colors: ["#556ee6", "#34c38f", "#50a5f1", "#B8F2E6","#05B2DC","#f1b44c","#343a40","#f46a6a"],
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
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
