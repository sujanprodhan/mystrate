import React, { Component } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Dropdown,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap"

import MonthlyEarning from "./MonthlyEarning-rep"
import avatar from "../../assets/images/users/avatar-1.jpg"

export default class Settingsnew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false,
    }
    this.toggledropdown = this.toggledropdown.bind(this)
  }

  toggledropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
  }
  render() {
    return (
      <React.Fragment>
        <Col xl={12}>


        <Card>
            <CardBody>
              <div className="d-flex flex-wrap">
                <h5 className="card-title mb-3 me-2">Area Cleaning Today</h5>

                <UncontrolledDropdown className="dropdown ms-auto dropdown-menu-end dropdown-menu">
                  <DropdownToggle
                    className="text-muted font-size-16"
                    color="white"
                    type="button"
                    tag="a"
                  >
                    <i className="mdi mdi-dots-horizontal"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Something else
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>

              <div className="d-flex flex-wrap">
                <div>
                  <p className="text-muted mb-1">Submitted by cleaning team</p>
                  <h4 className="mb-3">85%</h4>
                  <p className="text-success mb-0">
                    <span>
                      0.6 % <i className="mdi mdi-arrow-top-right ms-1"></i>
                    </span>
                  </p>
                </div>
                <div className="ms-auto align-self-end">
                  <i className="bx bx-group display-4 text-light"></i>
                </div>
              </div>
            </CardBody>
          </Card>

        
          <Card>
            <CardBody>
              <div className="media">
                <div className="me-3">
                  <img
                    src={avatar}
                    alt=""
                    className="avatar-sm rounded-circle img-thumbnail"
                  />
                </div>
                <div className="media-body">
                  <div className="media">
                    <div className="media-body">
                      <div className="text-muted">
                        <h5 className="mb-1">Assets Taggings</h5>
                        <p className="mb-0">all common area assets</p>
                      </div>
                    </div>

                    <Dropdown
                      className="ms-2"
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggledropdown}
                    >
                      <DropdownToggle
                        className="btn btn-primary btn-sm"
                        color="#eff2f7"
                        type="button"
                      >
                         View
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Something else
                        </Link>
                      </DropdownMenu>
                    </Dropdown>
                  </div>

                  <hr />

                  <Row>
                    <Col xl={4}>
                      <div>
                        <p className="text-muted text-truncate mb-2">
                          Total Assets
                        </p>
                        <h5 className="mb-0">132</h5>
                      </div>
                    </Col>
                    <div className="col-4">
                      <div>
                        <p className="text-muted text-truncate mb-2">
                          Updated todays
                        </p>
                        <h5 className="mb-0">2</h5>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="d-flex flex-wrap">
                <h5 className="card-title mb-3 me-2">25 Service providers</h5>

                <UncontrolledDropdown className="dropdown ms-auto dropdown-menu-end dropdown-menu">
                  <DropdownToggle
                    className="text-muted font-size-16"
                    color="white"
                    type="button"
                    tag="a"
                  >
                    <i className="mdi mdi-dots-horizontal"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Something else
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">
                      Separated link
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>

              <div className="d-flex flex-wrap">
                <div>
                  <p className="text-muted mb-1">Visited today</p>
                  <h4 className="mb-3">5</h4>
                  <p className="text-success mb-0">
                    <span>
                      0.6 % <i className="mdi mdi-arrow-top-right ms-1"></i>
                    </span>
                  </p>
                </div>
                <div className="ms-auto align-self-end">
                  <i className="bx bx-group display-4 text-light"></i>
                </div>
              </div>
            </CardBody>
          </Card>

          

          <MonthlyEarning/> 
          
          
        </Col>
      </React.Fragment>
    )
  }
}
