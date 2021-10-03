import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"

class Apaexlinecolumn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: "Maintenance Funds -  CIMB",
          data: [46, 57, 59, 54, 62, 58, 64, 60, 66],
        },
        {
          name: "Sinking Funds-CIMB",
          data: [74, 65, 102, 97, 96, 106, 93, 125, 102],
        },
        {
            name: "Maintenance Funds-UOB",
            data: [80, 96, 90, 90, 86, 106, 93, 108, 122],
          },
          {
            name: "Fixed Deposit",
            data: [68, 58, 102, 97, 96, 106, 93, 156, 115],
          },
          {
            name: "Pretty Cash",
            data: [65, 83, 109, 97, 86, 109, 93, 114, 125],
          },
          {
            name: "Total",
            data: [102, 183, 109, 155, 186, 159, 193, 114, 189],
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

        colors: ["##50a5f1", "#27926b", "#575a6a","#2A3042","#f1b44c", "#f46a6a"],
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
