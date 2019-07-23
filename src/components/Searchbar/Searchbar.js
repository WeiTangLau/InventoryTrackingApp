import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

class Searchbar extends React.Component {
  render() {
    return (
      <div>
        <InputGroup>
          <FormControl
            className="flex flex-end"
            onChange={this.props.onSearchChange}
            type="text"
            placeholder="Search for item"
            aria-label="Search for item"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
      </div>
    );
  }
}
export default Searchbar;
