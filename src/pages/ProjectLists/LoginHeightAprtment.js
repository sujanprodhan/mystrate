import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Container
} from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

class LoginHeightAprtment extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Loging Height Apartment</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs breadcrumbItem="Loging Height Apartment" />

           
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginHeightAprtment
