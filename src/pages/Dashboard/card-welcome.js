import React, { Component } from "react"
import { Row, Col, Card } from "reactstrap"

//Import Images
import profileImg from "../../assets/images/profile-img.png"

class CardWelcome extends Component {
  render() {
    return (
      <React.Fragment>
        <Col xl="4">
          <Card className="bg-primary bg-soft">
            <div>
              <Row>
                <Col xs="7">
                  <div className="text-primary p-3">
                    <h5 className="text-primary">Daily report for</h5>
                    <p>5 December 2021 </p>

                    <ul className="ps-3 mb-0">
                      <li className="py-1">Last Update @ 25:35pm </li>
                      <li className="py-1">Total 7 Views Todays</li>
                    </ul>
                  </div>
                </Col>
                <Col xs="5" className="align-self-end">
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
