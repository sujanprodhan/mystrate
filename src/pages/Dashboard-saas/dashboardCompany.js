import React, { Component } from "react"
import MetaTags from "react-meta-tags"
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardUser from "./card-user-company"
import MiniWidget from "./mini-widget"
import CardUsernew from "./card-user-rep-company"
import CardWelcomenew from "./card-welcome-rep-company"

// datatable related plugins
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator"

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"

import "../Tables/datatables.scss"

// Table data
const products = [
  {id: 1, projectName: "Max Resedency Project", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 2, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 3, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 4, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 5, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 6, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 7, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 8, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 9, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 10, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 11, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 12, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 13, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 14, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 15, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 16, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 17, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 18, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 19, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 20, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 21, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 22, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"},
  {id: 23, projectName: "Max Resedency 2", taskIssue: "14",cobIssue: "5", attendanceIssue: "23", financialIssue: "good",status: "-"}
]

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

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      sizePerPage: 10,
      productData: products,
      reports: [
        {
          icon: "bx bx-copy-alt",
          title: "Pending Tasks",
          value: "89 pendings",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From 15 projects",
        },
        {
          icon: "bx bx-archive-in",
          title: "Pending Complaints",
          value: "150",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From 12 projects",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Financial Report Submission",
          value: "13 missed",
          badgeValue: "0%",
          color: "warning",
          desc: "From 8 projects",
        },
      ],
      reportsnew: [
        {
          title: "cleaner",
          icon: "mdi mdi-bitcoin",
          color: "warning",
          value: "10 Staff",
          arrow: "mdi-arrow-up text-success",
          desc: "0 Absent",
          series: series1,
          options: options1,
        },
        {
          title: "security day",
          icon: "mdi mdi-ethereum",
          color: "primary",
          arrow: "mdi-arrow-down text-danger",
          value: "10 Staff",
          desc: "1 Absent",
          series: series2,
          options: options2,
        },
        {
          title: "Security Night",
          icon: "mdi mdi-litecoin",
          color: "info",
          arrow: "mdi-arrow-up text-success",
          value: "12 Staff",
          desc: "3 Absent",
          series: series3,
          options: options3,
        },
      ],
    }
  }

  render() {
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
    //    alert(rowIndex);
      }
    };
    const columns = [
      {
        dataField: "projectName",
        text: "Project Name",
        sort: true,
      },
      {
        dataField: "taskIssue",
        text: "Task issue",
        sort: true,
      },
      {
        dataField: "cobIssue",
        text: "COB issue",
        sort: true,
      },
      {
        dataField: "attendanceIssue",
        text: "Attendance issue",
        sort: true,
      },
      {
        dataField: "financialIssue",
        text: "Financial issue",
        sort: true,
      },
      {
        dataField: "status",
        text: "status",
        sort: true,
      },
    ]

    const defaultSorted = [
      {
        dataField: "id",
        order: "asc",
      },
    ]

    const pageOptions = {
      sizePerPage: 10,
      totalSize: products.length, // replace later with size(customers),
      custom: true,
    }

    // Custom Pagination Toggle
    const sizePerPageList = [
      { text: "5", value: 5 },
      { text: "10", value: 10 },
      { text: "15", value: 15 },
      { text: "20", value: 20 },
      { text: "25", value: 25 },
      { text: "All", value: this.state.productData.length },
    ]

    // Select All Button operation
    const selectRow = {
      mode: "checkbox",
    }

    const { SearchBar } = Search

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title> Company Dashboard </title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs breadcrumbItem="Company Dashboard" title="Dashboard"/>

            {/* Card User */}
            <CardUser />

            <Row>
              {/* card user */}
              <CardUsernew />

              <Col xl="8">
                {/* card welcome */}
                <CardWelcomenew />

                <Row>
                  {/* mini widgets new */}
                  <MiniWidget reports={this.state.reports} />
                </Row>
              </Col>
            </Row>

            {/* <Row>
           
              <CardWelcome />

              <Col xl="8">
                <Row>
      
                  <MiniWidgetnew reportsnew={this.state.reportsnew} />
                </Row>
              </Col>
            </Row>




              <TasksListnew /> */}

            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    {/* <CardTitle className="h4">Default Datatable </CardTitle>
                    <p className="card-title-desc">
                      react-bootstrap-table-next plugin has most features enabled by default,
                      so all you need to do to use it with your own tables is to
                      call the construction function:{" "}
                      <code>react-bootstrap-table-next </code>.
                    </p> */}
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField="id"
                      columns={columns}
                      data={this.state.productData}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          columns={columns}
                          data={this.state.productData}
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>
                              <Row className="mb-2">
                                <Col md="4">
                                  <div className="search-box me-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                      <SearchBar
                                        {...toolkitProps.searchProps}
                                      />
                                      <i className="bx bx-search-alt search-icon" />
                                    </div>
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col xl="12">
                                  <div className="table-responsive">
                                    <BootstrapTable
                                      keyField={"id"}
                                      responsive
                                      bordered={false}
                                      striped={false}
                                      defaultSorted={defaultSorted}
                                      selectRow={selectRow}
                                      rowEvents={ rowEvents }
                                      classes={
                                        "table align-middle table-nowrap"
                                      }
                                      headerWrapperClasses={"thead-light"}
                                      {...toolkitProps.baseProps}
                                      {...paginationTableProps}
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Row className="align-items-md-center mt-30">
                                <Col className="inner-custom-pagination d-flex">
                                  <div className="d-inline">
                                    <SizePerPageDropdownStandalone
                                      {...paginationProps}
                                    />
                                  </div>
                                  <div className="text-md-right ms-auto">
                                    <PaginationListStandalone
                                      {...paginationProps}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </React.Fragment>
                          )}
                        </ToolkitProvider>
                      )}
                    </PaginationProvider>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard
