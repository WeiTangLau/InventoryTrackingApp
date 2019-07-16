import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

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
          <InputGroup.Append>
            <Button className="flex justify-end" variant="outline-secondary">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}
export default Searchbar;

//col-md-5 offset-md-6
/*

      */
