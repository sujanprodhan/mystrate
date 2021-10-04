import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"

class Apaexlinecolumn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: "Open Credit",
          data: [46, 57, 59, 54, 62, 58, 64, 60, 66],
        },
        {
          name: "5 Months >",
          data: [86, 28, 23, 13, 56, 65, 29, 65, 156],
        },
        {
          name: "4 Months",
          data: [37, 42, 38, 26, 47, 50, 54, 55, 43],
        },
        {
            name: "3 Months ",
            data: [74, 83, 102, 97, 86, 106, 93, 114, 94],
          },
          {
            name: "2 Months ",
            data: [52, 96, 80, 77, 96, 80, 73, 114, 110],
          },
          {
            name: "1 Month",
            data: [21, 100, 65, 54, 99, 154, 65, 145, 188],
          },
          {
            name: "Current",
            data: [55, 72, 80, 90, 96, 122, 99, 133, 123],
          },
          {
            name: "Total",
            data: [74, 83, 102, 97, 86, 106, 93, 114, 94],
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

        colors: ["#556ee6", "#34c38f", "#50a5f1", "#343a40","#00aa00","#f1b44c","#0000aa","#f46a6a"],
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
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
