import React, { Component } from "react"
import MetaTags from "react-meta-tags"
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import { Link, withRouter } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardUser from "./card-user-kptp"
import MiniWidget from "./mini-widget"
import CardUsernew from "./card-user-rep"
import CardWelcomenew from "./card-welcome-rep-kptp"
import CardWelcome from "./card-welcome-cob"
import MiniWidgetnew from "./mini-widget-rep"
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
  {
    id: 1,
    projectName: "Max Resedency Project",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 2,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 3,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 4,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 5,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 6,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 7,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 8,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 9,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 10,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 11,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 12,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 13,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 14,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 15,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 16,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 17,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 18,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 19,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 20,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 21,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 22,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
  {
    id: 23,
    projectName: "Max Resedency 2",
    taskIssue: "14",
    cobIssue: "5",
    attendanceIssue: "23",
    financialIssue: "good",
    status: "-",
  },
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
          title: "Application / Write in",
          value: "56 Pending",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From 50 Projects",
        },
        {
          icon: "bx bx-archive-in",
          title: "Compalints",
          value: "98941 pending",
          badgeValue: "+ 0.2%",
          color: "success",
          desc: "From 290 Projects ",
        },
        {
          icon: "bx bx-purchase-tag-alt",
          title: "Financial Report Submission",
          value: "985 Missed",
          badgeValue: "0%",
          color: "warning",
          desc: "From 150 Projects",
        },
      ],
      reportsnew: [
        {
          title: "Pending AGM",
          icon: "mdi mdi-bitcoin",
          color: "warning",
          value: "136 issue found",
          arrow: "mdi-arrow-up text-success",
          desc: "From 81 Projects",
          series: series1,
          options: options1,
        },
        {
          title: "Pending monthly meeting",
          icon: "mdi mdi-ethereum",
          color: "primary",
          arrow: "mdi-arrow-down text-danger",
          value: "86 Missed",
          desc: "From 49 Projects",
          series: series2,
          options: options2,
        },
        {
          title: "Yearly Audited Report",
          icon: "mdi mdi-litecoin",
          color: "info",
          arrow: "mdi-arrow-up text-success",
          value: "101 Pending",
          desc: "From 198 Projects",
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
      },
    }
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
            <title> Dashboard </title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs breadcrumbItem="KPTP Dashboard" title="Dashboard" />

            {/* Card User */}
            <CardUser />

            <Row>
              {/* card user */}
              {/* <CardUsernew /> */}

              <Col xl="12">
                {/* card welcome */}
                <CardWelcomenew />

                <Row>
                  {/* mini widgets new */}
                  <MiniWidget reports={this.state.reports} />
                </Row>
              </Col>
            </Row>

            <Row>
              <CardWelcome />

              <Col xl="8">
                <Row>
                  <MiniWidgetnew reportsnew={this.state.reportsnew} />
                </Row>
              </Col>
            </Row>

            {/* <TasksListnew /> */}
           
            <Card>
              <CardBody>
                <CardTitle className="h4"> Project Overview </CardTitle>
                <div className="table-rep-plugin">
                  <div
                    className="table-responsive mb-0"
                    data-pattern="priority-columns"
                  >
                    <Table
                      id="tech-companies-1"
                      className="table table-striped table-bordered table-hovered"
                    >
                      <Thead>
                        <Tr>
                          <Th>
                            <input type="checkbox" />
                          </Th>
                          <Th>ID</Th>
                          <Th data-priority="1">COB</Th>
                          <Th data-priority="3">Total Project</Th>
                          <Th data-priority="1">AGM Issue</Th>
                          <Th data-priority="3">Complaints</Th>
                          <Th data-priority="3">No Of Submission</Th>
                          <Th data-priority="6"> Details</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                            <input type="checkbox" />
                          </Td>
                          <Td>1</Td>
                          <Td>CEXL</Td>
                          <Td>3245</Td>
                          <Td>16523</Td>
                          <Td>15597</Td>                          
                          <Td>15597</Td>                          
                          <td>
                            <Link to="" className="">
                              View
                            </Link>
                          </td>
                        </Tr>
                        <Tr>
                          <Td>
                            <input type="checkbox" />
                          </Td>
                          <Td>2</Td>
                          <Td>Angeico Rasmos</Td>
                          <Td>Cheif Executive Officer</Td>
                          <Td>London</Td>
                          <Td>47</Td>
                          <Td>2009/10/09</Td>
                          <td>
                            $120,000.00
                          </td>
                        </Tr>
                        <Tr>
                          <Td>
                            <input type="checkbox" />
                          </Td>
                          <Td>3</Td>
                          <Td>Ashton Cax</Td>
                          <Td>Junior Technical Author</Td>
                          <Td>San Francisco</Td>
                          <Td>66</Td>
                          <Td>2009/10/09</Td>
                          <td>
                            $56,000.00
                          </td>
                        </Tr>
                        <Tr>
                          <Td>
                            <input type="checkbox" />
                          </Td>
                          <Td>4</Td>
                          <Td>Bradity Greer</Td>
                          <Td>Software Engineer</Td>
                          <Td>London</Td>
                          <Td>47</Td>
                          <Td>2009/10/09</Td>
                          <td>
                            $120,000.00
                          </td>
                        </Tr>
                        <Tr>
                          <Td>
                            <input type="checkbox" />
                          </Td>
                          <Td>5</Td>
                          <Td>Bendanan Wainger</Td>
                          <Td>Software Engineer</Td>
                          <Td>San Francisco</Td>
                          <Td>40</Td>
                          <Td>2009/10/09</Td>
                          <td>
                            $66,000.00
                          </td>
                        </Tr>
                        <Tr>
                          <Td>
                            <input type="checkbox" />
                          </Td>
                          <Td>6</Td>
                          <Td>Nubo Nash</Td>
                          <Td>Integration Speciality</Td>
                          <Td>London</Td>
                          <Td>28</Td>
                          <Td>2009/10/09</Td>
                          <td>
                            $125,000.00
                          </td>
                        </Tr>

                      </Tbody>
                    </Table>
                  </div>
                </div>
              </CardBody>
            </Card>
            {/* <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>

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
            </Row> */}
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard
