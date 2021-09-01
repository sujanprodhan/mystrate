import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import MetaTags from 'react-meta-tags';
import { isEmpty, map, size } from "lodash"
import { Link, withRouter } from "react-router-dom"
import classNames from "classnames"
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import Settingsnew from "./Settings-rep"
import CardUserlatest from "./CardUser-latest"
import TotalSellingProduct from "./total-selling-product"
import Tasks from "./tasks"

import ReactApexChart from "react-apexcharts"

//Import Images
import images from "../../assets/images"

import { getTasks } from "../../store/tasks/actions"
import { options, series, statusClasses } from "common/data/tasks"


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

class TasksListnew extends Component {
  state = {
    cardreport: {
        options: options,
        series: series,
      },
  }

  componentDidMount() {
    const { onGetTasks } = this.props
    onGetTasks()
  }

  render() {
    const { tasks } = this.props
    const recentTasks = tasks.find(task => task.title === "Sceduled Preventive Maintainence")

    return (
      <React.Fragment>
        <div className="">
          <MetaTags>
            <title>Task List | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
         
            
            <Row>
              <Col lg={8}>
               
                  <div class="card">
    <div class="card-body">
      <div class="row">
        
          <div class="mb-4 card-title">Overdue</div>
        
        
         
       
      </div>
      <div class="table-responsive">
        <table class="table table-nowrap align-middle mb-0">
          <tbody>
            <tr>
              
              <td>
                <h5 class="text-truncate font-size-14 m-0"><Link class="text-dark" to="/tasks-page">Create a Skote Dashboard UI</Link></h5>
              </td>
              <td>
                <div class="avatar-group">
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <img src="/static/media/avatar-2.feb0f89d.jpg" class="rounded-circle avatar-xs" alt=""/>
                    </Link>
                  </div>
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <img src="/static/media/avatar-1.3921191a.jpg" class="rounded-circle avatar-xs" alt="" />
                    </Link>
                  </div>
                </div>
              </td>
              <td>
                <div class="text-center"><a class="btn btn-primary" href="#" role="button">View</a>
                </div>
              </td>
            </tr>
            <tr>
              
              <td>
                <h5 class="text-truncate font-size-14 m-0"><Link class="text-dark" to="/tasks-page">Create a New Landing UI</Link></h5>
              </td>
              <td>
                <div class="avatar-group">
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <img src="/static/media/avatar-4.b23e41d9.jpg" class="rounded-circle avatar-xs" alt="" />
                    </Link>
                  </div>
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <img src="/static/media/avatar-5.a5c59cee.jpg" class="rounded-circle avatar-xs" alt="" />
                    </Link>
                  </div>
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <div class="avatar-xs"><span class="avatar-title rounded-circle bg-success text-white font-size-16">3 +</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </td>
              <td>
                <div class="text-center"><a class="btn btn-primary" href="#" role="button">View</a>
                </div>
              </td>
            </tr>
            <tr>
              
              <td>
                <h5 class="text-truncate font-size-14 m-0"><Link class="text-dark" to="/tasks-page">Create a Skote Logo</Link></h5>
              </td>
              <td>
                <div class="avatar-group">
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <div class="avatar-xs"><span class="avatar-title rounded-circle bg-success text-white font-size-16">F</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </td>
              <td>
               <div class="text-center"><a class="btn btn-primary" href="#" role="button">View</a>
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
                  <div class="mb-4 card-title">In Progress</div>
        
      
      </div>
      <div class="table-responsive">
        <table class="table table-nowrap align-middle mb-0">
          <tbody>
            <tr>
              
              <td>
                <h5 class="text-truncate font-size-14 m-0"><a class="text-dark" href="/tasks-page">Brand logo design</a></h5>
              </td>
              <td>
                <div class="avatar-group">
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <img src="/static/media/avatar-7.5ba5195e.jpg" class="rounded-circle avatar-xs" alt="" />
                    </Link>
                  </div>
                </div>
              </td>
              <td>
                <div class="text-center"><a class="btn btn-primary" href="#" role="button">View</a>
                </div>
              </td>
            </tr>
            <tr>
              
              <td>
                <h5 class="text-truncate font-size-14 m-0"><Link class="text-dark" to="/tasks-page">Create a Blog Template UI</Link></h5>
              </td>
              <td>
                <div class="avatar-group">
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <div class="avatar-xs"><span class="avatar-title rounded-circle bg-success text-white font-size-16">S</span>
                      </div>
                    </Link>
                  </div>
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <img src="/static/media/avatar-8.ad5418a9.jpg" class="rounded-circle avatar-xs" alt="" />
                    </Link>
                  </div>
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <div class="avatar-xs"><span class="avatar-title rounded-circle bg-success text-white font-size-16">1 +</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </td>
              <td>
                <div class="text-center"><a class="btn btn-primary" href="#" role="button">View</a>
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
        
          <div class="mb-4 card-title">Completed  </div>
       
       
      </div>
      <div class="table-responsive">
        <table class="table table-nowrap align-middle mb-0">
          <tbody>
            <tr>
             
              <td>
                <h5 class="text-truncate font-size-14 m-0"><Link class="text-dark" to="/tasks-page">Redesign - Landing page</Link></h5>
              </td>
              <td>
                <div class="avatar-group">
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <img src="/static/media/avatar-6.dc44eabf.jpg" class="rounded-circle avatar-xs" alt="" />
                    </Link>
                  </div>
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <div class="avatar-xs"><span class="avatar-title rounded-circle bg-success text-white font-size-16">F</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </td>
              <td>
                <div class="text-center"><a class="btn btn-primary" href="#" role="button">View</a>
                </div>
              </td>
            </tr>
            <tr>
             
              <td>
                <h5 class="text-truncate font-size-14 m-0"><Link class="text-dark" to="/tasks-page">Multipurpose Landing</Link></h5>
              </td>
              <td>
                <div class="avatar-group">
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <img src="/static/media/avatar-7.5ba5195e.jpg" class="rounded-circle avatar-xs" alt="" />
                    </Link>
                  </div>
                </div>
              </td>
              <td>
                <div class="text-center"><a class="btn btn-primary" href="#" role="button">View</a>
                </div>
              </td>
            </tr>
            <tr>
             
              <td>
                <h5 class="text-truncate font-size-14 m-0"><Link class="text-dark" to="/tasks-page">Create a Blog Template UI</Link></h5>
              </td>
              <td>
                <div class="avatar-group">
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <img src="/static/media/avatar-4.b23e41d9.jpg" class="rounded-circle avatar-xs" alt="" />
                    </Link>
                  </div>
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <div class="avatar-xs"><span class="avatar-title rounded-circle bg-success text-white font-size-16">S</span>
                      </div>
                    </Link>
                  </div>
                  <div class="avatar-group-item">
                    <Link class="d-inline-block" to="/tasks-page">
                      <div class="avatar-xs"><span class="avatar-title rounded-circle bg-success text-white font-size-16">1 +</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </td>
              <td>
               <div class="text-center"><a class="btn btn-primary" href="#" role="button">View</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
                
                
                <CardUserlatest cardreport={this.state.cardreport} />
                <Card>
                  <CardBody>
                  <Row>
                    {/* total selling product */}
              <TotalSellingProduct />

              {/* tasks */}
              <Tasks />
              </Row>
                  </CardBody>
                </Card>

              </Col>

              <Col lg={4}>
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

                {!isEmpty(recentTasks) && (
                  <Card>
                    <CardBody>
                      <CardTitle className="mb-4">
                        {recentTasks.title}
                      </CardTitle>
                      <div className="table-responsive">
                        <table className="table table-nowrap align-middle mb-0">
                          <tbody>
                            {map(recentTasks.tasks, (item, i) => (
                              <tr key={i}>
                                <td>
                                  <h5 className="text-truncate font-size-14 m-0">
                                    <Link to="#" className="text-dark">
                                      {item.description}
                                    </Link>
                                  </h5>
                                </td>
                                <td>
                                  <div className="avatar-group">
                                    {map(
                                      item.members,
                                      (member, index) =>
                                        index < 2 && (
                                          <div className="avatar-group-item" key={'member-' + index}>
                                            <Link
                                              to="#"
                                              className="d-inline-block"
                                            >
                                              {member.userImg ? (
                                                <img
                                                  src={images[member.userImg]}
                                                  className="rounded-circle avatar-xs"
                                                  alt=""
                                                />
                                              ) : (
                                                  <div className="avatar-xs">
                                                    <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                                      {member.username}
                                                    </span>
                                                  </div>
                                                )}
                                            </Link>
                                          </div>
                                        )
                                    )}
                                    {size(item.members) > 2 && (
                                      <div className="avatar-group-item">
                                        <Link
                                          to="#"
                                          className="d-inline-block"
                                        >
                                          <div className="avatar-xs">
                                            <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                              {size(item.members) - 2} +
                                          </span>
                                          </div>
                                        </Link>
                                      </div>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardBody>
                  </Card>



                )}

              <Card>
                  <CardBody>
                    <Settingsnew />
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
}

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.tasks,
})

const mapDispatchToProps = dispatch => ({
  onGetTasks: () => dispatch(getTasks()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TasksListnew))
