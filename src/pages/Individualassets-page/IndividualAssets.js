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
  Table,
} from "reactstrap"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import AttachedFiles from "./attachedFiles"
import { getProjectDetail } from "store/projects/actions"
import Slidewithcontrol from "../Ui/CarouselTypes/slidewithcontrol"
import UiLightboxCommonGallary from "../Ui/UILightBoxGallaries"
import UiLightboxCommon from "pages/Ui/LightBoxCommon"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import company1 from "../../assets/images/img-1.png"
import company2 from "../../assets/images/img-2.png"
import company3 from "../../assets/images/img-3.png"
import company4 from "../../assets/images/img-4.png"
import company5 from "../../assets/images/img-5.png"

// import images
import img1 from "../../assets/images/small/img-2.jpg"
import avtar1 from "../../assets/images/users/avatar-2.jpg"

class IndividualAssets extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Individual Task</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs breadcrumbItem="Assets" />
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
                              <h4>GENSET</h4>
                              <p className="text-muted mb-4">
                                <i className="mdi mdi-calendar me-1"></i>{" "}
                                Service Provider : ABC Genset Services Sdn Bhd
                              </p>
                            </div>

                            <hr />
                            <div className="text-center">
                              <Row>
                                <Col sm={4}>
                                  <div>
                                    <p className="text-muted mb-2">WARRANTY</p>
                                    <h5 className="font-size-15">
                                      Expired Soon{" "}
                                    </h5>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div className="mt-4 mt-sm-0">
                                    <p className="text-muted mb-2">
                                      Next Service Date{" "}
                                    </p>
                                    <h5 className="font-size-15">
                                      15 December 2022
                                    </h5>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div className="mt-4 mt-sm-0">
                                    <p className="text-muted mb-2">Location </p>
                                    <h5 className="font-size-15">
                                      Level A Common Area
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
                                <Row>
                                  <Col lg="12">
                                    <div className="">
                                      <h4>Task Created</h4>
                                      <div className="table-responsive">
                                        <Table className="project-list-table table-nowrap align-middle table-borderless">
                                          <thead>
                                            <tr>
                                              <th scope="col">#</th>
                                              <th scope="col">Title</th>
                                              <th scope="col">Date</th>
                                              <th scope="col">Status</th>
                                              <th scope="col">By</th>
                                              <th scope="col">View Task</th>
                                            </tr>

                                            <tr>
                                              <td scope="col">1</td>
                                              <td scope="col">Title here</td>
                                              <td scope="col">
                                                12 December 2021
                                              </td>

                                              <td scope="col">
                                                <span class="bg-danger badge badge-success">
                                                  Late
                                                </span>{" "}
                                              </td>

                                              <td class="">
                                                <div class="avatar-group">
                                                  <div class="avatar-group-item">
                                                    <a href="#">
                                                      <UiLightboxCommon
                                                        lightImage={[
                                                          "/static/media/avatar-4.b23e41d9.jpg",
                                                        ]}
                                                      />
                                                    </a>
                                                  </div>
                                                  <div class="avatar-group-item">
                                                    <a href="#">
                                                      <UiLightboxCommon
                                                        lightImage={[
                                                          "/static/media/avatar-5.a5c59cee.jpg",
                                                        ]}
                                                      />
                                                    </a>
                                                  </div>
                                                </div>
                                              </td>

                                              <td class="d-grid gap-2">
                                                <a
                                                  class="btn btn-primary"
                                                  href="/stafftracking"
                                                  role="button"
                                                >
                                                  View
                                                </a>
                                              </td>
                                            </tr>

                                            <tr>
                                              <td scope="col">2</td>
                                              <td scope="col">Title here</td>
                                              <td scope="col">
                                                12 December 2021
                                              </td>

                                              <td scope="col">
                                                <span class="bg-success badge badge-success">
                                                  Completed
                                                </span>{" "}
                                              </td>
                                              <td class="">
                                                <div class="avatar-group">
                                                  <div class="avatar-group-item">
                                                    <a href="#">
                                                      <UiLightboxCommon
                                                        lightImage={[
                                                          "/static/media/avatar-4.b23e41d9.jpg",
                                                        ]}
                                                      />
                                                    </a>
                                                  </div>
                                                  <div class="avatar-group-item">
                                                    <a href="#">
                                                      <UiLightboxCommon
                                                        lightImage={[
                                                          "/static/media/avatar-5.a5c59cee.jpg",
                                                        ]}
                                                      />
                                                    </a>
                                                  </div>
                                                </div>
                                              </td>

                                              <td class="d-grid gap-2">
                                                <a
                                                  class="btn btn-primary"
                                                  href="/stafftracking"
                                                  role="button"
                                                >
                                                  View
                                                </a>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td scope="col">3</td>
                                              <td scope="col">Title here</td>
                                              <td scope="col">
                                                10 December 2021
                                              </td>

                                              <td scope="col">
                                                <span class="bg-success badge badge-success">
                                                  Completed
                                                </span>{" "}
                                              </td>
                                              <td class="">
                                                <div class="avatar-group">
                                                  <div class="avatar-group-item">
                                                    <a href="#">
                                                      <UiLightboxCommon
                                                        lightImage={[
                                                          "/static/media/avatar-4.b23e41d9.jpg",
                                                        ]}
                                                      />
                                                    </a>
                                                  </div>
                                                  <div class="avatar-group-item">
                                                    <a href="#">
                                                      <UiLightboxCommon
                                                        lightImage={[
                                                          "/static/media/avatar-5.a5c59cee.jpg",
                                                        ]}
                                                      />
                                                    </a>
                                                  </div>
                                                </div>
                                              </td>

                                              <td class="d-grid gap-2">
                                                <a
                                                  class="btn btn-primary"
                                                  href="/stafftracking"
                                                  role="button"
                                                >
                                                  View
                                                </a>
                                              </td>
                                            </tr>
                                          </thead>
                                        </Table>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
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

IndividualAssets.propTypes = {
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
)(withRouter(IndividualAssets))
