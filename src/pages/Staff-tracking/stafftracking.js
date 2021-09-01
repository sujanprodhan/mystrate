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
            <title>Staff Trackig</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs breadcrumbItem="Staff Profile" />

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
                          Cleaner
                        </p>
                      </Col>

                      <Col sm={8}>
                        <div className="pt-4">
                          <Row>
                            <Col xs="6">
                              <h5 className="font-size-15">
                               <h5 class="font-size-15">7 Times</h5>
                              </h5>
                              <p className="text-muted mb-0">Late</p>
                            </Col>
                            <Col xs="6">
                              <h5 className="font-size-15">
                                <h5 class="font-size-15">8 Times </h5>
                              </h5>
                              <p className="text-muted mb-0">Leave Early</p>
                            </Col>
                          </Row>
                          <div className="mt-4">
                            <Link
                              to=""
                              className="btn btn-primary btn-sm"
                            >
                              Cleaner Company Sdn Bhd{" "}
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
            
            <div class="col">
   <div class="card">
      <div class="card-body">
         <div class="row">
            <div class="col-xl-10">
               <div class="mb-4 h4 card-title">Staff Tracking</div>
            </div>
            <div class="col-xl-2">
               <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                  <option>Select Date</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
               </select>
            </div>
         </div>
         <div class="row">
            <div class="col-xl-12">
               <div class="table-responsive">
                  <div class="react-bootstrap-table">
                     <table class="table table table-nowrap table-hover mb-0">
                        <thead class="tbody-light">
                           <tr>
                              <th tabindex="0" aria-label="# sortable" class="sortable">#<span class="order-4"></span></th>
                              <th tabindex="0" aria-label="Time sortable" class="sortable">Time<span class="order-4"></span></th>
                              <th tabindex="0" aria-label="Tower sortable" class="sortable">Tower<span class="order-4"></span></th>
                              <th tabindex="0" aria-label="level sortable" class="sortable">level<span class="order-4"></span></th>
                              <th tabindex="0" aria-label="Area sortable" class="sortable">Area<span class="order-4"></span></th>
                              <th tabindex="0" aria-label="Total Time Spent sortable" class="sortable">Total Time Spent<span class="order-4"></span></th>
                           </tr>

                           <tr>
                              <td tabindex="0" aria-label="# sortable" class="sortable">1<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Time sortable" class="sortable">1:00 AM<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Tower sortable" class="sortable">Tower A<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="level sortable" class="sortable">level A<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Area sortable" class="sortable">Area A<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Total Time Spent sortable" class="sortable">40 Min<span class="order-4"></span></td>
                           </tr>

                           <tr>
                              <td tabindex="0" aria-label="# sortable" class="sortable">2<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Time sortable" class="sortable">1:00 AM<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Tower sortable" class="sortable">Tower A<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="level sortable" class="sortable">level A<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Area sortable" class="sortable">Area A<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Total Time Spent sortable" class="sortable">40 Min<span class="order-4"></span></td>
                           </tr>

                           <tr>
                              <td tabindex="0" aria-label="# sortable" class="sortable">3<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Time sortable" class="sortable">1:00 AM<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Tower sortable" class="sortable">Tower A<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="level sortable" class="sortable">level A<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Area sortable" class="sortable">Area A<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Total Time Spent sortable" class="sortable">40 Min<span class="order-4"></span></td>
                           </tr>

                           <tr>
                              <td tabindex="0" aria-label="# sortable" class="sortable">4<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Time sortable" class="sortable">1:00 AM<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Tower sortable" class="sortable">Tower A<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="level sortable" class="sortable">level A<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Area sortable" class="sortable">Area A<span class="order-4"></span></td>
                              <td tabindex="0" aria-label="Total Time Spent sortable" class="sortable">40 Min<span class="order-4"></span></td>
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
