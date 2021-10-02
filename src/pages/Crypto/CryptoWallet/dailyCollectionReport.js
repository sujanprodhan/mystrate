import React, { Component } from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux"
import { isEmpty } from "lodash"
import { Container, Row, Col, Card, CardBody, Media } from "reactstrap"
import { withRouter } from "react-router-dom"
import "assets/scss/datatables.scss"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import { getWallet } from "store/actions"
import WalletActivities from "./walletActivities"
import WalletStats from "./walletStatsDailyCollection"
import WalletOverView from "./walletOverView"

class DailyCollectionReport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenu: false,
      activeTab: "1",
    }
    this.toggleTab = this.toggleTab.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    const { onGetWallet } = this.props
    onGetWallet();
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenu: !prevState.isMenu,
    }))
  }

  render() {
    const {
      wallet,
      wallet: { walletHistory },
    } = this.props
    const { activeTab, isMenu } = this.state

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Daily Collection Report
</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Financial" breadcrumbItem="Daily Collection " />
            {!isEmpty(wallet) && (
              <Row>
                <Col xl="4">
                  <WalletStats
                    wallet={wallet}
                    isMenu={isMenu}
                    toggleMenu={this.toggleMenu}
                  />
                </Col>
                <Col xl="8">
                  <Row>
                    <Col sm="4">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <Media>
                            <div className="me-3 align-self-center">
                              <i className="mdi mdi-cash h2 text-warning mb-0" />
                            </div>
                            <Media body>
                              <p className="text-muted mb-2">Cash</p>
                              <h5 className="mb-0">
                              RM 1,245.00
                                {/* <span className="font-size-14 text-muted">
                                  = $ 9148.00
                                </span> */}
                              </h5>
                            </Media>
                          </Media>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <Media>
                            <div className="me-3 align-self-center">
                              <i className="mdi mdi-clipboard-list h2 text-primary mb-0" />
                            </div>
                            <Media body>
                              <p className="text-muted mb-2">Online </p>
                              <h5 className="mb-0">
                              RM 1,000.00
                                {/* <span className="font-size-14 text-muted">
                                  = $ 8235.00
                                </span> */}
                              </h5>
                            </Media>
                          </Media>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <Media>
                            <div className="me-3 align-self-center">
                              <i className="mdi mdi-book-account h2 text-info mb-0" />
                            </div>
                            <Media body>
                              <p className="text-muted mb-2">Cheque</p>
                              <h5 className="mb-0">
                              RM 500.00
                                {/* <span className="font-size-14 text-muted">
                                  = $ 4721.00
                                </span> */}
                              </h5>
                            </Media>
                          </Media>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <WalletOverView wallet={wallet} />
                </Col>
              </Row>
            )}
            <Row>
              <Col lg="12">
                {!isEmpty(walletHistory) && (
                  <WalletActivities
                    walletHistory={walletHistory}
                    activeTab={activeTab}
                    toggleTab={this.toggleTab}
                  />
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

DailyCollectionReport.propTypes = {
  wallet: PropTypes.any,
  onGetWallet: PropTypes.func,
}

const mapStateToProps = ({ crypto }) => ({
  wallet: crypto.wallet,
})

const mapDispatchToProps = dispatch => ({
  onGetWallet: () => dispatch(getWallet()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DailyCollectionReport))
