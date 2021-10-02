import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex"
import DashedLine from "../AllCharts/apex/dashedLine"
import SplineArea from "../AllCharts/apex/SplineArea"
import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn"
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels"
import BarChart from "../AllCharts/apex/barchart"
import LineColumnArea from "../AllCharts/apex/LineColumnArea"
import RadialChart from "../AllCharts/apex/RadialChart"
import PieChart from "../AllCharts/apex/PieChart"
import DonutChart from "../AllCharts/apex/dountchart"
import LineBar from "../AllCharts/echart/linebarchart"

import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class DebtorCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Debtor Collection</title>
          </MetaTags>
          <div className="container-fluid">
            <Breadcrumbs title="Financial" breadcrumbItem="Debtor Collection" />


            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                    Income & Expenditure ： Year 2020 + July 2021
                    </CardTitle>
                    <LineColumnArea />
                  </CardBody>
                </Card>
              </Col>
            </Row>


            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4"> Income & Expenditure ：Year 2020 + July 2021  </CardTitle>
                    <Apaexlinecolumn />
                  </CardBody>
                </Card>
              </Col>
            </Row>


            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4 h4">Contractual Expennses ：Year 2020 + July 2021  </CardTitle>
                    <div id="mix-line-bar" className="e-chart">
                      <LineBar />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>




            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      Line with Data Labels
                    </CardTitle>
                    <LineApexChart />
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Dashed Line</CardTitle>
                    <DashedLine />
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
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
                    <CardTitle className="mb-4"> Column Chart </CardTitle>
                    <Apaexlinecolumn />
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      Column with Data Labels{" "}
                    </CardTitle>
                    <ColumnWithDataLabels />
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Bar Chart</CardTitle>
                    <BarChart />
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">
                      Line, Column & Area Chart{" "}
                    </CardTitle>
                    <LineColumnArea />
                  </CardBody>
                </Card>
              </Col>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Radial Chart</CardTitle>
                    <RadialChart />
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Pie Chart </CardTitle>
                    <PieChart />
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
            </Row>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default DebtorCollection
