import React from "react";
import { Accordion, Card } from "react-bootstrap";
import Cardbox from "./Cardbox";
import ImageForm from "../FilterTable/ImageForm";
const SelectionTable = () => {
  return (
    <div
      className="ma3"
      style={{ border: "2px solid red", borderRadius: "5px" }}
    >
      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Select filter criteria
          </Accordion.Toggle>
          <Cardbox type="criteria" name={"Common Item ID"} />
          <Cardbox type="criteria" name={"Brand"} />
          <Cardbox type="criteria" name={"Category"} />
          <Cardbox type="submit" name={"Filter"} />
        </Card>
      </Accordion>
      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Take a Picture
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ImageForm />
          </Accordion.Collapse>

          <Cardbox type="submit" name={"Filter"} />
        </Card>
      </Accordion>
    </div>
  );
};

export default SelectionTable;
