import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Container
} from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

class MaxhiltonTower extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Maxhilton Tower</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs breadcrumbItem="Maxhilton Tower" />

           
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default MaxhiltonTower
