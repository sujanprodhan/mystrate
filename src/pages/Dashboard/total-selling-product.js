import React, { Component } from "react"
import { Col, Card, CardBody, Table } from "reactstrap"
import ReactApexChart from "react-apexcharts"

class TotalSellingProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      series1: [37],
      series2: [72],
      series3: [54],
      radialoptions1: {
        chart: { sparkline: { enabled: !0 } },
        dataLabels: { enabled: !1 },
        colors: ["#556ee6"],
        plotOptions: {
          radialBar: {
            hollow: { margin: 0, size: "60%" },
            track: { margin: 0 },
            dataLabels: { show: !1 },
          },
        },
      },
      radialoptions2: {
        chart: { sparkline: { enabled: !0 } },
        dataLabels: { enabled: !1 },
        colors: ["#34c38f"],
        plotOptions: {
          radialBar: {
            hollow: { margin: 0, size: "60%" },
            track: { margin: 0 },
            dataLabels: { show: !1 },
          },
        },
      },
      radialoptions3: {
        chart: { sparkline: { enabled: !0 } },
        dataLabels: { enabled: !1 },
        colors: ["#f46a6a"],
        plotOptions: {
          radialBar: {
            hollow: { margin: 0, size: "60%" },
            track: { margin: 0 },
            dataLabels: { show: !1 },
          },
        },
      },
    }
  }

  render() {
    return (
      <React.Fragment>
        <Col xl="6">
          <Card>
            <CardBody>
              <div className="clearfix">
                <div className="float-end">
                  <div className="input-group input-group">
                    <select className="form-select form-select-sm">
                      <option defaultValue>Jan</option>
                      <option value="1">Dec</option>
                      <option value="2">Nov</option>
                      <option value="3">Oct</option>
                    </select>
                    <label className="input-group-text">Month</label>
                  </div>
                </div>
                <h4 className="card-title mb-4">Defaulter</h4>
              </div>

              <div className="text-muted text-center">
                <p className="mb-2">Total Defaulter Amount</p>
                <h4>RM 458,34</h4>
                <p className="mt-4 mb-0">
                  
                  From 345 owners
                </p>
              </div>

              <div className="table-responsive mt-4">
                <Table className="table align-middle mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <h5 className="font-size-14 mb-1">First Contact</h5>
                        <p className="text-muted mb-0">called</p>
                      </td>

                      <td>
                        <div id="radialchart-1" className="apex-charts">
                          <ReactApexChart
                            options={this.state.radialoptions1}
                            series={this.state.series1}
                            type="radialBar"
                            height={60}
                            width={60}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="text-muted mb-1">Today</p>
                        <h5 className="mb-0">15</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 className="font-size-14 mb-1">Second Contact</h5>
                        <p className="text-muted mb-0">Send Demand Letter</p>
                      </td>

                      <td>
                        <div id="radialchart-2" className="apex-charts">
                          <ReactApexChart
                            options={this.state.radialoptions2}
                            series={this.state.series2}
                            type="radialBar"
                            height={60}
                            width={60}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="text-muted mb-1">Today</p>
                        <h5 className="mb-0">0</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h5 className="font-size-14 mb-1">Third Contact</h5>
                        <p className="text-muted mb-0">Barred Access Card</p>
                      </td>

                      <td>
                        <div id="radialchart-3" className="apex-charts">
                          <ReactApexChart
                            options={this.state.radialoptions3}
                            series={this.state.series3}
                            type="radialBar"
                            height={60}
                            width={60}
                          />
                        </div>
                      </td>
                      <td>
                        <p className="text-muted mb-1">Today</p>
                        <h5 className="mb-0">3</h5>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}

export default TotalSellingProduct
