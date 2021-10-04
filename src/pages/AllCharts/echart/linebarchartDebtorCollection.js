import React, { Component } from "react"
import ReactEcharts from "echarts-for-react"

class LineBar extends Component {
  getOption = () => {
    return {
      grid: {
        zlevel: 0,
        x: 80,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,0,0,0)",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      toolbox: {
        orient: "center",
        left: 0,
        top: 20,
        feature: {
        //   dataView: { show: true, readOnly: false },
        //   magicType: { show: true, type: ["line", "bar"] },
        //   restore: { show: true },
        //   saveAsImage: { show: true },
        },
      },
      color: ["#556ee6", "#34c38f", "#50a5f1", "#343a40","#00aa00","#f1b44c","#0000aa","#f46a6a", "#f46a6a"],   
      legend: {
        data: ["Maintenance Lift", "Property Management Fee", "Management Staff Cost","Services, Cleaning and Landscaping", "Services-Security", "Facing System", "Others","Money"],
        textStyle: {
          color: ["#8791af"],
        },
      },
      xAxis: [
        {
          type: "category",
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          axisPointer: {
            type: "shadow",
          },
          axisLine: {
            lineStyle: {
              color: "#8791af",
            },
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "",
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: "{value}",
          },
          axisLine: {
            lineStyle: {
              color: "#8791af",
            },
          },
        },
        {
          type: "value",
          name: "",
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: "{value}",
          },
        },
      ],
      series: [
        {
          name: "Maintenance Lift",
          type: "bar",
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2],
        },
        {
          name: "Property Management Fee",
          type: "bar",
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 80.7, 175.6, 182.2],
        },
        
        {
            name: "Management Staff Cost",
            type: "bar",
            data: [2.6, 5.9, 9.0, 26.4, 29.7, 90.7, 175.6, 186.2],
          },
                  
        {
            name: "Services, Cleaning and Landscaping",
            type: "bar",
            data: [2.6, 11, 12.0, 6.4, 29.7, 90.7, 196.6, 165],
          },
          {
            name: "Services-Security",
            type: "bar",
            data: [2.6, 7, 19.0, 20.4, 29.7, 20.7, 200.6, 180],
          },
          {
            name: "Facing System",
            type: "bar",
            data: [4.6, 7, 19.0, 50.4, 26.7, 60.7, 180.6, 140],
          },
          {
            name: "Others",
            type: "bar",
            data: [5, 7, 10.0, 40.4, 26.7, 110.7, 190.6, 190],
          },
        {
            name: "Total",
            type: "bar",
            data: [2.0, 2.2, 3.3, 6.5, 6.3, 30.2, 40.3, 93.4],
          },
        {
            name: "",
            type: "line",
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4],
          },
      ],
      textStyle: {
        color: ["#74788d"],
      },
    }
  }

  
  render() {
    return (
      <React.Fragment>
        <ReactEcharts style={{ height: "350px" }} option={this.getOption()} />
      </React.Fragment>
    )
  }
}
export default LineBar
