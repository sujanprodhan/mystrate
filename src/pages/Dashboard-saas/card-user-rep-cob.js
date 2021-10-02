import React, { Component } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledTooltip,
} from "reactstrap"
import { Link } from "react-router-dom"

class CardUsernew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenu: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  //Setting Menu
  toggleMenu() {
    this.setState(prevState => ({
      isMenu: !prevState.isMenu,
    }))
  }
  render() {
    return (
      <React.Fragment>
        <Col xl="4">
          <Card>
            <CardBody>
              <Dropdown
                isOpen={this.state.isMenu}
                toggle={this.toggleMenu}
                className="float-end ms-2"
              >
                <DropdownToggle tag="i" className="text-muted">
                  <i className="mdi mdi-dots-horizontal font-size-18"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem href="#">Action</DropdownItem>
                  <DropdownItem href="#">Another action</DropdownItem>
                  <DropdownItem href="#">Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <div>
                <div className="mb-4 me-3">
                  <i className="mdi mdi-account-circle text-primary h1"></i>
                </div>

                <div>
                  <h5>Running On Automation</h5>
                  <p className="text-muted mb-1">Auto Reminder & Fine Activated</p>
                  {/* <p className="text-muted mb-0">Next billing 15 December 2022</p> */}
                </div>
              </div>
            </CardBody>

            <CardBody className="border-top">
              <Row>
                <div className="col-sm-6">
                  <div>
                    <p className="fw-medium mb-2">Rank Among COB</p>
                    <h4>17</h4>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mt-4 mt-sm-0">
                    <p className="fw-medium mb-2">Awards & Badges</p>
                    <div className="d-inline-flex align-items-center mt-1">
                      <Link to="#" className="m-1" id="bitcoin">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-warning bg-soft text-warning font-size-18">
                            <i className="mdi mdi-bitcoin"></i>
                          </span>
                        </div>
                        <UncontrolledTooltip placement="top" target="bitcoin">
                          Bitcoin
                        </UncontrolledTooltip>
                      </Link>
                      <Link to="#" className="m-1" id="ethereum">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                            <i className="mdi mdi-ethereum"></i>
                          </span>
                        </div>
                        <UncontrolledTooltip placement="top" target="ethereum">
                          Ethereum
                        </UncontrolledTooltip>
                      </Link>
                      <Link to="#" className="m-1" id="litecoin">
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-info bg-soft text-info font-size-18">
                            <i className="mdi mdi-litecoin"></i>
                          </span>
                        </div>
                        <UncontrolledTooltip placement="top" target="litecoin">
                          Litecoin
                        </UncontrolledTooltip>
                      </Link>
                    </div>
                  </div>
                </div>
              </Row>
            </CardBody>

            <CardFooter className="bg-transparent border-top">
              <div className="text-center">
                <Link to="#" className="btn btn-outline-light me-2 w-md">Remander issued </Link>{" "}
                <Link to="#" className="btn btn-primary me-2 w-md">Penalty Issued</Link>
              </div>
            </CardFooter>
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}

export default CardUsernew
