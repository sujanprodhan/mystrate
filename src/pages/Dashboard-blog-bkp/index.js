import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import { Container, Row } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import CardUser from "./CardUser"
import Posts from "./Posts"
import Settings from "./Settings"
import Comments from "./Comments"
import TapVisitors from "./TopVisitors"
import Activity from "./Activity"
import PopularPost from "./PopularPost"



export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardreport: {
        options: options,
        series: series,
      },
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Blog Dashboard | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Dashboards" breadcrumbItem="Blog" />
            <Row>
              {/* card user */}
              <CardUser cardreport={this.state.cardreport} />
              <Settings />
            </Row>
            <Row>
              <Posts />
              <Comments />
              <TapVisitors />
            </Row>
            <Row>
              <Activity />
              <PopularPost />
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}
