import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Container
} from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

class SainJohnResidency extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Sain John Residency</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs breadcrumbItem="Sain John Residency" />

           
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default SainJohnResidency
