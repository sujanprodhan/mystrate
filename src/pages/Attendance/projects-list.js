import React, { Component } from "react"
import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import * as moment from "moment"

import {
  Badge,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"

import { AvForm, AvField } from "availity-reactstrap-validation"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import { map } from "lodash"

import company1 from "../../assets/images/img-1.png"
import company2 from "../../assets/images/img-2.png"
import company3 from "../../assets/images/img-3.png"
import company4 from "../../assets/images/img-4.png"
import company5 from "../../assets/images/img-5.png"

//Import Image
import images from "assets/images"
import companies from "assets/images/companies"

import {
  getProjects,
  updateProject,
  deleteProject,
} from "../../store/projects/actions"

import UiLightboxCommon from "pages/Ui/LightBoxCommon"

class ProjectsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      compprojects: [],
      modal: false,
    }

    this.handleProjectClick = this.handleProjectClick.bind(this)
    this.toggle = this.toggle.bind(this)
    this.handleValidProjectSubmit = this.handleValidProjectSubmit.bind(this)
    this.handleProjectClicks = this.handleProjectClicks.bind(this)
  }

  componentDidMount() {
    const { projects, onGetProjects } = this.props
    onGetProjects()
    this.setState({ projects })
  }

  handleProjectClicks = arg => {
    this.setState({ selectedProject: arg })
    this.toggle()
  }

  handleDeleteProject = project => {
    const { onDeleteProject } = this.props
    onDeleteProject(project)
  }

  handleProjectClick = arg => {
    const project = arg

    this.setState({
      projects: {
        id: project.id,
        img: project.img,
        name: project.name,
        description: project.description,
        status: project.status,
        color: project.color,
        dueDate: project.dueDate,
        team: project.team,
      },
      isEdit: true,
    })

    this.toggle()
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  /**
   * Handling submit user on user form
   */
  handleValidProjectSubmit = (e, values) => {
    const { onAddNewProject, onUpdateProject } = this.props
    const { isEdit, projects, selectedProject } = this.state

    if (isEdit) {
      const updateProject = {
        id: projects.id,
        img: values.img,
        name: values.name,
        description: values.description,
        status: values.status,
        color: values.color,
        dueDate: values.dueDate,
        team: values.team,
      }

      // update user
      onUpdateProject(updateProject)
    } else {
      const newProject = {
        id: Math.floor(Math.random() * (30 - 20)) + 20,
        name: values["name"],
        description: values["description"],
        status: values["status"],
        color: values["color"],
        dueDate: values["dueDate"],
        team: values["team"],
      }
      // save new user
      onAddNewProject(newProject)
    }
    this.setState({ selectedProject: null })
    this.toggle()
  }

  handleValidDate = date => {
    const date1 = moment(new Date(date)).format("DD MMM Y")
    return date1
  }

  render() {
    const { projects } = this.props
    const { isEdit } = this.state

    return (
      <React.Fragment>
        <div className="">
          <MetaTags></MetaTags>
          {/* Render Breadcrumbs */}
          <Breadcrumbs breadcrumbItem="Attendee Details" />

          <Row>
            <Col lg="12">
              <div className="">
                <div className="table-responsive">
                  <Table className="project-list-table table-nowrap align-middle table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">
                          No.
                        </th>
                        <th scope="col">Person Name</th>
                        <th scope="col">Check in time </th>
                        <th scope="col">Check out time</th>
                        <th scope="col">Status</th>
                        <th scope="col">Lunch Break</th>
                        <th scope="col">Attendee Images</th>
                        <th scope="col">View Staff Details</th>
                      </tr>

                      <tr>
                        <th scope="col">
                          1
                        </th>
                        <td>
                          <h5 class="text-truncate font-size-14">
                            <a class="text-dark" href="/projects-overview/0">
                              John
                            </a>
                          </h5>
                          <p class="text-muted mb-0">
                            It will be as simple as Occidental
                          </p>
                        </td>
                        <td>
                          <th scope="col">9:00 AM</th>
                        </td>
                        <td>
                          <th scope="col">9:00 AM</th>
                        </td>
                        <td>
                          <th scope="col">
                            <span class="bg-danger badge badge-success">
                              Late
                            </span>
                            &nbsp;
                            <span class="bg-success badge badge-success">
                              Leave Early
                            </span>{" "}
                          </th>
                        </td>
                        <td>
                          <th scope="col" class="text-danger">
                            65 Min
                          </th>
                        </td>

                        <td class="">
                        <div class="avatar-group">
                            <div class="avatar-group-item">
                              <a href="#">
                                <UiLightboxCommon
                                  lightImage={[
                                    "/static/media/avatar-4.b23e41d9.jpg",
                                  ]}
                                />
                              </a>
                            </div>
                            <div class="avatar-group-item">                             
                              <a href="#">
                                <UiLightboxCommon
                                  lightImage={[
                                    "/static/media/avatar-5.a5c59cee.jpg",
                                  ]}
                                />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td class="d-grid gap-2">
                          <Link to="/stafftracking" className="btn btn-primary">
                            View
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th scope="col">
                         2
                        </th>
                        <td>
                          <h5 class="text-truncate font-size-14">
                            <a class="text-dark" href="/projects-overview/0">
                              Andrew
                            </a>
                          </h5>
                          <p class="text-muted mb-0">
                            It will be as simple as Occidental
                          </p>
                        </td>
                        <td>
                          <th scope="col">9:00 AM</th>
                        </td>
                        <td>
                          <th scope="col">9:00 AM</th>
                        </td>
                        <td>
                          <th scope="col">
                            <span class="bg-danger badge badge-warning">
                              Late
                            </span>
                          </th>
                        </td>
                        <td>
                          <th scope="col" className="text-dark">
                            45 Min
                          </th>
                        </td>

                        <td class="">
                        <div class="avatar-group">
                            <div class="avatar-group-item">
                              <a href="#">
                                <UiLightboxCommon
                                  lightImage={[
                                    "/static/media/avatar-4.b23e41d9.jpg",
                                  ]}
                                />
                              </a>
                            </div>
                            <div class="avatar-group-item">                             
                              <a href="#">
                                <UiLightboxCommon
                                  lightImage={[
                                    "/static/media/avatar-5.a5c59cee.jpg",
                                  ]}
                                />
                              </a>
                            </div>
                          </div>
                        </td>

                        <td class="d-grid gap-2">
                          <Link to="/stafftracking" className="btn btn-primary">
                            View
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th scope="col">
                         3
                        </th>
                        <td>
                          <h5 class="text-truncate font-size-14">
                            <a class="text-dark" href="/projects-overview/0">
                              Smith
                            </a>
                          </h5>
                          <p class="text-muted mb-0">
                            It will be as simple as Occidental
                          </p>
                        </td>
                        <td>
                          <th scope="col">9:00 AM</th>
                        </td>
                        <td>
                          <th scope="col">9:00 AM</th>
                        </td>
                        <td>
                          <th scope="col">
                            <span class="bg-danger badge badge-success">
                              Late
                            </span>
                            &nbsp;
                            <span class="bg-success badge badge-success">
                              Leave Early
                            </span>{" "}
                          </th>
                        </td>
                        <td>
                          <th scope="col" class="text-danger">
                            65 Min
                          </th>
                        </td>

                        <td class="">
                        <div class="avatar-group">
                            <div class="avatar-group-item">
                              <a href="#">
                                <UiLightboxCommon
                                  lightImage={[
                                    "/static/media/avatar-4.b23e41d9.jpg",
                                  ]}
                                />
                              </a>
                            </div>
                            <div class="avatar-group-item">                             
                              <a href="#">
                                <UiLightboxCommon
                                  lightImage={[
                                    "/static/media/avatar-5.a5c59cee.jpg",
                                  ]}
                                />
                              </a>
                            </div>
                          </div>
                        </td>

                        <td class="d-grid gap-2">
                          <Link to="/stafftracking" className="btn btn-primary">
                            View
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th scope="col">
                         4
                        </th>
                        <td>
                          <h5 class="text-truncate font-size-14">
                            <a class="text-dark" href="/projects-overview/0">
                              Max
                            </a>
                          </h5>
                          <p class="text-muted mb-0">
                            It will be as simple as Occidental
                          </p>
                        </td>
                        <td>
                          <th scope="col">9:00 AM</th>
                        </td>
                        <td>
                          <th scope="col">9:00 AM</th>
                        </td>
                        <td>
                          <th scope="col">
                            <span class="bg-danger badge badge-warning">
                              Late
                            </span>
                          </th>
                        </td>
                        <td>
                          <th scope="col" class="text-danger">
                            65 Min
                          </th>
                        </td>

                        <td class="">
                        <div class="avatar-group">
                            <div class="avatar-group-item">
                              <a href="#">
                                <UiLightboxCommon
                                  lightImage={[
                                    "/static/media/avatar-4.b23e41d9.jpg",
                                  ]}
                                />
                              </a>
                            </div>
                            <div class="avatar-group-item">                             
                              <a href="#">
                                <UiLightboxCommon
                                  lightImage={[
                                    "/static/media/avatar-5.a5c59cee.jpg",
                                  ]}
                                />
                              </a>
                            </div>
                          </div>
                        </td>

                        <td class="d-grid gap-2">
                          <Link to="/stafftracking" className="btn btn-primary">
                            View
                          </Link>
                        </td>
                      </tr>

                      <tr>
                        <th scope="col">
                        5
                        </th>
                        <td>
                          <h5 class="text-truncate font-size-14">
                            <a class="text-dark" href="/projects-overview/0">
                              Lorren
                            </a>
                          </h5>
                          <p class="text-muted mb-0">
                            It will be as simple as Occidental
                          </p>
                        </td>
                        <td>
                          <th scope="col">9:00 AM</th>
                        </td>
                        <td>
                          <th scope="col">9:00 AM</th>
                        </td>
                        <td>
                          <th scope="col">
                            <span class="bg-success badge badge-success">
                              Leave Early
                            </span>
                          </th>
                        </td>
                        <td>
                          <th scope="col" class="text-danger">
                            65 Min
                          </th>
                        </td>

                        <td class="">
                        <div class="avatar-group">
                            <div class="avatar-group-item">
                              <a href="#">
                                <UiLightboxCommon
                                  lightImage={[
                                    "/static/media/avatar-4.b23e41d9.jpg",
                                  ]}
                                />
                              </a>
                            </div>
                            <div class="avatar-group-item">                             
                              <a href="#">
                                <UiLightboxCommon
                                  lightImage={[
                                    "/static/media/avatar-5.a5c59cee.jpg",
                                  ]}
                                />
                              </a>
                            </div>
                          </div>
                        </td>

                        <td class="d-grid gap-2">
                          <Link to="/stafftracking" className="btn btn-primary">
                            View
                          </Link>
                        </td>
                      </tr>
                    </thead>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <div className="text-center my-3">
                <Link to="#" className="text-success">
                  <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                  Load more
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

ProjectsList.propTypes = {
  compprojects: PropTypes.array,
  onGetProjects: PropTypes.func,
  onDeleteProject: PropTypes.func,
  onUpdateProject: PropTypes.func,
}

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
})

const mapDispatchToProps = dispatch => ({
  onGetProjects: () => dispatch(getProjects()),
  onUpdateProject: project => dispatch(updateProject(project)),
  onDeleteProject: project => dispatch(deleteProject(project)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectsList))
