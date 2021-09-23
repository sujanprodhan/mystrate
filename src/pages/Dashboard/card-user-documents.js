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
import avatar1 from "../../assets/images/users/attendance.jpg"

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
                          src={avatar1}
                          alt=""
                          className="avatar-md rounded-circle img-thumbnail"
                        />
                      </div>
                      <Media className="align-self-center" body>
                        <div className="text-muted">
                          <p className="mb-2">Submission Dashboard</p>
                          <h5 className="mb-1">MYSTRATA</h5>
                          <p className="mb-0">Connected To All COB</p>
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
                             Late
                            </p>
                            <h5 className="mb-0">48</h5>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Warning
                            </p>
                            <h5 className="mb-0">4</h5>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Compound
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
                          Submit New

                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another action</DropdownItem>
                          <DropdownItem href="#">Something else</DropdownItem>
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
