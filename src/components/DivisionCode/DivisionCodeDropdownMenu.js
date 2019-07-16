import React from "react";
import { FormControl, Dropdown } from "react-bootstrap";

class DivisionCodeDropdownMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = { value: "" };
  }

  handleChange(e) {
    this.setState({ value: e.target.value.toLowerCase().trim() });
  }

  render() {
    const { children, "aria-labelledby": labeledBy } = this.props;

    const { value } = this.state;

    return (
      <div aria-labelledby={labeledBy}>
        <Dropdown.Header>
          Please select an existing Division Code
        </Dropdown.Header>
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={this.handleChange}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            child =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
}

export default DivisionCodeDropdownMenu;

// style={style} className={className}
