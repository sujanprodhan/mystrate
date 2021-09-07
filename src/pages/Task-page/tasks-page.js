import React, { Component } from "react"
import { Container, Row, Col, CardTitle, Card, CardBody } from "reactstrap"
import MetaTags from "react-meta-tags"
import DonutChart from "../AllCharts/apex/taskpagedonutchart"
import SplineArea from "../AllCharts/apex/taskpagespinal"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Link, withRouter } from "react-router-dom"

//Import Components
import CardWelcome from "./card-welcome"
import MiniWidget from "./mini-widget"
import ProjectsList from "./projects-list"
import MiniCards from "./mini-card"
import TasksListnew from "./tasks-list-rep"
import ReactApexChart from "react-apexcharts"
import { options, series, statusClasses } from "common/data/tasks"

class Taskpage extends Component {
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

      miniCards: [
        {
          title: "Pending Task",
          iconClass: "bx-check-circle",
          text: "3",
        },
        { title: "Created Today", iconClass: "bx-hourglass", text: "12" },
        { title: "Completed Today", iconClass: "bx-package", text: "54" },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Task</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs breadcrumbItem="Task" />

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
                      <h5 class="card-title me-2">Tasks</h5>
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

                <CardTitle className="mb-4">Task List</CardTitle>
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="mb-4 card-title">From Complaints</div>
                    </div>
                    <div class="table-responsive">
                      <table class="table table-nowrap align-middle mb-0">
                        <tbody>
                          <tr>
                            <td>
                              <h5 class="text-truncate font-size-14 m-0">
                                <Link class="text-dark" to="/tasks-page">
                                  Create a Skote Dashboard UI
                                </Link>
                              </h5>
                            </td>
                            <td>
                              <div class="avatar-group">
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <img
                                      src="/static/media/avatar-2.feb0f89d.jpg"
                                      class="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <img
                                      src="/static/media/avatar-1.3921191a.jpg"
                                      class="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>
                              <Link
                                class="btn btn-primary"
                                to="/projects-overview/0"
                                role="button"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h5 class="text-truncate font-size-14 m-0">
                                <Link class="text-dark" to="/tasks-page">
                                  Create a New Landing UI
                                </Link>
                              </h5>
                            </td>
                            <td>
                              <div class="avatar-group">
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <img
                                      src="/static/media/avatar-4.b23e41d9.jpg"
                                      class="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <img
                                      src="/static/media/avatar-5.a5c59cee.jpg"
                                      class="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <div class="avatar-xs">
                                      <span class="avatar-title rounded-circle bg-success text-white font-size-16">
                                        3 +
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>
                              <Link
                                class="btn btn-primary"
                                to="/projects-overview/0"
                                role="button"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h5 class="text-truncate font-size-14 m-0">
                                <Link class="text-dark" to="/tasks-page">
                                  Create a Skote Logo
                                </Link>
                              </h5>
                            </td>
                            <td>
                              <div class="avatar-group">
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <div class="avatar-xs">
                                      <span class="avatar-title rounded-circle bg-success text-white font-size-16">
                                        F
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>
                              <Link
                                class="btn btn-primary"
                                to="/projects-overview/0"
                                role="button"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="mb-4 card-title">Created Today</div>
                    </div>
                    <div class="table-responsive">
                      <table class="table table-nowrap align-middle mb-0">
                        <tbody>
                          <tr>
                            <td>
                              <h5 class="text-truncate font-size-14 m-0">
                                <a class="text-dark" href="/tasks-page">
                                  Brand logo design
                                </a>
                              </h5>
                            </td>
                            <td>
                              <div class="avatar-group">
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <img
                                      src="/static/media/avatar-7.5ba5195e.jpg"
                                      class="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>
                              <Link
                                class="btn btn-primary"
                                to="/projects-overview/0"
                                role="button"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h5 class="text-truncate font-size-14 m-0">
                                <Link class="text-dark" to="/tasks-page">
                                  Create a Blog Template UI
                                </Link>
                              </h5>
                            </td>
                            <td>
                              <div class="avatar-group">
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <div class="avatar-xs">
                                      <span class="avatar-title rounded-circle bg-success text-white font-size-16">
                                        S
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <img
                                      src="/static/media/avatar-8.ad5418a9.jpg"
                                      class="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <div class="avatar-xs">
                                      <span class="avatar-title rounded-circle bg-success text-white font-size-16">
                                        1 +
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>
                              <Link
                                class="btn btn-primary"
                                to="/projects-overview/0"
                                role="button"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="mb-4 card-title">Completed Today</div>
                    </div>
                    <div class="table-responsive">
                      <table class="table table-nowrap align-middle mb-0">
                        <tbody>
                          <tr>
                            <td>
                              <h5 class="text-truncate font-size-14 m-0">
                                <Link class="text-dark" to="/tasks-page">
                                  Redesign - Landing page
                                </Link>
                              </h5>
                            </td>
                            <td>
                              <div class="avatar-group">
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <img
                                      src="/static/media/avatar-6.dc44eabf.jpg"
                                      class="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <div class="avatar-xs">
                                      <span class="avatar-title rounded-circle bg-success text-white font-size-16">
                                        F
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>
                              <Link
                                class="btn btn-primary"
                                to="/projects-overview/0"
                                role="button"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h5 class="text-truncate font-size-14 m-0">
                                <Link class="text-dark" to="/tasks-page">
                                  Multipurpose Landing
                                </Link>
                              </h5>
                            </td>
                            <td>
                              <div class="avatar-group">
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <img
                                      src="/static/media/avatar-7.5ba5195e.jpg"
                                      class="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>
                              <Link
                                class="btn btn-primary"
                                to="/projects-overview/0"
                                role="button"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h5 class="text-truncate font-size-14 m-0">
                                <Link class="text-dark" to="/tasks-page">
                                  Create a Blog Template UI
                                </Link>
                              </h5>
                            </td>
                            <td>
                              <div class="avatar-group">
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <img
                                      src="/static/media/avatar-4.b23e41d9.jpg"
                                      class="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <div class="avatar-xs">
                                      <span class="avatar-title rounded-circle bg-success text-white font-size-16">
                                        S
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                                <div class="avatar-group-item">
                                  <Link class="d-inline-block" to="/tasks-page">
                                    <div class="avatar-xs">
                                      <span class="avatar-title rounded-circle bg-success text-white font-size-16">
                                        1 +
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                            <td>
                              <Link
                                class="btn btn-primary"
                                to="/projects-overview/0"
                                role="button"
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xl="4">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Task Anaylist</CardTitle>
                    <DonutChart />
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <CardTitle className="mb-4 h4">Tasks </CardTitle>
                    <ReactApexChart
                      options={options}
                      series={series}
                      type="line"
                      height={280}
                      className="apex-charts"
                    />
                  </CardBody>
                </Card>

                <TasksListnew />
              </Col>
            </Row>

            <Row></Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Taskpage
