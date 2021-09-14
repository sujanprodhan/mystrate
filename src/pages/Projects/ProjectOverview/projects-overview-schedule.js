import React, { Component } from "react"
import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import { connect } from "react-redux"
import { isEmpty } from "lodash"
import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap"
import { Link, withRouter } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import ReactApexChart from "react-apexcharts"
import { getProjectDetail } from "store/projects/actions"
import ProjectDetail from "./projectDetail"
import TeamMembers from "./teamMembers"
import OverviewChart from "./overviewChart"
import { options, series } from "common/data/projects"
import AttachedFiles from "./attachedFiles"
import Comments from "./comments"
import testImage from "../../../assets/images/sidebar/gen1.jpeg"
import testImage2 from "../../../assets/images/sidebar/gen-after.jpeg"
import UiLightboxCommon from "pages/Ui/LightBoxCommon"

class ProjectsOverviewSchedule extends Component {
  componentDidMount() {
    const {
      match: { params },
      onGetProjectDetail,
    } = this.props
    if (params && params.id) {
      onGetProjectDetail(params.id)
    } else {
      onGetProjectDetail(0) //remove this after full integration
    }
  }

  render() {
    const { projectDetail } = this.props

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Task Overview</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}

            <Breadcrumbs title="Task" breadcrumbItem="Scheduled Task" />

            {!isEmpty(projectDetail) && (
              <>
                <Row>
                  <Col lg="8">
                    <ProjectDetail project={projectDetail} />
                  </Col>

                  <Col lg="4">
                    <TeamMembers team={projectDetail.team} />
                  </Col>
                </Row>

                <Row>
                  <Col lg="4">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        {" "}
                        <CardTitle className="mb-4">
                          Ad Hoc Task Created{" "}
                        </CardTitle>
                      </div>
                      <div>
                        {" "}
                        <UncontrolledDropdown className="float-right">
                          <DropdownToggle
                            href="#"
                            className="arrow-none"
                            tag="i"
                          >
                            <i className="mdi mdi-dots-vertical m-0 text-muted h5" />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem href="#">Edit</DropdownItem>
                            <DropdownItem href="#">Delete</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>{" "}
                      </div>
                    </div>
                    <Card>
                      <CardBody>
                        <div style={{ marginBottom: "20px" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontWeight: "600",
                              paddingBottom: "20px",
                            }}
                          >
                            <div>Redesign-Landing Page</div>
                            <div>
                            <div className="float-end ms-2">
                                <span className="badge rounded-pill badge-soft-primary font-size-11 badge-soft-warning">
                                  Pending
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div class="avatar-group">
                              <div class="avatar-group-item">
                                <a href="#">
                                  <UiLightboxCommon
                                    lightImage={[
                                      "/static/media/avatar-8.ad5418a9.jpg",
                                    ]}
                                  />
                                </a>
                              </div>
                              <div class="avatar-group-item">
                                <a href="#">
                                  <UiLightboxCommon
                                    lightImage={[
                                      "/static/media/avatar-7.5ba5195e.jpg",
                                    ]}
                                  />
                                </a>
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

                            <div>
                              <Link
                                class="btn btn-primary"
                                to="projects-overview-task"
                                role="button"
                              >
                                View task
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>

                    <Card>
                      <CardBody>
                        <div style={{ marginBottom: "20px" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              fontWeight: "600",
                              paddingBottom: "20px",
                            }}
                          >
                            <div>Creating UI Design</div>
                            <div>
                              <div className="float-end ms-2">
                                <span className="badge rounded-pill badge-soft-secondary font-size-12 badge-soft-success">
                                  Complete
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div class="avatar-group">
                              <div class="avatar-group-item">
                                <a href="#">
                                  <UiLightboxCommon
                                    lightImage={[
                                      "/static/media/avatar-8.ad5418a9.jpg",
                                    ]}
                                  />
                                </a>
                              </div>
                              <div class="avatar-group-item">
                                <a href="#">
                                  <UiLightboxCommon
                                    lightImage={[
                                      "/static/media/avatar-7.5ba5195e.jpg",
                                    ]}
                                  />
                                </a>
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

                            <div>
                              <Link
                                class="btn btn-primary"
                                to="projects-overview-task"
                                role="button"
                              >
                                View task
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col lg="4">
                    <AttachedFiles files={projectDetail.files} />
                  </Col>

                  <Col lg="4">
                    <Comments comments={projectDetail.comments} />
                  </Col>
                </Row>
              </>
            )}
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

ProjectsOverviewSchedule.propTypes = {
  projectDetail: PropTypes.any,
  match: PropTypes.object,
  onGetProjectDetail: PropTypes.func,
}

const mapStateToProps = ({ projects }) => ({
  projectDetail: projects.projectDetail,
})

const mapDispatchToProps = dispatch => ({
  onGetProjectDetail: id => dispatch(getProjectDetail(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectsOverviewSchedule))
