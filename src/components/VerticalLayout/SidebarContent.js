import PropTypes from "prop-types"
import React, { Component } from "react"

//Simple bar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

import * as Icon from 'react-feather';


class SidebarContent extends Component {
  constructor(props) {
    super(props)
    this.refDiv = React.createRef()
  }

  componentDidMount() {
    this.initMenu()
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, ss) {
    if (this.props.type !== prevProps.type) {
      this.initMenu()
    }
  }

  initMenu() {
    new MetisMenu("#side-menu")

    let matchingMenuItem = null
    const ul = document.getElementById("side-menu")
    const items = ul.getElementsByTagName("a")
    for (let i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem)
    }
  }

  // componentDidUpdate() {}

  scrollElement = item => {
    setTimeout(() => {
      if (this.refDiv.current !== null) {
        if (item) {
          const currentPosition = item.offsetTop
          if (currentPosition > window.innerHeight) {
            if (this.refDiv.current)
              this.refDiv.current.getScrollElement().scrollTop =
                currentPosition - 300
          }
        }
      }
    }, 300)
  }

  activateParentDropdown = item => {
    item.classList.add("active")
    const parent = item.parentElement

    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      this.scrollElement(item)
      return false
    }
    this.scrollElement(item)
    return false
  }

  render() {
    return (
      <React.Fragment>
        <SimpleBar style={{ maxHeight: "100%" }} ref={this.refDiv}>
          <div id="sidebar-menu">
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">{this.props.t("Menu")}</li>
              

              <li>
                <Link to="/dashboard" className="my-tooltip">
                  {/* <i className="bx bx-calendar" /> */}
                  <Icon.Mail color="#888" size={20} strokeWidth={1} />
                  
                  <span class="tooltiptext">{this.props.t("Dashboard")}</span>
                  
                </Link>
              </li>

             

              <li className="menu-title">{this.props.t("Daily Operation")}</li>

              <li>
                <Link to="/attendance-page" className="my-tooltip">
                  {/* <i className="bx bx bx-user" /> */}
                  <Icon.Edit color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Attendance")}</span>

                  
                </Link>
              </li>


              

              <li>
                <Link to="/complaints" className="my-tooltip">
                  {/* <i className="bx  bx-comment" /> */}
                  <Icon.Tag color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Complaints")}</span>
                </Link>
              </li>  

              <li>
                <Link to="/tasks-page" className="my-tooltip">
                  {/* <i className="bx bx-task" /> */}
                  <Icon.List color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Tasks")}</span>
                </Link>
              </li>

              <li>
                <Link to="/schedule-maintain" className="my-tooltip">
                  {/* <i className="bx bx-calendar" /> */}
                  <Icon.Calendar color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Schedule Preventive")}</span>
                </Link>
              </li>

              <li>
                <Link to="/incidentreport" className="my-tooltip">
                  {/* <i className="bx bxs-folder-open" /> */}
                  <Icon.Folder color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Incident Report")}</span>
                </Link>
              </li> 

              <li>
                <Link to="/cleaningreport" className="my-tooltip">
                  {/* <i className="bx bx-brush" /> */}
                  <Icon.Printer color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Cleaning Report")}</span>
                </Link>
              </li>

              {/* <li>
                <Link to="/debtcollection" className="">
                  <i className='bx bx-credit-card-alt'></i>
                  <span>{this.props.t("Debtor & Collection")}</span>
                </Link>
              </li>  */}

  
              
              <li>
                <Link to="/visitormanagement" className="my-tooltip">
                  {/* <i className='bx bxs-user-pin'></i> */}
                  <Icon.User color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Visitor Management")}</span>
                </Link>
              </li>    

              <li>
                <Link to="/accesscards" className="my-tooltip">
                  {/* <i className='bx bxs-id-card' ></i> */}
                  <Icon.CreditCard color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Access Card summary")}</span>
                </Link>
              </li>     

              {/* <li>
                <Link to="/accountingreport" className="">
                 <i className='bx bx-file'></i>
                  <span>{this.props.t("Accounting Report")}</span>
                </Link>
              </li> */}

              <li>
                <Link to="/serviceproviderlog" className="my-tooltip">
                  {/* <i className='bx bx-log-in-circle' ></i> */}
                  <Icon.LogOut color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Service Provider Log")}</span>
                </Link>
              </li>

              <li>
                <Link to="/assetstagging" className="my-tooltip">
                  {/* <i className='bx bx-purchase-tag-alt' ></i> */}
                  <Icon.ShoppingCart color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Asset Tagging")}</span>
                </Link>
              </li>

              <li>
                <Link to="/#" className="has-arrow my-tooltip">
                  {/* <i className="bx bx-store" /> */}
                  <Icon.Home color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Financial")}</span>
                </Link >
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/daily-collection-report">
                      {this.props.t("Daily Collection Report ")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/debtor-collection">
                      {this.props.t("Debtor & Collection ")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/financial-overview">
                      {this.props.t("Financial Overview")}
                    </Link>
                  </li>
                </ul>
              </li>



              <li className="menu-title">{this.props.t("Important Information")}</li>

              <li>
                <Link to="/buildinginformation" className="my-tooltip">
                  {/* <i className='bx bxs-file-find' ></i> */}
                  <Icon.Filter color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Building Information")}</span>
                </Link>
              </li>

              {/* <li>
                <Link to="/committeeinfo" className="">
                 <i className='bx bxs-user-voice' ></i>
                  <span>{this.props.t("Committee Information")}</span>
                </Link>
              </li> */}

              <li>
                <Link to="/importantfiles" className="my-tooltip">
                  {/* <i className='bx bx-file' ></i> */}
                  <Icon.File color="#888" size={20} strokeWidth={1}/>
                  <span class="tooltiptext">{this.props.t("Important Files")}</span>
                </Link>
              </li>

              {/* <li>
                <Link to="/settingpage" className="">
                  <i  className='bx bxs-wrench'></i>
                  <span>{this.props.t("Setting")}</span>
                </Link>
              </li> */}
              

              <li className="menu-title">{this.props.t("Project")}</li>

              <li>
                <Link to="/login-height-apartment" className="">
                  <span>{this.props.t("Loging Height Apartment")}</span>
                </Link>
              </li>
              <li>
                <Link to="/vista-condominium" className="">
                  <span>{this.props.t("Vista Condominium")}</span>
                </Link>
              </li>
              <li>
                <Link to="/sain-john-residency" className="">
                  <span>{this.props.t("Sain John Residency")}</span>
                </Link>
              </li>
              <li>
                <Link to="/max-hilton-tower" className="">
                  <span>{this.props.t("Maxhilton Tower")}</span>
                </Link>
              </li>

              

               
            </ul>
          </div>
        </SimpleBar>
      </React.Fragment>
    )
  }
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
  type: PropTypes.string,
}

export default withRouter(withTranslation()(SidebarContent))
