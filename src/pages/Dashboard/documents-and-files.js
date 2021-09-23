import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import MetaTags from "react-meta-tags"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardUser from "./card-user-documents"
import CardWelcome from "./card-welcome-documents"
import MiniWidget from "./mini-widget"
import Earning from "./earning"
import SalesAnalytics from "./sales-analytics"
import TotalSellingProduct from "./total-selling-product"
import Tasks from "./tasks"
import ChatBox from "./chat-box"
import CardUsernew from "./card-user-rep"
import CardWelcomenew from "./card-welcome-rep"
import MiniWidgetnew from "./mini-widget-rep"
import TasksListnew from "./tasks-list-rep-documents"
import Settingsnew from "./Settings-rep"
import CardUserlatest from "./CardUser-latest"
import MonthlyEarning from "./MonthlyEarning-rep"

//Bitcoin Chart
const series1 = [
  { name: "BTC", data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] },
]
const options1 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#f1b44c"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
}

//Etherium Chart
const series2 = [
  { name: "ETH", data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
]
const options2 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#3452e1"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
}

//LiteCoin Chart
const series3 = [
  { name: "LTC", data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14] },
]
const options3 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#50a5f1"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
}

class DocumentsFiles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        {
          icon: "bx bx-copy-alt",
          title: "Task resolved today",
          value: "25",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-archive-in",
          title: "Complaint resolved",
          value: "5",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "incident reported",
          value: "1",
          badgeValue: "0%",
          color: "warning",
          desc: "From previous period",
        },
      ],
      reportsnew: [
        {
          title: "Monthly Submission",
          icon: "mdi mdi-bitcoin",
          color: "warning",
          value: "120 Files ",
          arrow: "mdi-arrow-up text-success",
          desc: "5 Pending",
          series: series1,
          options: options1,
        },
        {
          title: "Yearly Submission",
          icon: "mdi mdi-ethereum",
          color: "primary",
          arrow: "mdi-arrow-down text-danger",
          value: "12 Files ",
          desc: "3 Pending",
          series: series2,
          options: options2,
        },
        {
          title: "Add Hoc Submission",
          icon: "mdi mdi-litecoin",
          color: "info",
          arrow: "mdi-arrow-up text-success",
          value: "0 Files ",
          desc: "0 Pending",
          series: series3,
          options: options3,
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title> Dashboard </title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs breadcrumbItem="ONLINE SUBMISSION" />

            {/* Card User */}
            <CardUser />

            {/* <Row>
              <CardUsernew />
              <Col xl="8">
                <CardWelcomenew />
                <Row>
                  <MiniWidget reports={this.state.reports} />
                </Row>
              </Col>
            </Row> */}

            <Row>
              {/* welcome card */}
              <CardWelcome />

              <Col xl="8">
                <Row>
                  {/*mimi widgets */}
                  <MiniWidgetnew reportsnew={this.state.reportsnew} />
                </Row>
              </Col>
            </Row>

            <TasksListnew />
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default DocumentsFiles
