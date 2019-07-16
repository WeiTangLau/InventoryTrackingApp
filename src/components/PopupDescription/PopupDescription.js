import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import ItemImage from "../ItemImage/ItemImage";

class PopupDescription extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
      >
        <Modal.Header closeButton>
          <Modal.Title className="h-25">
            {this.props.row.original.name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ItemImage image={this.props.row.original.image} alt="Item" />
          <div className="b--solid ba pa2 ma2">
            <span>
              <div className="tj">
                {this.props.row.original.description.description}
              </div>
            </span>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PopupDescription;
