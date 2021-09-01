import React, { Component } from "react"
import { Row, Col, Card } from "reactstrap"

//Import Images
import profileImg from "../../assets/images/profile-img.png"

class CardWelcome extends Component {
  render() {
    return (
      <React.Fragment>
        <Col xl="3">
          <Card className="bg-primary bg-soft">
            <div>
              <Row>
                <Col xs="8">
                  <div className="text-primary p-3">
                    <h5 className="text-primary">Management Office</h5>
                    <p>8 am - 10am</p>

                    <ul className="ps-3 mb-0">
                      <li className="py-1">5 Staff</li>
                      <li className="py-1">1 Absent</li>
                    </ul>
                  </div>
                </Col>
                <Col xs="4" className="align-self-end">
                  <img src={profileImg} alt="" className="img-fluid" />
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}

export default CardWelcome
