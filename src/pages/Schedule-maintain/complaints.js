import React, { Component } from "react"
import { Container, Row, Col, CardTitle, Card, CardBody } from "reactstrap"
import MetaTags from 'react-meta-tags';
import DonutChart from "../AllCharts/apex/complaintdonutchart"
import SplineArea from "../AllCharts/apex/complaintspinal"


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardWelcome from "./card-welcome"
import MiniWidget from "./mini-widget"
import ProjectsList from "./projects-list"



class Complaints extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        {
          icon: "bx bx-copy-alt",
          title: "Task resolved today",
          value: "25",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-archive-in",
          title: "Complaint resolved",
          value: "5",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "incident reported",
          value: "1",
          badgeValue: "0%",
          color: "warning",
          desc: "From previous period",
        },

      ],
      

    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Saas Dashboard | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="5 Devember 2020" breadcrumbItem="One South @SRI Kembangan" />

            {/* Card User */}
            

            <Row>
              {/* card user */}
             

              <Col xl="12">
                {/* card welcome */}
              

                <Row>
                  {/* mini widgets new */}
                  <CardWelcome />
                  <MiniWidget reports={this.state.reports} />
                </Row>


              </Col>

               <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4"> Spline Area </CardTitle>
                    <SplineArea />
                  </CardBody>
                </Card>
              </Col>


                    <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Donut Chart</CardTitle>
                    <DonutChart />
                  </CardBody>
                </Card>
              </Col>

                   
                    <ProjectsList />
               
              


              
                  

            </Row>
            
            




              
              

                

                      </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Complaints
