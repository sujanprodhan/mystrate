import React, { Component } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import MetaTags from "react-meta-tags"
import { connect } from "react-redux"
import { isEmpty } from "lodash"
import { Col, Container, Row, Card, CardBody, CardTitle } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import ReactApexChart from "react-apexcharts"
import { getProjectDetail } from "store/projects/actions"
import ProjectDetail from "./projectDetailsComplaint"
import TeamMembers from "./teamMembers"
import OverviewChart from "./overviewChart"
import { options, series } from "common/data/projects"
import AttachedFiles from "./attachedFilesComplaint"
import Comments from "./comments"
import testImage from "../../../assets/images/sidebar/gen1.jpeg"
import testImage2 from "../../../assets/images/sidebar/gen-after.jpeg"

class ProjectsOverviewComplaint extends Component {
  componentDidMount() {
    const {
      match: { params },
      onGetProjectDetail,
    } = this.props
    if (params && params.id) {
      onGetProjectDetail(params.id)
    } else {
      onGetProjectDetail(8) //remove this after full integration
    }
  }

  render() {
    const { projectDetail } = this.props

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>COMPLAINT  TASK</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}

            <Breadcrumbs title="Task" breadcrumbItem="COMPLAINT  TASK" />

            {!isEmpty(projectDetail) && (
              <>
                <Row>
                  <Col lg="8">
                    <ProjectDetail project={projectDetail} />
                  </Col>

                  <Col lg="4">
                    <TeamMembers team={projectDetail.team} />
                  </Col>
                </Row>

                <Row>
                  <Col lg="4">
                    <Card>
                      <CardBody>
                        <div style={{ fontWeight:'600', fontSize:'14px'}}> Before Image</div>
                        <div style={{paddingBottom:'10px'}}> Submitted 21 Jan 2021-14:55 p.m</div>
                         <img src={testImage} alt="" className="img-fluid"  height="120" width="100%"/>

                         <div style={{ fontWeight:'600', fontSize:'14px', paddingTop:'20px'}}> After Image</div>
                        <div style={{paddingBottom:'10px'}}> Submitted 21 Jan 2021-14:55 p.m</div>
                         <img src={testImage2} alt="" className="img-fluid" height="120" width="100%"/>

                      </CardBody>
                    </Card>
                  </Col>

                  <Col lg="4">
                    <AttachedFiles files={projectDetail.files} />
                  </Col>

                  <Col lg="4">
                    <Comments comments={projectDetail.comments} />
                  </Col>
                </Row>
              </>
            )}
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

ProjectsOverviewComplaint.propTypes = {
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
)(withRouter(ProjectsOverviewComplaint))
