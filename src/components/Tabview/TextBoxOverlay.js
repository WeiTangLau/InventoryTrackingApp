import React from "react";
import { OverlayTrigger, Tooltip, Form, Col } from "react-bootstrap";

class TextBoxOverlay extends React.Component {
  render() {
    const { name, items } = this.props;

    if (name === "Common Item ID") {
      return (
        <div>
          <OverlayTrigger
            key="bottom"
            placement="bottom"
            overlay={
              <Tooltip id={`tooltip-bottom`}>
                Enter <strong>{name}</strong> in this format. E.g. 1, 10, 3
              </Tooltip>
            }
          >
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                onChange={this.props.onCommonItemIdChange}
                as="input"
                placeholder={"Enter " + name}
              />
            </Form.Group>
          </OverlayTrigger>
        </div>
      );
    } else if (name === "Brand") {
      return (
        <div>
          <OverlayTrigger
            key="bottom"
            placement="bottom"
            overlay={
              <Tooltip id={`tooltip-bottom`}>
                Enter <strong>{name}</strong>.
              </Tooltip>
            }
          >
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                onChange={this.props.onBrandChange}
                as="select"
                placeholder={"Choose " + name}
              >
                <option>{"Choose a " + name}</option>
                {items.map(item => (
                  <option>{item.brandName}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </OverlayTrigger>
        </div>
      );
    } else {
      return (
        <div>
          <OverlayTrigger
            key="bottom"
            placement="bottom"
            overlay={
              <Tooltip id={`tooltip-bottom`}>
                Select a <strong>{name}</strong>.
              </Tooltip>
            }
          >
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                onChange={this.props.onCategoryChange}
                as="select"
                placeholder={"Choose " + name}
              >
                <option>{"Choose a " + name}</option>
                {items.map((item, index) => (
                  <option>{item.categoryName}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </OverlayTrigger>
        </div>
      );
    }
  }
}

export default TextBoxOverlay;
