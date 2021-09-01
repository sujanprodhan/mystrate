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

class Servicecontract extends Component {
  constructor(props) {
    super(props)
    this.state = {
      miniCards: [
        {
          title: "Total Missing Hours",
          iconClass: "bx-check-circle",
          text: "3 hour",
        },
        { title: "Staff Late Frequency", iconClass: "bx-hourglass", text: "12 hour" },
        { title: "Leave Early Frequency", iconClass: "bx-package", text: "54 hour" },
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
            <title>Service Provider Profile</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs breadcrumbItem="Service Provider Profile" />

            <Row>
              <Col xl="4">
                <Card className="overflow-hidden">
                  <div className="bg-primary bg-soft">
                    <Row>
                      <Col xs="7">
                        <div className="text-primary p-3">
                          <h5 className="text-primary">Security</h5>
                          <p>Contract end in 3 Month </p>
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
                          Security Sdn Bhd
                        </h5>
                        <p className="text-muted mb-0 text-truncate">
                          15 December 2021
                        </p>
                      </Col>

                      <Col sm={8}>
                        <div className="pt-4">
                          <Row>
                            <Col xs="6">
                              <h5 className="font-size-15">
                                {userProfile.projectCount}
                              </h5>
                              <p className="text-muted mb-0">Staff</p>
                            </Col>
                            <Col xs="6">
                              <h5 className="font-size-15">
                                ${userProfile.revenue}
                              </h5>
                              <p className="text-muted mb-0">Contract Value</p>
                            </Col>
                          </Row>
                          <div className="mt-4">
                            <Link
                              to="/serviceproviderlog"
                              className="btn btn-primary btn-sm"
                            >
                              LOGBOOK
                              
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
                    <CardTitle className="mb-4 h4">Total Report Submitted</CardTitle>
                    <div id="revenue-chart" className="apex-charts">
                      <ApexRevenue />
                    </div>
                  </CardBody>
                </Card>
                
              </Col>
            </Row>

            
            
            <div class="row">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <div class="mb-4 h4 card-title">Staff Details</div>
        <div class="row">
          <div class="col-xl-12">
            <div class="table-responsive">
              <div class="react-bootstrap-table">
                <table class="table table table-nowrap table-hover mb-0">
                  <thead class="tbody-light">
                    <tr>
                      <th tabindex="0" aria-label="Name sortable" class="sortable">Name<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Name sortable" class="sortable">Projects<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Name sortable" class="sortable">Absent<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Name sortable" class="sortable">Late<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Name sortable" class="sortable">Start Date<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Name sortable" class="sortable">Leave Early<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Name sortable" class="sortable">Deadline<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Name sortable" class="sortable">Total Missing Hour<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Name sortable" class="sortable">Budget<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Name sortable" class="sortable">View<span class="order-4"></span>
                      </th>
                      
                    </tr>

                    <tr>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">Name<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">Projects A<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">3<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">30 Min<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">5:00 AM<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">3:00 PM<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">4:00 PM<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">48<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">35<span class="order-4"></span>
                      </td>
                      <td><button type="button" class="btn btn-primary">View</button>
                      </td>
                      
                    </tr>

                    <tr>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">Name<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">Projects A<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">3<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">30 Min<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">5:00 AM<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">3:00 PM<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">4:00 PM<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">48<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">35<span class="order-4"></span>
                      </td>
                      <td><button type="button" class="btn btn-primary">View</button>
                      </td>
                      
                    </tr>

                    <tr>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">Name<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">Projects A<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">3<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">30 Min<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">5:00 AM<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">3:00 PM<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">4:00 PM<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">48<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Name sortable" class="sortable">35<span class="order-4"></span>
                      </td>
                      <td><button type="button" class="btn btn-primary">View</button>
                      </td>
                      
                    </tr>


                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

Servicecontract.propTypes = {
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
)(withRouter(Servicecontract))
