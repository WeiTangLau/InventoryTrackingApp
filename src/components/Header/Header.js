import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../images/logo.png";
import DivisionCode from "../DivisionCode/DivisionCode";

class Header extends React.Component {
  render() {
    return (
      <Navbar className="" sticky="top" bg="dark" variant="dark">
        <div className="flex justify-between flex-wrap w-100 ">
          <Navbar.Brand href="">
            <img
              alt="Stocker Logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" Stocker "}
          </Navbar.Brand>
          <Nav.Item>
            <DivisionCode
              alignRight={true}
              divisionCodes={this.props.divisionCodes}
              onDropdownButtonClick={this.props.onDropdownButtonClick}
            />
          </Nav.Item>
        </div>
      </Navbar>
    );
  }
}

export default Header;
