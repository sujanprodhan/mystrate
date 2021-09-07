import React, { Component } from "react"
import { Link } from "react-router-dom"

import {
  Card,
  CardBody,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"

//SimpleBar
import SimpleBar from "simplebar-react"

export default class Activity extends Component {
  render() {
    return (
      <React.Fragment>
        <Col xl={4}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className="me-2">
                  <h5 className="card-title mb-4">Committee Information</h5>
                </div>
                
              </div>
              <SimpleBar style={{ maxHeight: "280px" }}>
                <ul className="verti-timeline list-unstyled">
                  <li className="event-list active">
                    <div className="event-timeline-dot">
                      <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                    </div>
                    <div className="media">
                      
                      <div className="media-body">
                        <div>
                          
                          <span className="font-weight-semibold">
                          Max Hilton -  Chairman ( present )
                            </span>
                            
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="media">
                     
                      <div className="media-body">
                        <div>
                        Annie Yeoh - Secretary ( present ) 

                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="media">
                      
                      <div className="media-body">
                        <div>
                        Lim Sew Yee  - Treasure  ( present )

                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="media">
                      
                      <div className="media-body">
                        <div>
                        Amugaram - Chairman ( 2016 - 2018 )
                          </div>
                      </div>
                    </div>
                  </li>
                  <li className="event-list">
                    <div className="event-timeline-dot">
                      <i className="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div className="media">
                      
                      <div className="media-body">
                        <div>
                        Ali Muhammad - Chairman ( 2016 - 2018 )

                          </div>
                      </div>
                    </div>
                  </li>

                </ul>

              </SimpleBar>
              

              <div class="d-grid gap-2 col-6 mx-auto mt-4">
  
  <button class="btn btn-primary" type="button">View More</button>
</div>
              
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}
