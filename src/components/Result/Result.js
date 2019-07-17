import React from "react";
import { Modal } from "react-bootstrap";

class Result extends React.Component {
  columns = [
    {
      Header: "Description",
      id: "description",
      accessor: c => c.description
    },
    {
      Header: "Score",
      id: "score",
      accesor: c => c.score
    }
  ];
  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Body>{this.props.result}</Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

export default Result;
