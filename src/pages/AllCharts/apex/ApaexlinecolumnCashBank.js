import React, { Component } from "react"
import ReactApexChart from "react-apexcharts"

class Apaexlinecolumn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: "Maintenance Funds -  CIMB",
          data: [46, 57, 59, 54, 62, 58, 64, 60, 66, 70, 75, 80],
        },
        {
          name: "Sinking Funds-CIMB",
          data: [74, 65, 102, 97, 96, 106, 93, 125, 70, 90, 85, 90],
        },
        {
            name: "Maintenance Funds-UOB",
            data: [80, 96, 90, 90, 86, 106, 93, 108, 80, 80, 55, 60],
          },
          {
            name: "Fixed Deposit",
            data: [68, 58, 102, 97, 96, 106, 93, 156, 96, 70, 65, 90],
          },
          {
            name: "Pretty Cash",
            data: [65, 83, 109, 97, 86, 109, 93, 114, 89, 75, 75, 55],
          },
          {
            name: "Total",
            data: [102, 140, 109, 155, 125, 120, 140, 114, 123, 130, 135, 140],
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
            columnWidth: "80%",
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
 
        colors: ["#556ee6", "#34c38f", "#50a5f1", "#343a40", "#f46a6a", "#f1b44c"],   
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
