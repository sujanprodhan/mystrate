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
import avatar1 from "../../assets/images/users/user11.jpg"

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
                          <p className="mb-2">Welcome to Mystrata</p>
                          <h5 className="mb-1">Lemonade Management Sdn Bhd</h5>
                          <p className="mb-0">PM 1057</p>
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
                             Projects
                            </p>
                            <h5 className="mb-0">16</h5>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Staff
                            </p>
                            <h5 className="mb-0">40</h5>
                          </div>
                        </Col>
                        <Col xs="4">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Redflags
                            </p>
                            <h5 className="mb-0">24</h5>
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
                          Notice & Upgrade
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