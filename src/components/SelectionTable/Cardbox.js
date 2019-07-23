import React from "react";
import {
  Accordion,
  Card,
  Form,
  Col,
  ButtonToolbar,
  Button
} from "react-bootstrap";

const Cardbox = props => {
  if (props.type === "criteria") {
    return (
      <div>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>{props.name}</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={"Enter " + props.name}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </div>
    );
  } else if (props.type === "submit") {
    return (
      <div>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ButtonToolbar>
              <Button type="submit">{props.name}</Button>
            </ButtonToolbar>
          </Card.Body>
        </Accordion.Collapse>
      </div>
    );
  }
};

export default Cardbox;
