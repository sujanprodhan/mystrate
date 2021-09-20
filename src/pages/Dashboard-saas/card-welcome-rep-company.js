import React, { Component } from "react"
import { Row, Col, Card } from "reactstrap"

//Import Image
import features from "../../assets/images/crypto/features-img/img-1.png"

class CardWelcomenew extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <div>
            <Row>
              <Col lg="9" sm="8">
                <div className="p-4">
                  <h5 className="text-primary">Urgent redflags!</h5>
                  <p>Please look into this avoid compunds and leggaly action from COB.</p>

                  <div className="text-muted">
                    <p className="mb-1">
                      <i className="mdi mdi-circle-medium align-middle text-primary me-1"/>{" "}
                      3 AGM comming soon, 5 AGM overdude. 
                    </p>
                    <p className="mb-1">
                      <i className="mdi mdi-circle-medium align-middle text-primary me-1"/>{" "}
                     26 Monthly Meeting Missed
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-circle-medium align-middle text-primary me-1"/>{" "}
                      13 Project Failed To Submit Monthly Financial Report
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" sm="4" className="align-self-center">
                <div>
                  <img src={features} alt="" className="img-fluid d-block" />
                </div>
              </Col>
            </Row>
          </div>
        </Card>
      </React.Fragment>
    )
  }
}

export default CardWelcomenew