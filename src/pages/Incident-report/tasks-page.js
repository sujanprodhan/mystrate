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
import MiniCards from "./mini-card"
import TasksListnew from "./tasks-list-rep"



class Taskpage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        {
          icon: "bx bx-copy-alt",
          title: "Total Complaints",
          value: "92",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-archive-in",
          title: "Pending",
          value: "12",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From previous period",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Completed",
          value: "54",
          badgeValue: "0%",
          color: "warning",
          desc: "From previous period",
        },

      ],

      miniCards: [
        {
          title: "Total leave Taken",
          iconClass: "bx-check-circle",
          text: "3 Day",
        },
        { title: "Absent", iconClass: "bx-hourglass", text: "12 Day" },
        { title: "Missing Hours", iconClass: "bx-package", text: "54 Hours" },
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
            <Breadcrumbs breadcrumbItem="Task" />

            {/* Card User */}
            


            <Row>


                  
               

                <Col xl="8">

                    <Row>
                 
                    {this.state.miniCards.map((card, key) => (
                    <MiniCards
                      title={card.title}
                      text={card.text}
                      iconClass={card.iconClass}
                      key={"_card_" + key}
                    />
                  ))}

                    </Row>
                  


                 <Card>
                  <CardBody>
                   <SplineArea />
                  </CardBody>
                </Card>
                </Col>

                 <Col xl="4">
                  
                 <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Donut Chart</CardTitle>
                    <DonutChart />
                  </CardBody>
                </Card> 

                </Col>

            </Row>




            <Row>
             

                   
                    <TasksListnew />
               
              


              
                  

            </Row>
            
            




              
              

                

                      </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Taskpage
