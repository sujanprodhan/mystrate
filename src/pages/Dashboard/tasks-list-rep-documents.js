import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import MetaTags from "react-meta-tags"
import { isEmpty, map, size } from "lodash"
import { Link, withRouter } from "react-router-dom"
import classNames from "classnames"
import { Card, CardBody, Col, Container, Row, Modal, Button, ModalHeader, ModalBody } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import { AvForm, AvField } from "availity-reactstrap-validation"
import BootstrapTable from "react-bootstrap-table-next"
import Settingsnew from "./Settings-rep"
import CardUserlatest from "./CardUser-latest"
import TotalSellingProduct from "./total-selling-product"
import Tasks from "./tasks"

import ReactApexChart from "react-apexcharts"
import Storage from "../../pages/FileManager/StorageDocuments";

//Import Images
import images from "../../assets/images"

import { getTasks } from "../../store/tasks/actions"
import { options, series, statusClasses } from "common/data/tasks"
import {
  getUsers,
  addNewUser,
  updateUser,
  deleteUser
} from "store/contacts/actions"
const series3 = [
  {
    name: "Current",
    data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
  },
  {
    name: "Previous",
    data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
  },
]

const storageOptions = {
  chart: {
    height: 150,
    type: "radialBar",
    sparkline: {
      enabled: true,
    },
  },
  colors: ["#556ee6"],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#e7e7e7",
        strokeWidth: "97%",
        margin: 5, // margin is in pixels
      },

      hollow: {
        size: "60%",
      },

      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: -2,
          fontSize: "16px",
        },
      },
    },
  },
  grid: {
    padding: {
      top: -10,
    },
  },
  stroke: {
    dashArray: 3,
  },
  labels: ["Storage"],
}


const options3 = {
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#556ee6", "#f1b44c"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [20, 100, 100, 100],
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },

  markers: {
    size: 3,
    strokeWidth: 3,

    hover: {
      size: 4,
      sizeOffset: 2,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
  },
}
const storageSeries = [76]
class TasksListnew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filemanager: {
        options: storageOptions,
        series: storageSeries,
      },
      cardreport: {
        options: options,
        series: series,
      },
      users: [],
      modal: false,
      contactListColumns: [
        {
          text: "id",
          dataField: "id",
          sort: true,
          hidden: true,
          formatter: (cellContent, user) => (
            <>
              {user.id}
            </>
          ),
        },
        // {
        //   dataField: "img",
        //   text: "#",
        //   formatter: (cellContent, user) => (
        //     <>
        //       {!user.img ? (
        //         <div className="avatar-xs">
        //           <span className="avatar-title rounded-circle">
        //             {user.name.charAt(0)}
        //           </span>
        //         </div>
        //       ) : (
        //         <div>
        //           <img
        //             className="rounded-circle avatar-xs"
        //             src={images[user.img]}
        //             alt=""
        //           />
        //         </div>
        //       )}
        //     </>
        //   ),
        // },
        {
          text: "Files",
          dataField: "name",
          sort: true,
          formatter: (cellContent, user) => (
            <>
              <h5 className="font-size-14 mb-1">
                <Link to="#" className="text-dark">
                  {user.name}
                </Link>
              </h5>
              {/* <p className="text-muted mb-0">{user.designation}</p> */}
            </>
          ),
        },
        // {
        //   dataField: "email",
        //   text: "Email",
        //   sort: true,
        // },
        {
          dataField: "date",
          text: "Date",
          sort: true,
        },
        {
          text: "Status",
          dataField: "tags",
          sort: true,
          formatter: (cellContent, user) => (
            <>
              {map(
                user.tags,
                (tag, index) =>
                  index < 1 && (
                    <Link
                      to="#"
                      className={ "badge font-size-11 m-1 " + this.buttonColor(tag)}
                      key={"_skill_" + user.id + index}
                    >
                      {tag}
                    </Link>
                  )
              )}
              {/* {size(user.tags) > 2 && (
                <Link
                  to="#"
                  className="badge badge-soft-primary font-size-11 m-1"
                  key={"_skill_" + user.id}
                >
                  {size(user.tags) - 1} + more
                </Link>
              )} */}
            </>
          ),
        },
        {
          dataField: "projects",
          text: "Projects",
          sort: true,
        },
        {
          dataField: "menu",
          isDummyField: true,
          editable: false,
          text: "Action",
          formatter: (cellContent, user) => (
            <div className="d-flex gap-3">
              <Link className="text-success" to="#"><i className="mdi mdi-cloud-download font-size-18" id="edittooltip"></i></Link>
              <Link className="text-success" to="#"><i className="mdi mdi-pencil font-size-18" id="edittooltip" onClick={() => this.handleUserClick(user)}></i></Link>
              <Link className="text-danger" to="#"><i className="mdi mdi-delete font-size-18" id="deletetooltip" onClick={() => this.handleDeleteUser(user)}></i></Link>
            </div>
          ),
        },
      ]
    }
    this.handleUserClick = this.handleUserClick.bind(this)
    this.toggle = this.toggle.bind(this)
    this.handleValidUserSubmit = this.handleValidUserSubmit.bind(this)
    this.handleUserClicks = this.handleUserClicks.bind(this)
  }

  buttonColor(tag) {
    let className = "";
    if(tag == "Warning"){
      className = "badge-soft-warning";
    }
    else if(tag == "Late"){
      className = "badge-soft-danger";
    }
    else if(tag == "Done"){
      className = "badge-soft-success";
      
    }
    else if(tag == "Compound"){
      className = "badge-soft-primary";
    }
    return className;

  }

  componentDidMount() {
    const { onGetTasks } = this.props
    onGetTasks()
    const { users, onGetUsers } = this.props
    if(users && !users.length) {
      onGetUsers()
    }
    this.setState({ users })
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  handleUserClicks = arg => {
    this.setState({ users: '', isEdit: false })
    this.toggle()
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { users } = this.props
    if (!isEmpty(users) && size(prevProps.users) !== size(users)) {
      this.setState({ users: {}, isEdit: false })
    }
  }

  /* Insert,Update Delete data */

  handleDeleteUser = (user) => {
    const { onDeleteUser } = this.props
    onDeleteUser(user)
  }

  handleUserClick = arg => {
    const user = arg

    this.setState({
      users: {
        id: user.id,
        name: user.name,
        designation: user.designation,
        email: user.email,
        tags: user.tags,
        projects: user.projects
      },
      isEdit: true,
    })

    this.toggle()
  }

  /**
   * Handling submit user on user form
   */
  handleValidUserSubmit = (e, values) => {
    const { onAddNewUser, onUpdateUser } = this.props
    const { isEdit, users, selectedUser } = this.state

    if (isEdit) {
      const updateUser = {
        id: users.id,
        name: values.name,
        designation: values.designation,
        tags: values.tags,
        email: values.email,
        projects: values.projects
      }

      // update user
      onUpdateUser(updateUser)
    } else {

      const newUser = {
        id: Math.floor(Math.random() * (30 - 20)) + 20,
        name: values["name"],
        designation: values["designation"],
        email: values["email"],
        tags: values["tags"],
        projects: values["projects"]
      }
      // save new user
      onAddNewUser(newUser)
    }
    this.setState({ selectedUser: null })
    this.toggle()
  }

  render() {
    const { tasks } = this.props
    const recentTasks = tasks.find(
      task => task.title === "Sceduled Preventive Maintainence"
    )

    const { SearchBar } = Search;

    const { users } = this.props

    const { isEdit } = this.state

    const pageOptions = {
      sizePerPage: 10,
      totalSize: users.length, // replace later with size(users),
      custom: true,
    }

    const defaultSorted = [{
      dataField: 'id', // if dataField is not match to any column you defined, it will be ignored.
      order: 'desc' // desc or asc
    }];

    const selectRow = {
      mode: 'checkbox'
    };

    return (
      <React.Fragment>
        <div className="">
          <MetaTags>
            <title>Importants file and documents</title>
          </MetaTags>
          <Breadcrumbs breadcrumbItem="Submission List" />

          <Row>
            <Col lg={9}>
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="mb-4 card-title">Late</div>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-nowrap align-middle mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <h5 class="text-truncate font-size-14 m-0">
                              <Link class="text-dark" to="/tasks-page">
                                January 2021 - Minutes Of Meeting
                              </Link>
                            </h5>
                          </td>
                          <td>1st Jan 2021</td>
                          <td><span class="badge badge-soft-danger font-size-12">Late </span></td>
                          <td>
                            <div class="text-center">
                              <a class="btn btn-primary" href="#" role="button">
                                Submit
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 class="text-truncate font-size-14 m-0">
                              <Link class="text-dark" to="/tasks-page">
                              January 2021 - Monthly Account 
                              </Link>
                            </h5>
                          </td>
                          <td>
                          1st Jan 2021
                          </td>
                          <td><span class="badge badge-soft-danger font-size-12">Late </span></td>
                          <td>
                            <div class="text-center">
                              <a class="btn btn-primary" href="#" role="button">
                                Submit
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="49%"> 
                            <h5 class="text-truncate font-size-14 m-0">
                              <Link class="text-dark" to="/tasks-page">
                              December 2020 - Monthly Minutes Of Meeting 
                              </Link>
                            </h5>
                          </td>
                          <td>
                          1st Dec 2021	
                          </td>
                          <td><span class="badge badge-soft-danger font-size-12">Late </span></td>
                          <td>
                            <div class="text-center">
                              <a class="btn btn-primary" href="#" role="button">
                                Submit
                              </a>
                            </div>
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
                    <div class="mb-4 card-title">Warning</div>
                  </div>
                  <div class="table-responsive">
                  <table class="table table-nowrap align-middle mb-0">
                      <tbody>
                        <tr>
                          <td width="00">
                            <h5 class="text-truncate font-size-14 m-0">
                              <Link class="text-dark" to="/tasks-page">
                              December 2020 - AGM Minutes 
                              </Link>
                            </h5>
                          </td>
                          <td>1st Jan 2021</td>
                          <td><span class="badge badge-soft-warning font-size-12">Waiting </span></td>
                          <td>
                            <div class="text-center">
                              <a class="btn btn-primary" href="#" role="button">
                                Submit
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 class="text-truncate font-size-14 m-0">
                              <Link class="text-dark" to="/tasks-page">
                              December 2020 - Audited Account 
                              </Link>
                            </h5>
                          </td>
                          <td>
                          1st Jan 2021
                          </td>
                          <td><span class="badge badge-soft-warning font-size-12">Waiting </span></td>
                          <td>
                            <div class="text-center">
                              <a class="btn btn-primary" href="#" role="button">
                                Submit
                              </a>
                            </div>
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
                    <div class="mb-4 card-title">Compound </div>
                  </div>
                  <div class="table-responsive">
                  <table class="table table-nowrap align-middle mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <h5 class="text-truncate font-size-14 m-0">
                              <Link class="text-dark" to="/tasks-page">
                              December 2019 - AGM Minutes 
                              </Link>
                            </h5>
                          </td>
                          <td>1st Jan 2021</td>
                          <td><span class="badge badge-soft-primary font-size-12">Compund </span></td>
                          <td>
                            <div class="text-center">
                              <a class="btn btn-primary" href="#" role="button">
                                Submit
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 class="text-truncate font-size-14 m-0">
                              <Link class="text-dark" to="/tasks-page">
                              December 2019 - Audited Account 
                              </Link>
                            </h5>
                          </td>
                          <td>
                          1st Jan 2021
                          </td>
                          <td><span class="badge badge-soft-primary font-size-12">Compund </span></td>
                          <td>
                            <div class="text-center">
                              <a class="btn btn-primary" href="#" role="button">
                                Submit
                              </a>
                            </div>
                          </td>
                        </tr>                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </Col>

            <Col lg={3}> 
                   
             <Storage filemanager={this.state.filemanager} />
          
            
            </Col>
          </Row>

          <Row>
          <Breadcrumbs breadcrumbItem="All Document " />
              <Col lg="12">
                <Card>
                  <CardBody>

                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField='id'
                      columns={this.state.contactListColumns}
                      data={users}
                    >
                      {
                        ({
                          paginationProps,
                          paginationTableProps
                        }) => (
                          <ToolkitProvider
                            keyField='id'
                            columns={this.state.contactListColumns}
                            data={users}
                            search
                          >
                            {
                              toolkitprops => (
                                <React.Fragment>
                                  <Row className="mb-2">
                                    <Col sm="4">
                                      <div className="search-box ms-2 mb-2 d-inline-block">
                                        <div className="position-relative">
                                          <SearchBar {...toolkitprops.searchProps} />
                                          <i className="bx bx-search-alt search-icon" />
                                        </div>
                                      </div>
                                    </Col>
                                    <Col sm="8">
                                      <div className="text-sm-end">
                                        <Button
                                          color="primary"
                                          className="font-16 btn-block btn btn-primary"
                                          onClick={this.handleUserClicks}
                                        >
                                          <i className="mdi mdi-plus-circle-outline me-1" />
                                        Submit New
                                    </Button>
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col xl="12">
                                      <div className="table-responsive">
                                        <BootstrapTable
                                          {...toolkitprops.baseProps}
                                          {...paginationTableProps}
                                          selectRow={selectRow}
                                          defaultSorted={defaultSorted}
                                          classes={
                                            "table align-middle table-nowrap table-hover"
                                          }
                                          bordered={false}
                                          striped={false}
                                          responsive
                                        />

                                        <Modal
                                          isOpen={this.state.modal}
                                          className={this.props.className}
                                        >
                                          <ModalHeader toggle={this.toggle} tag="h4">
                                            {!!isEdit ? "Edit User" : "Add User"}
                                          </ModalHeader>
                                          <ModalBody>
                                            <AvForm
                                              onValidSubmit={
                                                this.handleValidUserSubmit
                                              }
                                            >
                                              <Row form>
                                                <Col className="col-12">
                                                  <div className="mb-3">

                                                    <AvField
                                                      name="name"
                                                      label="Name"
                                                      type="text"
                                                      errorMessage="Invalid name"
                                                      validate={{
                                                        required: { value: true },
                                                      }}
                                                      value={this.state.users.name || ""}
                                                    />
                                                  </div>
                                                  <div className="mb-3">

                                                    <AvField
                                                      name="designation"
                                                      label="Designation"
                                                      type="text"
                                                      errorMessage="Invalid Designation"
                                                      validate={{
                                                        required: { value: true },
                                                      }}
                                                      value={this.state.users.designation || ""}
                                                    />
                                                  </div>
                                                  <div className="mb-3">
                                                    <AvField
                                                      name="email"
                                                      label="Email"
                                                      type="email"
                                                      errorMessage="Invalid Email"
                                                      validate={{
                                                        required: { value: true },
                                                      }}
                                                      value={this.state.users.email || ""}
                                                    />
                                                  </div>
                                                  <div className="mb-3">
                                                    <AvField type="select" name="tags" className="form-select" label="Option" helpMessage="MULTIPLE!" multiple={true} required
                                                      value={this.state.users.tags || ""}

                                                    >
                                                      <option>Photoshop</option>
                                                      <option>illustrator</option>
                                                      <option>Html</option>
                                                      <option>Php</option>
                                                      <option>Java</option>
                                                      <option>Python</option>
                                                      <option>UI/UX Designer</option>
                                                      <option>Ruby</option>
                                                      <option>Css</option>
                                                    </AvField>
                                                  </div>
                                                  <div className="mb-3">
                                                    <AvField
                                                      name="projects"
                                                      label="Projects"
                                                      type="text"
                                                      errorMessage="Invalid Projects"
                                                      validate={{
                                                        required: { value: true },
                                                      }}
                                                      value={this.state.users.projects || ""}
                                                    />
                                                  </div>
                                                </Col>

                                              </Row>
                                              <Row>
                                                <Col>
                                                  <div className="text-end">

                                                    <button
                                                      type="submit"
                                                      className="btn btn-success save-user"
                                                    >
                                                      Save
                                                    </button>
                                                  </div>
                                                </Col>
                                              </Row>
                                            </AvForm>
                                          </ModalBody>
                                        </Modal>
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row className="align-items-md-center mt-30">
                                    <Col className="pagination pagination-rounded justify-content-end mb-2">
                                      <PaginationListStandalone
                                        {...paginationProps}
                                      />
                                    </Col>
                                  </Row>
                                </React.Fragment>
                              )}
                          </ToolkitProvider>
                        )}
                    </PaginationProvider>
                  </CardBody>
                </Card>
              </Col>
            </Row>


        </div>
      </React.Fragment>
    )
  }
}

TasksListnew.propTypes = {
  tasks: PropTypes.array,
  onGetTasks: PropTypes.func,
  users: PropTypes.array,
  onGetUsers: PropTypes.func,
  onAddNewUser: PropTypes.func,
  onDeleteUser: PropTypes.func,
  onUpdateUser: PropTypes.func
}

const mapStateToProps = ({ tasks,contacts }) => ({
  tasks: tasks.tasks,
  users: contacts.users,
})

const mapDispatchToProps = dispatch => ({
  onGetTasks: () => dispatch(getTasks()),
  onGetUsers: () => dispatch(getUsers()),
  onAddNewUser: user => dispatch(addNewUser(user)),
  onUpdateUser: user => dispatch(updateUser(user)),
  onDeleteUser: user => dispatch(deleteUser(user)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TasksListnew))


