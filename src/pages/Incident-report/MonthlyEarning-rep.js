import React, { Component } from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

import ApexRadialnew from "./apexredial-new"


class MonthlyEarning extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        {" "}
        <Card>
          <CardBody>
            <CardTitle className="mb-4 h4">Total Collection</CardTitle>
            <Row>
              <Col sm="6">
                <p className="text-muted">Today</p>
                <h3>RM 4,252</h3>
                <p className="text-muted">
                  <span className="text-success me-2">
                    {" "}
                    12% <i className="mdi mdi-arrow-up"></i>{" "}
                  </span>{" "}
                  From previous period
                </p>
                <div className="mt-4">
                  <Link
                    to=""
                    className="btn btn-primary btn-sm"
                  >
                    See Account <i className="mdi mdi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </Col>
              <Col sm="6">
                <div className="mt-4 mt-sm-0">
                  <ApexRadialnew />
                </div>
              </Col>
            </Row>
            <p className="text-muted mb-0">
              From 8 owner, via online transfer & cash
            </p>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

export default MonthlyEarning
