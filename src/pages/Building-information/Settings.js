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

import avatar from "../../assets/images/users/avatar-1.jpg"
import brand from "../../assets/images/brands/brand.jpg";

export default class Settings extends Component {
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
        <Col xl={4}>
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
                        <h5 className="mb-1">the Henry Residency</h5>
                        <p className="mb-0">Off Old Klang Road</p>
                      </div>
                    </div>

                    <Dropdown
                      className="ms-2"
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggledropdown}
                    >
                      <DropdownToggle
                        className="btn btn-light btn-sm"
                        color="#eff2f7"
                        type="button"
                      >
                        <i className="bx bxs-cog align-middle me-1"></i> Setting
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
                    <Col xl={6}>
                      <div>
                        <p className="text-muted text-truncate mb-2">
                          <b>Community Status </b>
                        </p>
                        <p className="mb-0">JMB</p> 
                      </div>
                    </Col>
                    <div className="col-6">
                      <div>
                        {/* <p className="text-muted text-truncate mb-2"> */}
                        <p className="text-muted text-truncate mb-2">
                        <b> Developer </b>
                        </p>
                        <p className="text-truncate mb-2">Maxhilton Property Berhad</p>
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
                <h5 className="card-title mb-3 me-2">Authority </h5>

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
                  <p className="text-muted mb-1" style={{marginTop:"-15px"}}>Commissioner Of Building</p>
                  <br/><br/><h4 className="mb-3">2890</h4>
                  <p className="text-success mb-0">
                    {/* <span>
                      0.6 % <i className="mdi mdi-arrow-top-right ms-1"></i>
                    </span> */}
                    <span className="text-primary"> Active mystrata accounts</span>
                  </p>
                </div>
                <div className="ms-auto align-self-end">
                  {/* <i className="bx bx-group display-4 text-light"></i> */}
                  <img alt="sidebar bg image" width="50" height="50" className="" src={brand} />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-4">
              <div className="text-center">
                <div className="avatar-md mx-auto mb-4">
                  <div className="avatar-title bg-light rounded-circle text-primary h1">
                    <i className="mdi mdi-email-open"></i>
                  </div>
                </div>

                <Row className="justify-content-center">
                  <Col xl={10}>
                    <h4 className="text-primary">Get Building Report</h4>
                    <p className="text-muted font-size-14 mb-4">
                    Download full building report in your email daily.
                    </p>

                    <div className="input-group bg-light rounded">
                      <input
                        type="email"
                        className="form-control bg-transparent border-0"
                        placeholder="Enter Email address"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                        <button
                          className="btn btn-primary"
                          type="button"
                          id="button-addon2"
                        >
                          <i className="bx bxs-paper-plane"></i>
                        </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}
