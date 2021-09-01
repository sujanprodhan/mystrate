import React, { Component } from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

class CustomDropDownNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false,
      isOpenDropdown: false,
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      menu: !prevState.menu,
    }))
  }

  render() {
    const { menu } = this.state
    return (
      <React.Fragment>
        <Dropdown isOpen={menu} toggle={this.toggle} className="d-inline-block">
          <DropdownToggle
            className="btn header-item custom-dropdown-nav"
            tag="button"
          >
            15 Jan 2021
            <i className="bx bx-down-arrow"></i>
          </DropdownToggle>
          <DropdownMenu className="language-switch dropdown-menu-end">
            <DropdownItem> Test Menu</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    )
  }
}

export default CustomDropDownNav
