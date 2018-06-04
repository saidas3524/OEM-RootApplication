import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";

import usrImg from "./images/user-image.png";
import microsoftImg from "./images/microsoft-logo.png";

import React, { Component } from "react";
import PropTypes from "prop-types";

class Global extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <header>
        <div class="container header-wrapper">
          {/* <!-- branding starts here--> */}
          <a class="navbar-brand microsoft mr-0" href="/">
            <img src={microsoftImg} alt="Microsoft OEM DOC" />
          </a>
          <a class="navbar-brand oem-doc mr-0" href="/">
            OEM Digital Operations Center
          </a>
          {/* <!-- branding ends here--> */}

          {/* <!-- User login details starts here--> */}

          <Dropdown
            isOpen={this.state.dropdownOpen}
            className="user-login-details ml-auto"
            toggle={this.toggle}
          >
            <DropdownToggle
              tag="div"
              className="btn dropdown-toggle icon-dropdown ms-glyph ms-chevron-down"
              role="button"
              id="loggedUserDetail"
              aria-haspopup
              aria-expanded={false}
            >
              <h5 className="user-name-area d-sm-block">
                <span className="first-name">Karthik</span>
                <span className="last-name">Naik</span>
              </h5>
              <span className="user-avtar icon-profile">
                <img src={usrImg} alt="user-profile-image" />
              </span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="loggedUserDetail">
              <DropdownItem>
                <span className="profile-icon ms-glyph ms-contact" />Profile
              </DropdownItem>
              <DropdownItem>
                <span className="logout-icon ms-glyph ms-logout" />Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </header>
    );
  }
}

Global.propTypes = {};

export default Global;
