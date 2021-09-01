import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Container
} from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

class VistaCondominium extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Vista Condominium</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs breadcrumbItem="Vista Condominium" />

           
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default VistaCondominium
