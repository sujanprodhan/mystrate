import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
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
  Container
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

class IndividualServiceProviderlog extends Component {
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
            <Breadcrumbs breadcrumbItem="Service Provider Log" />
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div className="pt-3">
                      <div className="row justify-content-center">
                        <div className="col-xl-8">
                          <div>
                            <div className="text-center">
                              <div className="mb-4">
                                
                              </div>
                              <h4>BROKEN LIFT NO 4</h4>
                              <p className="text-muted mb-4">
                                <i className="mdi mdi-calendar me-1"></i> Reported by ABC Lift Company Sdn Bhd

                          </p>
                            </div>

                            <hr />
                            <div className="text-center">
                              <Row>
                                <Col sm={4}>
                                  <div>
                                    <p className="text-muted mb-2">Service  Category </p>
                                    <h5 className="font-size-15">Breakdown & Repair </h5>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div className="mt-4 mt-sm-0">
                                    <p className="text-muted mb-2">Date and Time</p>
                                    <h5 className="font-size-15">1:00 PM and 10 Apr, 2020</h5>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div className="mt-4 mt-sm-0">
                                    <p className="text-muted mb-2">Location </p>
                                    <h5 className="font-size-15">Level A Common Area </h5>
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
                                <h4>Service Provider Log Description</h4>
                                <p>
                                  Neque porro quisquam est, qui dolorem ipsum quia
                                  dolor sit amet, consectetur, adipisci velit, sed
                                  quia non numquam eius modi tempora incidunt ut
                                  labore et dolore magnam enim ad minima veniam quis
                            </p>

                                <p className="mb-4">
                                  Ut enim ad minima veniam, quis nostrum
                                  exercitationem ullam corporis suscipit laboriosam,
                                  nisi ut aliquid ex ea reprehenderit qui in ea
                                  voluptate velit esse quam nihil molestiae
                                  consequatur, vel illum qui dolorem eum fugiat quo
                                  voluptas nulla pariatur? At vero eos et accusamus
                                  et iusto odio dignissimos ducimus qui blanditiis
                                  praesentium voluptatum deleniti atque corrupti
                                  quos dolores et quas molestias excepturi sint
                                  occaecati cupiditate non provident, similique sunt
                            </p>

                                

                                
                                 

                                <div className="mt-4">
                                  <h5 className="mb-3">Problem Found </h5>
                                  <p> Faulty part found on the lift controller motherboard which cannot be repair anymore, new replacement is needed to make the lift run again.  </p>
              
                                </div>
                                <div className="mt-4">
                                  <h5 className="mb-3">Action taken </h5>
                                  <p> Will prepare and sent quotation for management office to approve.</p>
              
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
IndividualServiceProviderlog.propTypes = {
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
)(withRouter(IndividualServiceProviderlog))