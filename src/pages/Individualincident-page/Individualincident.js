import React, { Component } from "react"
import MetaTags from "react-meta-tags"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Container,
} from "reactstrap"

import { connect } from "react-redux"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import AttachedFiles from "./attachedFiles"
import { getProjectDetail } from "store/projects/actions"
import Slidewithcontrol from "../Ui/CarouselTypes/slidewithcontrol"
import UiLightboxCommonGallary from '../Ui/UILightBoxGallaries'
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// import images
import img1 from "../../assets/images/small/img-2.jpg"
import avtar1 from "../../assets/images/users/avatar-2.jpg"
import avtar2 from "../../assets/images/users/img3.jpg"


class Individualincident extends Component {
  componentDidMount() {
    const {
      match: { params },
      onGetProjectDetail,
    } = this.props
    if (params && params.id) {
      onGetProjectDetail(params.id)
    } else {
      onGetProjectDetail(0) //remove this after full integration
    }
  }

  render() {
    const { projectDetail } = this.props
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Incident Report</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs breadcrumbItem="Incident Report" />
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div className="pt-3">
                      <div className="row justify-content-center">
                        <div className="col-xl-8">
                          <div>
                            <div className="text-center">
                              <div className="mb-4"></div>
                              <h4>BREAKIN IN UNIT A-3-21</h4>
                              <p className="text-muted mb-4">
                                <i className="mdi mdi-calendar me-1"></i>{" "}
                                Reported by security team / Building manager
                              </p>
                            </div>

                            <hr />
                            <div className="text-center">
                              <Row>
                                <Col sm={4}>
                                  <div>
                                    <p className="text-muted mb-2">
                                      Incident Category{" "}
                                    </p>
                                    <h5 className="font-size-15">
                                      Break In Case{" "}
                                    </h5>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div className="mt-4 mt-sm-0">
                                    <p className="text-muted mb-2">
                                      Date and Time
                                    </p>
                                    <h5 className="font-size-15">
                                      1:00 PM and 10 Apr, 2020
                                    </h5>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div className="mt-4 mt-sm-0">
                                    <p className="text-muted mb-2">
                                      Incident Location{" "}
                                    </p>
                                    <h5 className="font-size-15">
                                      Level A Common Area{" "}
                                    </h5>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            <hr />

                            <Slidewithcontrol />
                            <UiLightboxCommonGallary />
                            <hr />

                            <div className="mt-4">
                              <div className="text-muted font-size-14">
                                <h4>Incident Report Description</h4>
                                <p>
                                  Neque porro quisquam est, qui dolorem ipsum
                                  quia dolor sit amet, consectetur, adipisci
                                  velit, sed quia non numquam eius modi tempora
                                  incidunt ut labore et dolore magnam enim ad
                                  minima veniam quis
                                </p>

                                <p className="mb-4">
                                  Ut enim ad minima veniam, quis nostrum
                                  exercitationem ullam corporis suscipit
                                  laboriosam, nisi ut aliquid ex ea
                                  reprehenderit qui in ea voluptate velit esse
                                  quam nihil molestiae consequatur, vel illum
                                  qui dolorem eum fugiat quo voluptas nulla
                                  pariatur? At vero eos et accusamus et iusto
                                  odio dignissimos ducimus qui blanditiis
                                  praesentium voluptatum deleniti atque corrupti
                                  quos dolores et quas molestias excepturi sint
                                  occaecati cupiditate non provident, similique
                                  sunt
                                </p>

                                <div className="mt-4">
                                  <h5 className="mb-3">Action Taken </h5>
                                  <p>
                                    Police report has been launched and we have
                                    also printed the police report and submit it
                                    to the management office.{" "}
                                  </p>
                                </div>

                                <div className="mt-4">
                                  <h5 className="mb-3">Victim Details </h5>

                                  <div>
                                    <div className="row">
                                      <div className="col-lg-4 col-sm-6">
                                        <div>
                                          <ul className="ps-4">
                                            <li className="py-1">
                                              Donec sodales sagittis
                                            </li>
                                            <li className="py-1">
                                              Sed consequat leo eget
                                            </li>
                                            <li className="py-1">
                                              Aliquam lorem ante
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-sm-6">
                                        <div>
                                          <ul className="ps-4">
                                            <li className="py-1">
                                              Aenean ligula eget
                                            </li>
                                            <li className="py-1">
                                              Cum sociis natoque
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                          <hr/>
                              <AttachedFiles files={projectDetail.files} />
                            
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

Individualincident.propTypes = {
  projectDetail: PropTypes.any,
  match: PropTypes.object,
  onGetProjectDetail: PropTypes.func,
}

const mapStateToProps = ({ projects }) => ({
  projectDetail: projects.projectDetail,
})

const mapDispatchToProps = dispatch => ({
  onGetProjectDetail: id => dispatch(getProjectDetail(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Individualincident))
