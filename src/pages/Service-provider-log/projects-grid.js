import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap"
import { withRouter } from "react-router-dom"
import { map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import Cards
import CardProject from "./card-project"

import { getProjects } from "store/actions"

class ProjectsGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      totalPage: 5, //replace this with total pages of data
    }
  }

  componentDidMount() {
    const { onGetProjects } = this.props
    onGetProjects()
  }

  handlePageClick = page => {
    this.setState({ page })
  }

  render() {
    const { projects } = this.props
    const { page, totalPage } = this.state

    return (
      <React.Fragment>
        <div className="">
          <MetaTags>
            
          </MetaTags>
         
            {/* Render Breadcrumbs */}
            <Breadcrumbs breadcrumbItem="Service Provider" />

            <Row>
              {/* Import Cards */}
              <CardProject projects={projects} key={"cardproject"} />
            </Row>

            
          
        </div>
      </React.Fragment>
    )
  }
}

ProjectsGrid.propTypes = {
  projects: PropTypes.array,
  onGetProjects: PropTypes.func,
}

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
})

const mapDispatchToProps = dispatch => ({
  onGetProjects: () => dispatch(getProjects()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectsGrid))
