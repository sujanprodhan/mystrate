import React, { Component } from "react"
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import MetaTags from 'react-meta-tags';
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"


//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardUser from "./card-user"
import CardWelcome from "./card-welcome"
import MiniWidget from "./mini-widget"
import DashedLine from "../AllCharts/apex/Cleaningdashline"
import BarChart from "../AllCharts/apex/Cleaningbarchat"
import projectColumns from "./projectColumns"


import ApexRevenue from "./ApexRevenue"
import { getUserProfile } from "store/actions"
import images from "assets/images"
import ToolkitProvider from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"





//Bitcoin Chart
const series1 = [
{ name: "BTC", data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] },
]
const options1 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#f1b44c"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
}

//Etherium Chart
const series2 = [
{ name: "ETH", data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] },
]
const options2 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#3452e1"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
}

//LiteCoin Chart
const series3 = [
{ name: "LTC", data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14] },
]
const options3 = {
  chart: { sparkline: { enabled: !0 } },
  stroke: { curve: "smooth", width: 2 },
  colors: ["#50a5f1"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: !1,
      opacityFrom: 0.45,
      opacityTo: 0.05,
      stops: [25, 100, 100, 100],
    },
  },
  tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
}





class Cleaningreport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
      {
        icon: "bx bx-copy-alt",
        title: "Area Cleaned Total ",
        value: "100",
        badgeValue: "+ 0.2%",
        color: "success",
        desc: "From previous period",
      },
      {
        icon: "bx bx-archive-in",
        title: "Area Not Cleaned Total",
        value: "80",
        badgeValue: "+ 0.2%",
        color: "success",
        desc: "From previous period",
      },
      {
        icon: "bx bx-purchase-tag-alt",
        title: "Not Cleaned for > 30 Days",
        value: "15",
        badgeValue: "0%",
        color: "warning",
        desc: "From previous period",
      },

      ],
      

    }
  }

  ComponentDidMount() {
    const { onGetUserProfile } = this.props
    onGetUserProfile()
  }

  render() {

    const { userProfile } = this.props

    return (
      <React.Fragment>
      <div className="page-content">
      <MetaTags>
      <title>Cleaning Report</title>
      </MetaTags>
      <Container fluid>
    {/* Render Breadcrumb */}
    <Breadcrumbs breadcrumbItem="Cleaning Report" />

  {/* Card User */}
  <CardUser />

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
<CardTitle className="mb-4">Area Cleaned by Tower Today</CardTitle>
<DashedLine />
</CardBody>
</Card>
</Col>

<Col lg={6}>
<Card>
<CardBody>
<CardTitle className="mb-4">Task Reported Per cleaner Today</CardTitle>
<BarChart />
</CardBody>
</Card>
</Col>



</Row>


<div class="row">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <div class="mb-4 h4 card-title">Area Cleaned Today</div>
        <div class="row">
          <div class="col-xl-12">
            <div class="table-responsive">
              <div class="react-bootstrap-table">
                <table class="table table table-nowrap table-hover mb-0">
                  <thead class="tbody-light">
                    <tr>
                      <th tabindex="0" aria-label="# sortable" class="sortable">#<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Tower sortable" class="sortable">Tower<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Level sortable" class="sortable">Level<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Area sortable" class="sortable">Area<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Created By sortable" class="sortable">Created By<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="Time Spent sortable" class="sortable">Time Spent<span class="order-4"></span>
                      </th>
                      <th tabindex="0" aria-label="View Picture sortable" class="sortable">View Picture<span class="order-4"></span>
                      </th>
                    </tr>

                    <tr>
                      <td tabindex="0" aria-label="# sortable" class="sortable">1<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Tower sortable" class="sortable">Tower A<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Level sortable" class="sortable">Level A<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Area sortable" class="sortable">Common Area<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Created By sortable" class="sortable">John<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Time Spent sortable" class="sortable">36 Min<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="View Picture sortable" class="sortable">View Image<span class="order-4"></span>
                      </td>
                    </tr>

                    <tr>
                      <td tabindex="0" aria-label="# sortable" class="sortable">1<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Tower sortable" class="sortable">Tower A<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Level sortable" class="sortable">Level A<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Area sortable" class="sortable">Common Area<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Created By sortable" class="sortable">John<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Time Spent sortable" class="sortable">36 Min<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="View Picture sortable" class="sortable">View Image<span class="order-4"></span>
                      </td>
                    </tr>

                    <tr>
                      <td tabindex="0" aria-label="# sortable" class="sortable">1<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Tower sortable" class="sortable">Tower A<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Level sortable" class="sortable">Level A<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Area sortable" class="sortable">Common Area<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Created By sortable" class="sortable">John<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="Time Spent sortable" class="sortable">36 Min<span class="order-4"></span>
                      </td>
                      <td tabindex="0" aria-label="View Picture sortable" class="sortable">View Image<span class="order-4"></span>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>










</Container>
</div>
</React.Fragment>
)
  }
}



Cleaningreport.propTypes = {
  userProfile: PropTypes.any,
  onGetUserProfile: PropTypes.func,
}

const mapStateToProps = ({ contacts }) => ({
  userProfile: contacts.userProfile,
})

const mapDispatchToProps = dispatch => ({
  onGetUserProfile: () => dispatch(getUserProfile()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Cleaningreport))
