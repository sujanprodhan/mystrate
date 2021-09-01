import React, { Component } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap"
import classnames from "classnames"
import img1 from "../../assets/images/small/img-6.jpg"
import img2 from "../../assets/images/small/img-2.jpg"
import img3 from "../../assets/images/small/img-1.jpg"
import img4 from "../../assets/images/small/buildinginfo.png"

//SimpleBar
import SimpleBar from "simplebar-react"

export default class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: "1",
      dropdownOpen: false,
    }
    this.toggleTab = this.toggleTab.bind(this)
    this.toggledropdown = this.toggledropdown.bind(this)
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }
  toggledropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
  }
  render() {
    return (
      <React.Fragment>
        <Col xl={4} lg={6}>
          <Card>
            <CardHeader className="bg-transparent justify-content-center row">
              <div className="d-flex flex-wrap justify-content-center">
                <div className="me-2 ali">
                  <h3 className="mt-4 mb-0 text-primary">BUILDING STATUS</h3>
                 
                </div>
                <img
                                src={img4}
                                alt=""
                                className=" justify-content-center mt-5 mb-5"
                              />
                              <div className=""><h4>SILVER</h4></div>
                              
                
              </div>
             
More Than 50% Digitization

              
            </CardHeader>

            <CardBody>
              
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}
