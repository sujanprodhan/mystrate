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
import avatar1 from "../../assets/images/users/avatar-1.jpg"
import { Link } from "react-router-dom"

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
                  <Col lg="12">
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
                          <p className="mb-2">Security Company Name </p>
                          
                          <p className="mb-0">Committee Member</p>

                        </div>
                      </Media>
                      <Link class="btn btn-primary" to="/serviceprovidercontract" role="button">View</Link>

                    </Media>
                  </Col>

                  <Col lg="12" className="align-self-center mt-4">
                    <div className="text-lg-center mt-4 mt-lg-0">
                      <Row>
                        <Col xs="6">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Night Shift
                            </p>
                            <h5 className="mb-0">8</h5>
                          </div>
                        </Col>
                        <Col xs="6">
                          <div>
                            <p className="text-muted text-truncate mb-2">
                              Morning Shift
                            </p>
                            <h5 className="mb-0">12</h5>
                          </div>
                        </Col>
                       
                      </Row>
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
