import React, { Component } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  Media,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

//Import Images
import attendanceImg from "../../assets/images/users/attendance.jpg"

class CardUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      settings_Menu: false,
    }
    this.toggleSettings = this.toggleSettings.bind(this)
  }

  //Setting Menu
  toggleSettings() {
    this.setState(prevState => ({
      settings_Menu: !prevState.settings_Menu,
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <Row>
                  <Col lg="4">
                    <Media>
                      <div className="me-3">
                        <img
                          src={attendanceImg}
                          alt=""
                          className="avatar-md rounded-circle img-thumbnail"
                        />
                      </div>
                      <Media className="align-self-center" body>
                        <div className="text-muted">
                          <p className="mb-2">Attendee Dashboard</p>
                          <h5 className="mb-1">PAYHOUR</h5>
                          <p className="mb-0">Powered</p>
                        </div>
                      </Media>
                    </Media>
                  </Col>

                  <Col lg="4" className="align-self-center">
                    <div className="text-lg-center mt-4 mt-lg-0">
                      <Row>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Total Staff
                            </p>
                            <h5 className="mb-0">48</h5>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Department
                            </p>
                            <h5 className="mb-0">4</h5>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Absent
                            </p>
                            <h5 className="mb-0">5</h5>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col lg="4" className="d-none d-lg-block">
                    <div className="clearfix mt-4 mt-lg-0">
                      <Dropdown
                        isOpen={this.state.settings_Menu}
                        toggle={this.toggleSettings}
                        className="float-end"
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-primary"
                        >
                          <i className="bx bxs-cog align-middle me-1"></i>{" "}
                          Settings
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem href="#">Change Date</DropdownItem>
                          <DropdownItem href="#">Print Monthly Report</DropdownItem>
                          
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default CardUser
