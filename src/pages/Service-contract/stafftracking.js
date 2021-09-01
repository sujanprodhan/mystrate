import React, { Component } from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import { map } from "lodash"
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Media,
  Row,
  Table,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import mini card widgets
import MiniCards from "./mini-card"

//Import Images
import profile1 from "assets/images/profile-img.png"
import profile2 from "assets/images/error-img.png"

// import charts
import ApexRevenue from "./ApexRevenue"
import { getUserProfile } from "store/actions"
import images from "assets/images"
import ToolkitProvider from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"
import projectColumns from "./projectColumns"
import ProjectsList from "./projects-list"

class Stafftracking extends Component {
  constructor(props) {
    super(props)
    this.state = {
      miniCards: [
        {
          title: "Total leave Taken",
          iconClass: "bx-check-circle",
          text: "3 Day",
        },
        { title: "Absent", iconClass: "bx-hourglass", text: "12 Day" },
        { title: "Missing Hours", iconClass: "bx-package", text: "54 Hours" },
      ],
    }
  }

  componentDidMount() {
    const { onGetUserProfile } = this.props
    onGetUserProfile()
  }

  render() {
    const { userProfile } = this.props

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Profile | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs breadcrumbItem="Staff Trackig" />

            <Row>
              <Col xl="4">
                <Card className="overflow-hidden">
                  <div className="bg-primary bg-soft">
                    <Row>
                      <Col xs="7">
                        <div className="text-primary p-3">
                          <h5 className="text-primary">Cleaner</h5>
                          <p>Everything you need to know about Cynthia </p>
                        </div>
                      </Col>
                      <Col xs="5" className="align-self-end">
                        <img src={profile2} alt="" className="img-fluid" />
                      </Col>
                    </Row>
                  </div>
                  <CardBody className="pt-0">
                    <Row>
                      <Col sm="4">
                        <div className="avatar-md profile-user-wid mb-4">
                          <img
                            src={images[userProfile.img]}
                            alt=""
                            className="img-thumbnail rounded-circle"
                          />
                        </div>
                        <h5 className="font-size-15 text-truncate">
                          {userProfile.name}
                        </h5>
                        <p className="text-muted mb-0 text-truncate">
                          {userProfile.designation}
                        </p>
                      </Col>

                      <Col sm={8}>
                        <div className="pt-4">
                          <Row>
                            <Col xs="6">
                              <h5 className="font-size-15">
                                {userProfile.projectCount}
                              </h5>
                              <p className="text-muted mb-0">Projects</p>
                            </Col>
                            <Col xs="6">
                              <h5 className="font-size-15">
                                ${userProfile.revenue}
                              </h5>
                              <p className="text-muted mb-0">Revenue</p>
                            </Col>
                          </Row>
                          <div className="mt-4">
                            <Link
                              to=""
                              className="btn btn-primary btn-sm"
                            >
                              Cleaner Company{" "}
                              <i className="mdi mdi-arrow-right ms-1" />
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <CardTitle className="mb-4 h4">Personal Information</CardTitle>

                    <p className="text-muted mb-4">
                      {userProfile.personalDetail}
                    </p>
                    <div className="table-responsive">
                      <Table className="table-nowrap mb-0">
                        <tbody>
                          <tr>
                            <th scope="row">Full Name :</th>
                            <td>{userProfile.name}</td>
                          </tr>
                          <tr>
                            <th scope="row">Mobile :</th>
                            <td>{userProfile.phone}</td>
                          </tr>
                          <tr>
                            <th scope="row">E-mail :</th>
                            <td>{userProfile.email}</td>
                          </tr>
                          
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>

                
              </Col>

              <Col xl="8">
                <Row>
                  {this.state.miniCards.map((card, key) => (
                    <MiniCards
                      title={card.title}
                      text={card.text}
                      iconClass={card.iconClass}
                      key={"_card_" + key}
                    />
                  ))}
                </Row>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4 h4">Task Submitted</CardTitle>
                    <div id="revenue-chart" className="apex-charts">
                      <ApexRevenue />
                    </div>
                  </CardBody>
                </Card>
                
              </Col>
            </Row>

             <ProjectsList />
            
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4 h4">Staff Tracking</CardTitle>
                    <ToolkitProvider
                      keyField="id"
                      data={userProfile.projects || []}
                      columns={projectColumns()}
                      bootstrap4
                    >
                      {toolkitProps => (
                        <React.Fragment>
                          <Row>
                            <Col xl="12">
                              <div className="table-responsive">
                                <BootstrapTable
                                  responsive
                                  remote
                                  bordered={false}
                                  striped={false}
                                  classes={
                                    "table table-nowrap table-hover mb-0"
                                  }
                                  headerWrapperClasses={"tbody-light"}
                                  {...toolkitProps.baseProps}
                                />
                              </div>
                            </Col>
                          </Row>
                        </React.Fragment>
                      )}
                    </ToolkitProvider>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

Stafftracking.propTypes = {
  userProfile: PropTypes.any,
  onGetUserProfile: PropTypes.func,
}

const mapStateToProps = ({ contacts }) => ({
  userProfile: contacts.userProfile,
})

const mapDispatchToProps = dispatch => ({
  onGetUserProfile: () => dispatch(getUserProfile()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Stafftracking))
