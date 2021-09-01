import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import MetaTags from 'react-meta-tags';


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardUser from "./card-user"
import CardWelcome from "./card-welcome"
import MiniWidget from "./mini-widget"
import ProjectsList from "./projects-list"



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





class Attendance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        {
          icon: "bx bx-copy-alt",
          title: "Cleaner",
          value: "1 Absent",
          badgeValue: "15 Absent",
          color: "success",
          desc: "3 Late, 3 leaving early",
        },
        {
          icon: "bx bx-archive-in",
          title: "Security Morning",
          value: "0 Absent",
          badgeValue: "12 Absent",
          color: "success",
          desc: "3 Late, 3 leaving early",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Security Night",
          value: "0 Absent",
          badgeValue: "15 Absent",
          color: "warning",
          desc: "3 Late, 3 leaving early",
        },

      ],
      

    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Saas Dashboard | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs breadcrumbItem="Attendance" />

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

                    
                    <ProjectsList />
               

            </Row>
            
            




              
              

                

                      </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Attendance
