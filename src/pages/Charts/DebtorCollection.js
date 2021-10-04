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
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-primary"></div> Income </th>
                            <td>123</td>
                            <td>152</td>
                            <td>163</td>
                            <td>123</td>
                            <td>120</td>
                            <td>122</td>
                            <td>154</td>
                            <td>415</td>
                            <td>222</td>
                            <td>212</td>
                            <td>201</td>
                            <td>102</td>
        
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-success"></div>  Expenses </th>
                            <td>88 </td>
                            <td>84 </td>
                            <td>25 </td>
                            <td>111 </td>
                            <td>210 </td>
                            <td>12 </td>
                            <td>21 </td>
                            <td>85 </td>
                            <td>26 </td>
                            <td>366 </td>
                            <td>25 </td>
                            <td>84 </td>
          
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-danger"></div> Surplus/deficit</th>
                            <td>63</td>
                            <td>59</td>
                            <td>85</td>
                            <td>59</td>
                            <td>96</td>
                            <td>59</td>
                            <td>11</td>
                            <td>32</td>
                            <td>59</td>
                            <td>25</td>
                            <td>59</td>
                            <td>55</td>
    
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
                    <CardTitle className="mb-4"> Income & Expenditure ：Year 2019 + July 2020  </CardTitle>
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
                            <td>July, 2019 </td>
                            <td>July, 2020 </td>
      
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
                            <th scope="row"> <div className="custom-circle btn-success"></div>  Property Management Fee </th>
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
                            <th scope="row"><div className="custom-circle btn-info"></div> Management Staff Cost</th>
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
                            <th scope="row"><div className="custom-circle btn-dark"></div> Services, Cleaning and Landscaping</th>
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
                            <th scope="row"><div className="custom-circle green-color"></div> Services-Security</th>
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
                            <th scope="row"><div className="custom-circle btn-warning"></div> Facing System</th>
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
                            <th scope="row"><div className="custom-circle blue-color"></div> Others</th>
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
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-primary"></div> Receipts </th>
                            <td>704</td>
                            <td>555</td>
                            <td>354</td>
                            <td>704</td>
                            <td>654</td>
                            <td>704</td>
                            <td>999</td>
                            <td>704</td>
                            <td>565</td>
                            <td>3254</td>
                            <td>704</td>
                            <td>120</td>
                            <td>140</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-success"></div>  Payments </th>
                            <td>3321 </td>
                            <td>5500 </td>
                            <td>245 </td>
                            <td>2350 </td>
                            <td>1254 </td>
                            <td>888 </td>
                            <td>235 </td>
                            <td>111 </td>
                            <td>11000 </td>
                            <td>544 </td>
                            <td>254 </td>
                            <td>999 </td>
                            <td>1200 </td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-info"></div> Surplus/Deflict </th>
                            <td>1255</td>
                            <td>857</td>
                            <td>4576</td>
                            <td>777</td>
                            <td>547</td>
                            <td>15854</td>
                            <td>7770</td>
                            <td>1251</td>
                            <td>965</td>
                            <td>584</td>
                            <td>3655</td>
                            <td>3055</td>
                            <td>3655</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-dark"></div> Commulative cash flow </th>
                            <td>574</td>
                            <td>1544</td>
                            <td>31940</td>
                            <td>5411</td>
                            <td>31940</td>
                            <td>4125</td>
                            <td>31940</td>
                            <td>6541</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>3520</td>
                            <td>31940</td>
                            <td>6510</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-danger"></div> Ending cash value</th>
                            <td>4519</td>
                            <td>2100</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>3210</td>
                            <td>4519</td>
                            <td>2654</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>9519</td>
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
                            <td>July 2020</td>
                            <td>Aug 2020</td>
                            <td>Sep 2020</td>
                            <td>Oct 2020</td>
                            <td>Nov 2020</td>
                            <td>Dec 2020</td>
                            <td>Jan 2021</td>
                            <td>Feb 2021</td> 
                            <td>Mar 2021</td> 
                            <td>Apr 2021</td> 
                            <td>May 2021</td> 
                            <td>Jun 2021</td> 
                            <td>Jul 2021</td> 
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-primary"></div> Maintenance Funds -  CIMB </th>
                            <td>704</td>
                            <td>858</td>
                            <td>704</td>
                            <td>965</td>
                            <td>704</td>
                            <td>704</td>
                            <td>635</td>
                            <td>704</td>
                            <td>358</td>
                            <td>704</td>
                            <td>855</td>
                            <td>704</td>
                            <td>214</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-success"></div>  Sinking Funds-CIMB </th>
                            <td>11000 </td>
                            <td>15421 </td>
                            <td>11000 </td>
                            <td>78676 </td>
                            <td>11000 </td>
                            <td>75676 </td>
                            <td>11000 </td>
                            <td>745656 </td>
                            <td>11000 </td>
                            <td>47567 </td>
                            <td>11000 </td>
                            <td>11000 </td>
                            <td>4553 </td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-info"></div> Maintenance Funds-UOB </th>
                            <td>15854</td>
                            <td>8769</td>
                            <td>15854</td>
                            <td>45456</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>4555</td>
                            <td>15854</td>
                            <td>15854</td>
                            <td>5678</td>
                            <td>15854</td>
                            <td>5424</td>
                            <td>15854</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-dark"></div> Fixed Deposit </th>
                            <td>31940</td>
                            <td>56985</td>
                            <td>31940</td>
                            <td>31940</td>
                            <td>56324</td>
                            <td>31940</td>
                            <td>23598</td>
                            <td>31940</td>
                            <td>5652</td>
                            <td>31940</td>
                            <td>4523</td>
                            <td>31940</td>
                            <td>6587</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-danger "></div> Pretty Cash</th>
                            <td>4519</td>
                            <td>4519</td>
                            <td>5200</td>
                            <td>4519</td>
                            <td>1255</td>
                            <td>4519</td>
                            <td>1129</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>3306</td>
                            <td>4519</td>
                            <td>1008</td>
                            <td>4519</td>
                          </tr>             

                             <tr>
                            <th scope="row"><div className="custom-circle btn-warning"></div> Total</th>
                            <td>4519</td>
                            <td>4519</td>
                            <td>1006</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>5004</td>
                            <td>4519</td>
                            <td>1122</td>
                            <td>4519</td>
                            <td>3365</td>
                            <td>4519</td>
                            <td>4519</td>
                            <td>12354</td>   
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
