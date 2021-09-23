import React, { Component } from "react"
import { Container, Row, Col , Card, CardBody, CardTitle} from "reactstrap"
import MetaTags from "react-meta-tags"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardUser from "./card-user-visitor"
import CardWelcome from "./card-welcome-visitor"
import MiniWidget from "./mini-widget"
import ProjectsList from "./projects-list-visitor"
import DashedLine from "../AllCharts/apex/dashedLine"


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

class VisitorManagementNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        {
          icon: "bx bx-copy-alt",
          title: "Renovation",
          value: "1",
          badgeValue: "100%",
          color: "success",
          desc: "",
        },
        {
          icon: "bx bx-archive-in",
          title: "Mover",
          value: "2",
          badgeValue: "100%",
          color: "success",
          desc: "",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Other Services",
          value: "1",
          badgeValue: "50%",
          color: "warning",
          desc: "",
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Attendance</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs breadcrumbItem="Visitor Management" title="" />

            {/* Card User */}
            <CardUser />

            <Row>
              {/* card user */}

              <Col xl="12">
                {/* card welcome */}

                <Row>
                  {/* mini widgets new */}
                  <CardWelcome />
                  <MiniWidget reports={this.state.reports} />
                </Row>
              </Col>

             
            </Row>
            <Row>
            <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Dashed Line</CardTitle>
                    <DashedLine />
                  </CardBody>
                </Card>
              </Col>
              <ProjectsList />
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default VisitorManagementNew
