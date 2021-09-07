import React, { Component } from "react"
import { Container, Row, Col, CardTitle, Card, CardBody } from "reactstrap"
import MetaTags from "react-meta-tags"
import DonutChart from "../AllCharts/apex/incidentdonutchart"
import SplineArea from "../AllCharts/apex/incidentspinal"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardWelcome from "./card-welcome"
import MiniWidget from "./mini-widget"
import ProjectsList from "./projects-list"
import MiniCards from "./mini-card"
import TasksListnew from "./tasks-list-rep"
import CardUser from "./card-user"

class Incidentreport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        {
          icon: "bx bx-copy-alt",
          title: "Total Complaints",
          value: "2",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-archive-in",
          title: "Pending",
          value: "23",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Completed",
          value: "152",
          badgeValue: "0%",
          color: "warning",
          desc: "From previous period",
        },
      ],

      miniCards: [
        {
          title: "Incident Report Today",
          iconClass: "bx-check-circle",
          text: "2 ",
        },
        { title: "Reported This month", iconClass: "bx-hourglass", text: "23" },
        { title: "Reported this year", iconClass: "bx-package", text: "152" },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Incident Report</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs breadcrumbItem="Incident Report" />

            {/* Card User */}

            <Row>
              <Col xl="8">
                <Row>
                  {this.state.miniCards.map((card, key) => (
                    <MiniCards
                      title={card.title}
                      text={card.text}
                      iconClass={card.iconClass}
                      key={"_card_" + key}
                    />
                  ))}
                </Row>

                <Card>
                  <CardBody>
                    <div class="d-flex flex-wrap">
                      <h5 class="card-title me-2">Incident</h5>
                      <div class="ms-auto">
                        <div class="toolbar button-items text-end">
                          <button type="button" class="btn btn-light btn-sm">
                            ALL
                          </button>{" "}
                          <button type="button" class="btn btn-light btn-sm">
                            1M
                          </button>{" "}
                          <button type="button" class="btn btn-light btn-sm">
                            6M
                          </button>{" "}
                          <button
                            type="button"
                            class="btn btn-light btn-sm active"
                          >
                            1Y
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="text-center row mb-4">
                      <div class="col-lg-4">
                        <div class="mt-4">
                          <p class="text-muted mb-1">Today</p>
                          <h5>1024</h5>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="mt-4">
                          <p class="text-muted mb-1">Total This Month</p>
                          <h5>
                            12356{" "}
                            <span class="text-success font-size-13">
                              0.2 % <i class="mdi mdi-arrow-up ms-1"></i>
                            </span>
                          </h5>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="mt-4">
                          <p class="text-muted mb-1">Total This Year</p>
                          <h5>
                            102354{" "}
                            <span class="text-success font-size-13">
                              0.1 % <i class="mdi mdi-arrow-up ms-1"></i>
                            </span>
                          </h5>
                        </div>
                      </div>
                    </div>

                    <SplineArea />
                  </CardBody>
                </Card>
              </Col>

              <Col xl="4">
                <CardUser />

                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Incident Type</CardTitle>
                    <DonutChart />
                    <p>&nbsp;</p>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <ProjectsList />
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Incidentreport
