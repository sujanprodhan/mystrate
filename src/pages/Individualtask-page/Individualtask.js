import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Container,
  Table,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import company1 from "../../assets/images/img-1.png"
import company2 from "../../assets/images/img-2.png"
import company3 from "../../assets/images/img-3.png"
import company4 from "../../assets/images/img-4.png"
import company5 from "../../assets/images/img-5.png"

// import images
import img1 from "../../assets/images/small/img-2.jpg"
import avtar1 from "../../assets/images/users/avatar-2.jpg"

export default class IndividualTask extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Individual Task</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs breadcrumbItem="Task" />
            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div className="pt-3">
                      <div className="row justify-content-center">
                        <div className="col-xl-8">
                          <div>
                            <div className="text-center">
                              <div className="mb-4">
                                
                              </div>
                              <h4>Task</h4>
                              <p className="text-muted mb-4">
                                <i className="mdi mdi-calendar me-1"></i> Last Updates : 12:55 PM 15 Dec 2021
                          </p>
                            </div>

                            <hr />
                            <div className="text-center">
                              <Row>
                                <Col sm={4}>
                                  <div>
                                    <p className="text-muted mb-2">Status</p>
                                    <h5 className="font-size-15">Active</h5>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div className="mt-4 mt-sm-0">
                                    <p className="text-muted mb-2">Date and Time</p>
                                    <h5 className="font-size-15">1:00 PM and 10 Apr, 2020</h5>
                                  </div>
                                </Col>
                                <Col sm={4}>
                                  <div className="mt-4 mt-sm-0">
                                    <p className="text-muted mb-2">Post by</p>
                                    <h5 className="font-size-15">Gilbert Smith</h5>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            <hr />

                            <div className="my-5">
                              <img
                                src={img1}
                                alt=""
                                className="img-thumbnail mx-auto d-block"
                              />
                            </div>

                            <hr />

                            <div className="mt-4">
                              <div className="text-muted font-size-14">
                                <h4>Description</h4>
                                <p>
                                  Neque porro quisquam est, qui dolorem ipsum quia
                                  dolor sit amet, consectetur, adipisci velit, sed
                                  quia non numquam eius modi tempora incidunt ut
                                  labore et dolore magnam enim ad minima veniam quis
                            </p>

                                <p className="mb-4">
                                  Ut enim ad minima veniam, quis nostrum
                                  exercitationem ullam corporis suscipit laboriosam,
                                  nisi ut aliquid ex ea reprehenderit qui in ea
                                  voluptate velit esse quam nihil molestiae
                                  consequatur, vel illum qui dolorem eum fugiat quo
                                  voluptas nulla pariatur? At vero eos et accusamus
                                  et iusto odio dignissimos ducimus qui blanditiis
                                  praesentium voluptatum deleniti atque corrupti
                                  quos dolores et quas molestias excepturi sint
                                  occaecati cupiditate non provident, similique sunt
                            </p>

                                

                                
                                 

                                <Row>
              <Col lg="12">
                <div className="">
                <h4>Task Created</h4>
                  <div className="table-responsive">
                    <Table className="project-list-table table-nowrap align-middle table-borderless">
                      <thead>
                        <tr>
                          <th scope="col" style={{ width: "100px" }}>
                            #
                          </th>
                          <th scope="col">Title</th>
                          <th scope="col">Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">By</th>
                          <th scope="col">View Task</th>
                        </tr>

                        <tr>
                          <td scope="col" style={{ width: "100px" }}>
                            <img src={company1}  className="avatar-sm" />
                          </td>
                         <td scope="col">Title here</td>
                          <td scope="col">9:00 AM</td>
                          
                          <td scope="col"><span class="bg-danger badge badge-success">Late</span> </td>
                         

                          <td class="justify-content-center">
                          <div class="avatar-group ">
                          <div class="avatar-group-item">
                          <a class="d-inline-block" id="member1" href="/attendance-page">
                          <img src="/static/media/avatar-4.b23e41d9.jpg" class="rounded-circle avatar-xs" alt="" />
                          </a></div><div class="avatar-group-item">
                          <a class="d-inline-block" id="member2" href="/attendance-page">
                          <img src="/static/media/avatar-5.a5c59cee.jpg" class="rounded-circle avatar-xs" alt="" />
                          </a></div></div></td>

                          <td class="d-grid gap-2"><a class="btn btn-primary" href="/stafftracking" role="button">View</a></td>
                        </tr>

                        <tr>
                          <td scope="col" style={{ width: "100px" }}>
                            <img src={company2}  className="avatar-sm" />
                          </td>
                         <td scope="col">Title here</td>
                          <td scope="col">9:00 AM</td>
                          
                          <td scope="col"><span class="bg-success badge badge-success">Completed</span> </td>
                         

                          <td class="justify-content-center">
                          <div class="avatar-group ">
                          <div class="avatar-group-item">
                          <a class="d-inline-block" id="member1" href="/attendance-page">
                          <img src="/static/media/avatar-4.b23e41d9.jpg" class="rounded-circle avatar-xs" alt="" />
                          </a></div><div class="avatar-group-item">
                          <a class="d-inline-block" id="member2" href="/attendance-page">
                          <img src="/static/media/avatar-5.a5c59cee.jpg" class="rounded-circle avatar-xs" alt="" />
                          </a></div></div></td>

                          <td class="d-grid gap-2"><a class="btn btn-primary" href="/stafftracking" role="button">View</a></td>
                        </tr>

                     


                      </thead>
                      
                    </Table>
                    
                  </div>
                </div>
              </Col>
            </Row>
                              </div>

                              



                              

                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}
