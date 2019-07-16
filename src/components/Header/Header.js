import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../images/logo.png";
import SearchBar from "../Searchbar/Searchbar";
import DivisionCode from "../DivisionCode/DivisionCode";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  isMobile = window.innerWidth <= 500;

  render() {
    if (this.isMobile) {
      return (
        <Navbar sticky="top" bg="dark" variant="dark">
          <div>
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
            <div className="">
              <Nav.Item className="ml2">
                <SearchBar />
              </Nav.Item>
            </div>
          </div>
        </Navbar>
      );
    } else {
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
                alignRight={false}
                divisionCodes={this.props.divisionCodes}
                onDropdownButtonClick={this.props.onDropdownButtonClick}
              />
            </Nav.Item>
          </div>

          <div className="">
            <Nav.Item className="ml2">
              <SearchBar />
            </Nav.Item>
          </div>
        </Navbar>
      );
    }
  }
}

export default Header;
