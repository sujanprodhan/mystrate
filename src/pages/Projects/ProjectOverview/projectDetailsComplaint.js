import React from "react"
import PropTypes from "prop-types"
import { map, get } from "lodash"
import { Card, CardBody, Col, Media, Row } from "reactstrap"
import img1 from "../../../assets/images/companies/img-1.png"
import images from "assets/images"

const ProjectDetail = ({ project }) => {
  return (
    <Card>
      <CardBody>
        <Media>
          {/* <img
            src={images[project.img]}
            className="rounded-circle avatar-sm me-4"
            alt=""
          /> */}

          <Media className="overflow-hidden" body>
            <h5 className="text-truncate font-size-15">{project.name}</h5>
            <p className="text-muted">{project.description}</p>
          </Media>
        </Media>

        <h5 className="font-size-15 mt-4">Complaint Details :</h5>

        <p className="text-muted">
          {get(project, "projectDetails.description")}
        </p>

        <div className="text-muted mt-4">
          <div style={{ fontWeight: "bold", paddingBottom: "10px" }}>
            Complainer Details:{" "}
          </div>
          <p>
            <i className="mdi mdi-chevron-right text-primary me-1" />
            Janice Lee
          </p>
          <p>
            <i className="mdi mdi-chevron-right text-primary me-1" />
            Unit A-02-04
          </p>
          <p>
            <i className="mdi mdi-chevron-right text-primary me-1" />
            Owner
          </p>
        </div>

        <Row className="task-dates">
          <Col sm="4" xs="6">
            <div className="mt-4">
              <h5 className="font-size-14">
                <i className="bx bx-calendar me-1 text-primary" /> Start Date
              </h5>
              <p className="text-muted mb-0">{project.startDate}</p>
            </div>
          </Col>

          <Col sm="4" xs="6">
            <div className="mt-4">
              <h5 className="font-size-14">
                <i className="bx bx-calendar-check me-1 text-primary" /> Due
                Date
              </h5>
              <p className="text-muted mb-0">{project.dueDate}</p>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

ProjectDetail.propTypes = {
  project: PropTypes.object,
}

export default ProjectDetail