import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
// import apexChart
import LineApexChart from "../AllCharts/apex/chartapexFinancialOverview"
import DashedLine from "../AllCharts/apex/dashedLine"
import SplineArea from "../AllCharts/apex/SplineArea"
import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn"
import ApaexlinecolumnFinancialOverview from "../AllCharts/apex/ApaexlinecolumnFinancialOverview"
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
import LineBarFinancial from "../AllCharts/echart/linebarchartFinancialOveriew"

import { Card, CardBody, CardTitle, Col, Row,  Table} from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class FinancialOverview extends Component {
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
                    Defaulter Vs Non Defaulter Trend
                    </CardTitle>
                    <LineApexChart />
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
                            <td>Jan 2021</td>
                            <td>Feb 2021</td>
                            <td>Mar 2021</td>
                            <td>Apr 2021</td>
                            <td>May 2021</td>
                            <td>Jun 2021</td>
                            <td>Jul 2021</td>
                            <td>Ayg 2021</td>
                            <td>Sep 2021</td>
                            <td>Oct 2021</td>
                            <td>Nov 2021</td>
                            <td>Dec 2021</td>
      
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-primary"></div> Defaulter </th>
                            <td>277</td>
                            <td>275</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>125</td>
             
        
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-success"></div>  Non Defaulter  </th>
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
                            <td>90 </td>

                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-danger"></div> Total Recievables</th>
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
                            <td>56</td>
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
                    <CardTitle className="mb-4"> 12 Month Defaulter Receivable Aging  </CardTitle>
                    <ApaexlinecolumnFinancialOverview />
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
                            <td>Jan 2021</td>
                            <td>Feb 2021</td>
                            <td>Mar 2021</td>
                            <td>Apr 2021</td>
                            <td>May 2021</td>
                            <td>Jun 2021</td>
                            <td>Jul 2021</td>
                            <td>Ayg 2021</td>
                            <td>Sep 2021</td>
                            <td>Oct 2021</td>
                            <td>Nov 2021</td>
      
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-primary"></div> Open Credit </th>
                            <td>12560</td>
                            <td>12560</td>
                            <td>12560</td>
                            <td>12560</td>
                            <td>12560</td>
                            <td>12560</td>
                            <td>12560</td>
                            <td>5666</td>
                            <td>454</td>
                            <td>54454</td>
                            <td>787</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-success"></div> 5 Months >  </th>
                            <td>32650 </td>
                            <td>32650 </td>
                            <td>32650 </td>
                            <td>32650 </td>
                            <td>32650 </td>
                            <td>32650 </td>
                            <td>54244 </td>
                            <td>44111 </td>
                            <td>12344 </td>
                            <td>4444 </td>
                            <td>3651 </td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-info"></div> 4 Months</th>
                            <td>25100</td>
                            <td>25100</td>
                            <td>25100</td>
                            <td>25100</td>
                            <td>25100</td>
                            <td>25100</td>
                            <td>25100</td>
                            <td>25100</td>
                            <td>23111</td>
                            <td>1111</td>
                            <td>52111</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-dark"></div> 3 Months</th>
                            <td>45120</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>456456</td>
                            <td>123232</td>
                            <td>2332</td>
                            <td>123213</td>
                            <td>10012</td>
                          </tr>

                          <tr>
                            <th scope="row"> <div className="custom-circle green-color"></div> 2 Months</th>
                            <td>12400</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>36500</td>
                            <td>456454</td>
                            <td>45645</td>
                            <td>455</td>
                          </tr>

                          <tr>
                            <th scope="row"> <div className="custom-circle btn-warning"></div> 1 Month</th>
                            <td>32541</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>2130</td>
                            <td>10000</td>
                            <td>250000</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle blue-color"></div> Current</th>
                            <td>21320</td>
                            <td>5600</td>
                            <td>5600</td>
                            <td>5600</td>
                            <td>5600</td>
                            <td>5600</td>
                            <td>5600</td>
                            <td>5600</td>
                            <td>65465</td>
                            <td>123123</td>
                            <td>45646</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-danger"></div> Total Receivables</th>
                            <td>56000</td>
                            <td>45000</td>
                            <td>630000</td>
                            <td>987987</td>
                            <td>3213255</td>
                            <td>4545645</td>
                            <td>454545</td>
                            <td>630000</td>
                            <td>85212</td>
                            <td>85212</td>
                            <td>85212</td>
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
                      <LineBarFinancial />
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
                            <td>Jan 2021</td>
                            <td>Feb 2021</td>
                            <td>Mar 2021</td>
                            <td>Apr 2021</td>
                            <td>May 2021</td>
                            <td>Jun 2021</td>
                            <td>Jul 2021</td>
                            <td>Ayg 2021</td>
                            <td>Sep 2021</td>
                            <td>Oct 2021</td>
                            <td>Nov 2021</td>
                            <td>Dec 2021</td>
      
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-primary"></div> Open Credit </th>
                            <td>12560</td>
                            <td>12560</td>
                            <td>12560</td>
                            <td>12560</td>
                            <td>12560</td>
                            <td>12560</td>
                            <td>12560</td>
                            <td>5666</td>
                            <td>454</td>
                            <td>54454</td>
                            <td>787</td>
                            <td>564</td>
                          </tr>
                          <tr>
                            <th scope="row"><div className="custom-circle btn-success"></div> 5 Months >  </th>
                            <td>32650 </td>
                            <td>32650 </td>
                            <td>32650 </td>
                            <td>32650 </td>
                            <td>32650 </td>
                            <td>32650 </td>
                            <td>54244 </td>
                            <td>44111 </td>
                            <td>12344 </td>
                            <td>4444 </td>
                            <td>3651 </td>
                            <td>456 </td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-info"></div> 4 Months</th>
                            <td>25100</td>
                            <td>25100</td>
                            <td>25100</td>
                            <td>25100</td>
                            <td>25100</td>
                            <td>25100</td>
                            <td>25100</td>
                            <td>25100</td>
                            <td>23111</td>
                            <td>1111</td>
                            <td>52111</td>
                            <td>6854</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-dark"></div> 3 Months</th>
                            <td>45120</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>456456</td>
                            <td>123232</td>
                            <td>2332</td>
                            <td>123213</td>
                            <td>10012</td>
                            <td>5468</td>
                          </tr>

                          <tr>
                            <th scope="row"> <div className="custom-circle green-color"></div> 2 Months</th>
                            <td>12400</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>45000</td>
                            <td>36500</td>
                            <td>456454</td>
                            <td>45645</td>
                            <td>455</td>
                            <td>4550</td>
                          </tr>

                          <tr>
                            <th scope="row"> <div className="custom-circle btn-warning"></div> 1 Month</th>
                            <td>32541</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>1500</td>
                            <td>2130</td>
                            <td>10000</td>
                            <td>250000</td>
                            <td>30000</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle blue-color"></div> Current</th>
                            <td>21320</td>
                            <td>5600</td>
                            <td>5600</td>
                            <td>5600</td>
                            <td>5600</td>
                            <td>5600</td>
                            <td>5600</td>
                            <td>5600</td>
                            <td>65465</td>
                            <td>123123</td>
                            <td>45646</td>
                            <td>15646</td>
                          </tr>
                          <tr>
                            <th scope="row"> <div className="custom-circle btn-danger"></div> Total Receivables</th>
                            <td>56000</td>
                            <td>45000</td>
                            <td>630000</td>
                            <td>987987</td>
                            <td>3213255</td>
                            <td>4545645</td>
                            <td>454545</td>
                            <td>630000</td>
                            <td>85212</td>
                            <td>85212</td>
                            <td>85212</td>
                            <td>1100</td>
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

export default FinancialOverview
