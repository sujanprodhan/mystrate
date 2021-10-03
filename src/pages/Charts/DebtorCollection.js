import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex"
import DashedLine from "../AllCharts/apex/dashedLine"
import SplineArea from "../AllCharts/apex/SplineArea"
import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn"
import ApaexlinecolumnCashBank from "../AllCharts/apex/ApaexlinecolumnCashBank"
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels"
import BarChart from "../AllCharts/apex/barchart"
import LineColumnArea from "../AllCharts/apex/LineColumnArea"
import RadialChart from "../AllCharts/apex/RadialChart"
import PieChart from "../AllCharts/apex/PieChart"
import DonutChart from "../AllCharts/apex/dountchart"
import LineBar from "../AllCharts/echart/linebarchart"
import LineBarCashFlow from "../AllCharts/echart/linebarchartCashFlow"
import LineBarContructual from "../AllCharts/echart/linebarchartDebtorContructual"
import LineBarDebtor from "../AllCharts/echart/linebarchartDebtorCollection"

import { Card, CardBody, CardTitle, Col, Row,  Table} from "reactstrap"
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
            <title>Financ Overview</title>
          </MetaTags>
          <div className="container-fluid">
            <Breadcrumbs title="Financial" breadcrumbItem="Financ Overview" />


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

              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <Table className="table mb-0 table-stripped table-hovered">
                        <thead>
                          <tr>
                            <th></th>
                            <td>July, 2019 </td>
                            <td>Aug, 2019 </td>
                            <td>Sep, 2019 </td>
                            <td>Oct, 2019 </td>                
                            <td>Nov, 2019</td>
                            <td>Dec, 2019</td>
                            <td>Jan, 2020</td>
                            <td>Feb, 2020</td>
                            <td>Mar, 2020</td>
                            <td>Apr, 2020</td>
                            <td>May, 2020</td>
                            <td>Jun, 2020</td>
                            <td>Jul, 2020</td>
                            <td>Aug, 2020</td>
                            <td>Sep, 2020</td>
                            <td>Oct, 2020</td>
                            <td>Nov, 2020</td>
                            <td>Dec, 2020</td>
                            <td>Jan, 2021</td>
                            <td>Feb, 2021</td>
                            <td>Mar, 2021</td>
                            <td>Apr, 2021</td>
                            <td>May, 2021</td>
                            <td>Jun, 2021</td>
                            <td>Jul, 2021</td>
                            <td>Ayg, 2021</td>
                            <td>Sep, 2021</td>
                            <td>Oct, 2021</td>
                            <td>Nov, 2021</td>
      
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-primary"></div> Income </th>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-success"></div>  Expenses </th>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                            <td>84 </td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-danger"></div> Surplus/deficit</th>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                            <td>59</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
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

              <Col lg={12}>
                <Card>
                  <CardBody>
                     <div className="table-responsive">
                     <Table className="table mb-0 table-stripped table-hovered">
                        <thead>
                          <tr>
                            <th></th>
                            <td>July, 2020 </td>
                            <td>July, 2021 </td>
      
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-primary"></div> Income </th>
                            <td>669501</td>
                            <td>620300</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-success"></div> IncomeExpenses </th>
                            <td>696000 </td>
                            <td>58600 </td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-danger"></div> Surplus/deficit</th>
                            <td>56000</td>
                            <td>45000</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
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
                      <LineBarDebtor />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <Table className="table mb-0 table-stripped table-hovered">
                        <thead>
                          <tr>
                            <th></th>                            
                            <td>Apr, 2020</td>
                            <td>May, 2020</td>
                            <td>Jun, 2020</td>
                            <td>Jul, 2020</td>
                            <td>Aug, 2020</td>
                            <td>Sep, 2020</td>
                            <td>Oct, 2020</td>
                            <td>Nov, 2020</td>
                            <td>Dec, 2020</td>
                            <td>Jan, 2021</td>
                            <td>Feb, 2021</td>
                            <td>Mar, 2021</td>
                            <td>Apr, 2021</td>
                            <td>May, 2021</td>
                            <td>Jun, 2021</td>
                            <td>Jul, 2021</td>
                            <td>Ayg, 2021</td>
                            <td>Sep, 2021</td>
                            <td>Oct, 2021</td>      
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-primary"></div> Maintenance Lift </th>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-warning"></div>  Property Management Fee </th>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-secondary"></div> Management Staff Cost</th>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-outline-primary"></div> Services, Cleaning and Landscaping</th>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-info"></div> Services-Security</th>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-success"></div> Facing System</th>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                            <td>2109</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-dark"></div> Others</th>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                            <td>35200</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-danger"></div> Total</th>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                            <td>12365</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>



 
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4 h4">Contractual VS Non contractual ：Year 2020 + July 2021  </CardTitle>
                    <div id="mix-line-bar" className="e-chart">
                      <LineBarContructual />
                    </div>
                  </CardBody>
                </Card>
                </Col> 
                <Col lg={12}>
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <Table className="table mb-0 table-stripped table-hovered">
                        <thead>
                          <tr>
                            <th></th>                            
                            <td>Apr, 2020</td>
                            <td>May, 2020</td>
                            <td>Jun, 2020</td>
                            <td>Jul, 2020</td>
                            <td>Aug, 2020</td>
                            <td>Sep, 2020</td>
                            <td>Oct, 2020</td>
                            <td>Nov, 2020</td>
                            <td>Dec, 2020</td>
                            <td>Jan, 2021</td>
                            <td>Feb, 2021</td>
                            <td>Mar, 2021</td>
                            <td>Apr, 2021</td>
                            <td>May, 2021</td>
                            <td>Jun, 2021</td>
                            <td>Jul, 2021</td>
                            <td>Ayg, 2021</td>
                            <td>Sep, 2021</td>
                            <td>Oct, 2021</td>      
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-success"></div> Contractual Expennses</th>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-warning"></div>  Contractual Expennses</th>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-danger"></div>Total</th>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                          </tr>                         
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>              
              </Row>
             







            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4 h4">Cash Flow Trend ：Year 2020 + July 2021  </CardTitle>
                    <div id="mix-line-bar" className="e-chart">
                      <LineBarCashFlow />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <Table className="table mb-0 table-stripped table-hovered">
                        <thead>
                          <tr>
                            <th></th>                            
                            <td>Apr, 2020</td>
                            <td>May, 2020</td>
                            <td>Jun, 2020</td>
                            <td>Jul, 2020</td>
                            <td>Aug, 2020</td>
                            <td>Sep, 2020</td>
                            <td>Oct, 2020</td>
                            <td>Nov, 2020</td>
                            <td>Dec, 2020</td>
                            <td>Jan, 2021</td>
                            <td>Feb, 2021</td>
                            <td>Mar, 2021</td>
                            <td>Apr, 2021</td>
                            <td>May, 2021</td>
                            <td>Jun, 2021</td>
                            <td>Jul, 2021</td>
                            <td>Ayg, 2021</td>
                            <td>Sep, 2021</td>
                            <td>Oct, 2021</td>      
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-primary"></div> Receipts </th>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-warning"></div>  Payments </th>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-success"></div> Surplus/Deflict </th>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-info"></div> Commulative cash flow </th>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-danger"></div> Ending cash value</th>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                          </tr>                         
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>


            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4"> Cash & Bank Balance Trend: Year 2020 + July 2021 </CardTitle>
                    <ApaexlinecolumnCashBank />
                  </CardBody>
                </Card>
              </Col>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <Table className="table mb-0 table-stripped table-hovered">
                        <thead>
                          <tr>
                            <th></th>                            
                            <td>Apr, 2020</td>
                            <td>May, 2020</td>
                            <td>Jun, 2020</td>
                            <td>Jul, 2020</td>
                            <td>Aug, 2020</td>
                            <td>Sep, 2020</td>
                            <td>Oct, 2020</td>
                            <td>Nov, 2020</td>
                            <td>Dec, 2020</td>
                            <td>Jan, 2021</td>   
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-info"></div> Maintenance Funds -  CIMB </th>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                            <td>704</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-success"></div>  Sinking Funds-CIMB </th>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-secondary"></div> Maintenance Funds-UOB </th>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>15854</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-dark"></div> Fixed Deposit </th>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>31940</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-warning"></div> Pretty Cash</th>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                          </tr>             

                             <tr>
                            <th scope="row"><div className="custom-circle btn-danger"></div> Total</th>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                          </tr>                 
                        </tbody>
                      </Table>
                    </div>
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
