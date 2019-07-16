import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import DivisionCodeDropdownMenu from "./DivisionCodeDropdownMenu";

class DivisionCode extends Component {
  getDropdownItems = () => {
    return this.props.divisionCodes.map((code, index) => {
      return (
        <Dropdown.Item
          onClick={this.props.onDropdownButtonClick}
          eventKey={index}
        >
          {code.divisionCode}
        </Dropdown.Item>
      );
    });
  };

  render() {
    return (
      <DropdownButton
        alignRight={this.props.alignRight}
        title="Select Division Code"
        id="dropdown-item-button"
        placeholder="Select Division Code"
      >
        <Dropdown.Menu as={DivisionCodeDropdownMenu}>
          {this.getDropdownItems()}
        </Dropdown.Menu>
      </DropdownButton>
    );
  }
}

export default DivisionCode;
