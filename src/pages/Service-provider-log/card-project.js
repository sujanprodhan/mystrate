import PropTypes from 'prop-types'
import React from "react"
import { Link } from "react-router-dom"
import { map } from "lodash"
import {
  Badge,
  Card,
  CardBody,
  Col,
  Media,
} from "reactstrap"
import images from "assets/images"
import companies from "assets/images/companies"

import company1 from "../../assets/images/img-1.png"
import company2 from "../../assets/images/img-2.png"
import company3 from "../../assets/images/img-3.png"
import company4 from "../../assets/images/img-4.png"
import company5 from "../../assets/images/img-5.png"

const CardProject = ({ projects }) => {
  return (
    <React.Fragment>
      
        <Col xl="4">
          <div class="card">
  <div class="card-body">
    <div class="media">
      <div class="avatar-md me-4"><span class="avatar-title rounded-circle bg-light text-danger font-size-16"><a href="/serviceprovidercontract"><img src={company1} alt="" height="30" /></a></span>
      </div>
      <div class="overflow-hidden media-body">
        <h5 class="text-truncate font-size-15"><a class="text-dark" href="/projects-overview/0">Cleaner</a></h5>
        <p class="text-muted mb-4">It will be as simple as Occidental</p>
        <div class="avatar-group">
          <div class="avatar-group-item">
            <a class="d-inline-block" id="member1" href="/serviceproviderlog">
              <img src="/static/media/avatar-4.b23e41d9.jpg" class="rounded-circle avatar-xs" alt="" />
            </a>
          </div>
          <div class="avatar-group-item">
            <a class="d-inline-block" id="member2" href="/serviceproviderlog">
              <img src="/static/media/avatar-5.a5c59cee.jpg" class="rounded-circle avatar-xs" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 py-3 border-top">
    <ul class="list-inline mb-0">
      <li class="list-inline-item me-3">15 Staff
      </li>
      <li class="list-inline-item me-3" id="dueDate"><i class="bx bx-calendar me-1"></i> Contract Till 2019-10-15</li>
      
    </ul>
  </div>
</div>
        </Col>

        <Col xl="4">
          <div class="card">
  <div class="card-body">
    <div class="media">
      <div class="avatar-md me-4"><span class="avatar-title rounded-circle bg-light text-danger font-size-16"><a href="/serviceprovidercontract"><img src={company1} alt="" height="30" /></a></span>
      </div>
      <div class="overflow-hidden media-body">
        <h5 class="text-truncate font-size-15"><a class="text-dark" href="/projects-overview/0">Security</a></h5>
        <p class="text-muted mb-4">It will be as simple as Occidental</p>
        <div class="avatar-group">
          <div class="avatar-group-item">
            <a class="d-inline-block" id="member1" href="/serviceproviderlog">
              <img src="/static/media/avatar-4.b23e41d9.jpg" class="rounded-circle avatar-xs" alt="" />
            </a>
          </div>
          <div class="avatar-group-item">
            <a class="d-inline-block" id="member2" href="/serviceproviderlog">
              <img src="/static/media/avatar-5.a5c59cee.jpg" class="rounded-circle avatar-xs" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 py-3 border-top">
    <ul class="list-inline mb-0">
      <li class="list-inline-item me-3">25 Staff
      </li>
      <li class="list-inline-item me-3" id="dueDate"><i class="bx bx-calendar me-1"></i> Contract Till 2019-10-15</li>
      
    </ul>
  </div>
</div>
        </Col>

        <Col xl="4">
          <div class="card">
  <div class="card-body">
    <div class="media">
      <div class="avatar-md me-4"><span class="avatar-title rounded-circle bg-light text-danger font-size-16"><a href="/serviceprovidercontract"><img src={company1} alt="" height="30" /></a></span>
      </div>
      <div class="overflow-hidden media-body">
        <h5 class="text-truncate font-size-15"><a class="text-dark" href="/projects-overview/0">lift</a></h5>
        <p class="text-muted mb-4">It will be as simple as Occidental</p>
        <div class="avatar-group">
          <div class="avatar-group-item">
            <a class="d-inline-block" id="member1" href="/serviceproviderlog">
              <img src="/static/media/avatar-4.b23e41d9.jpg" class="rounded-circle avatar-xs" alt="" />
            </a>
          </div>
          <div class="avatar-group-item">
            <a class="d-inline-block" id="member2" href="/serviceproviderlog">
              <img src="/static/media/avatar-5.a5c59cee.jpg" class="rounded-circle avatar-xs" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 py-3 border-top">
    <ul class="list-inline mb-0">
      <li class="list-inline-item me-3">25 Staff
      </li>
      <li class="list-inline-item me-3" id="dueDate"><i class="bx bx-calendar me-1"></i> Contract Till 2019-10-15</li>
     
    </ul>
  </div>
</div>
        </Col>
   
    </React.Fragment>
  )
}

CardProject.propTypes = {
  projects: PropTypes.array
}

export default CardProject
