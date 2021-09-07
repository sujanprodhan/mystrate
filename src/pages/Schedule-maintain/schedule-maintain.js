import React, { Component } from "react"
import { Container, Row, Col, CardTitle, Card, CardBody } from "reactstrap"
import MetaTags from "react-meta-tags"
import DonutChart from "../AllCharts/apex/Scheduledonutchart"
import SplineArea from "../AllCharts/apex/Schedulespinal"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardWelcome from "./card-welcome"
import MiniWidget from "./mini-widget"
import ProjectsList from "./projects-list"

class Schedulemaintain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        {
          icon: "bx bx-copy-alt",
          title: "Schedule today",
          value: "14",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-archive-in",
          title: "Pending",
          value: "4",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Completed",
          value: "8",
          badgeValue: "0%",
          color: "warning",
          desc: "From previous period",
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Schedule Maintainance</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs breadcrumbItem="Schedule Maintainance" />

            {/* Card User */}

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

              <Col lg={8}>
                <Card>
                  <CardBody>
                    <Row>
                      <Col lg={3}>
                        <CardTitle className="mb-2">
                          Schedule Completed
                        </CardTitle>
                        <select
                          class="form-select mb-2"
                          aria-label="Default select example"
                        >
                          <option selected>Select Month</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div class="text-muted mt-4">
                          <h4>
                            58
                            <i class="mdi mdi-chevron-up ms-1 text-success"></i>
                          </h4>
                          <div class="d-flex">
                            <span class="badge badge-soft-success font-size-12">
                              {" "}
                              + 0.2%{" "}
                            </span>
                            <span class="ms-2 text-truncate">
                              From previous period
                            </span>
                          </div>
                        </div>
                        <button class="btn btn-primary mt-4">
                          View Details
                        </button>

                        <div>
                          <h6 class="font-size-12 mt-4">Last Month</h6>
                        </div>
                        <CardTitle className="mt-2"> 42 </CardTitle>
                      </Col>
                      <Col lg={9}>
                        <Row>
                          <Col></Col>
                          <Col lg={3}></Col>
                        </Row>
                        <SplineArea />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Schedule Analystic</CardTitle>
                    <DonutChart />
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

export default Schedulemaintain
