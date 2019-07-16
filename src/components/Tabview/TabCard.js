import React from "react";
import { Form, Col, ButtonGroup, Button } from "react-bootstrap";
import TextBoxOverlay from "./TextBoxOverlay";

class TabCard extends React.Component {
  render() {
    const { type, id, name } = this.props;
    if (type === "criteria") {
      return (
        <Form.Group as={Col} controlId={"exampleForm.ControlTextarea" + id}>
          <Form.Label>{name}</Form.Label>
          <TextBoxOverlay {...this.props} />
        </Form.Group>
      );
    } else if (type === "submit") {
      return (
        <div
          className="mb3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ButtonGroup>
            <Button onClick={this.props.onFilterButtonClick} type="submit">
              {name}
            </Button>
          </ButtonGroup>
        </div>
      );
    }
  }
}

export default TabCard;

/*<TextBoxOverlay name={props.name} items={props.items} /> */
