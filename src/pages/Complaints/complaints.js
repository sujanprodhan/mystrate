import React, { Component } from "react"
import { Container, Row, Col, CardTitle, Card, CardBody } from "reactstrap"
import MetaTags from "react-meta-tags"
import DonutChart from "../AllCharts/apex/complaintdonutchart"
import SplineArea from "../AllCharts/apex/complaintspinal"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardWelcome from "./card-welcome"
import MiniWidget from "./mini-widget"
import ProjectsList from "./projects-list"

class Complaints extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        {
          icon: "bx bx-copy-alt",
          title: "Total Complaints",
          value: "92",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-archive-in",
          title: "Pending",
          value: "12",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Completed",
          value: "54",
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
            <title>Complaints</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs breadcrumbItem="Complaints" />

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
                        <div class="d-flex align-items-center mb-3">
                          <h5 class="font-size-14 mb-0">Complaints</h5>
                        </div>
                        <select
                          class="form-select mb-3"
                          aria-label="Default select example"
                        >
                          <option selected>Select Month</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>

                        <div>
                          <h6 class="font-size-12 mb-0">This Month</h6>
                        </div>
                        <div class="text-muted mt-4">
                          <h4>
                            573{" "}
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
                        <CardTitle className="mt-2"> 975 </CardTitle>
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
                    <CardTitle className="mb-4">Complaint Analytic</CardTitle>
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

export default Complaints
