import React, { Component } from "react";
import "./Layout.css";
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
  DropdownItem
} from 'reactstrap';


class NavBar extends Component {
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
      <div>
        <Navbar className="navbar" expand="md">
          <NavbarBrand href="/"><img className='nav-icon' src='./images/thinkTribe.png' alt='brain'/> thinkTribe</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/dashboard">My Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tasks">Task List</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/calendar">Calendar</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dashboard">My Coversations</NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <i className="fas fa-user"></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink id="dropdown-link" href="/login">login</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink id="dropdown-link" href="/signup">signup</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar