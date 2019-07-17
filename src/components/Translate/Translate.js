import React from "react";
import {
  Form,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
  ButtonGroup
} from "react-bootstrap";
import Table from "../Table/Table";

class Translate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textToTranslate: "",
      result: []
    };
  }

  translateText = () => {
    fetch(
      this.props.url +
        "translates?q=" +
        this.state.textToTranslate +
        "&divisionCode=" +
        this.props.selectedDivisionCode,
      {
        method: "get"
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ result: data });
      });
  };

  onInputTextChange = e => {
    e.preventDefault();
    this.setState({ textToTranslate: e.target.value });
  };

  render() {
    return (
      <div>
        <Form>
          <OverlayTrigger
            key="bottom"
            placement="bottom"
            overlay={
              <Tooltip id={`tooltip-bottom`}>
                Please enter <strong>text to translate</strong>.
              </Tooltip>
            }
          >
            <Form.Group as={Col}>
              <Form.Label>
                Please enter text to translate from any language to English
              </Form.Label>
              <Form.Control
                onChange={this.onInputTextChange}
                as="input"
                placeholder={"Text to translate"}
              />
            </Form.Group>
          </OverlayTrigger>
        </Form>
        <div className="flex justify-center">
          <ButtonGroup>
            <Button
              className="mb2"
              onClick={this.translateText}
              type="submit"
              variant="dark"
            >
              Translate
            </Button>
          </ButtonGroup>
        </div>

        <div>
          <Table
            items={this.state.result}
            categories={this.props.categories}
            brands={this.props.brands}
            selectedDivisionCode={this.props.selectedDivisionCode}
            url={this.props.url}
          />
        </div>
      </div>
    );
  }
}

export default Translate;

/*
<div>
          <p className="justify-center">{this.state.result}</p>
        </div>
*/
