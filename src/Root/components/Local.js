import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";

export default class Local extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div class="main-navigation">
        <Container>
          <Navbar color="dark" dark expand="xl">
            <div class="selected-nav d-block d-xl-none">Home</div>
            <NavbarToggler
              onClick={this.toggle}
              aria-controls="main-navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
              <NavItem>Home</NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Pricing
                  </DropdownToggle>
                  <UncontrolledDropdown >
                  <DropdownToggle nav caret>
                    Pricing
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}
