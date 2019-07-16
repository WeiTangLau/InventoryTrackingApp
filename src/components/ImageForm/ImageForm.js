import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import Table from "../Table/Table";

class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: "",
      result: []
    };
  }

  imageSelectedHandler = event => {
    this.setState({ selectedImage: event.target.files[0] });
  };

  imageUploadHandler = event => {
    event.preventDefault();

    if (!this.state.selectedImage) {
      alert("Please select an image to upload.");
      return;
    }

    const fd = new FormData();
    fd.append("image", this.state.selectedImage);
    fd.append("divisionCode", this.props.selectedDivisionCode);

    fetch(this.props.url + "pictures/", {
      method: "post",
      body: fd,
      headers: { Accept: "multipart/form-data" }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ result: data });
      });
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group ma3">
            <label form="imageToUpload">Upload Picture</label>
            <input
              onChange={this.imageSelectedHandler}
              type="file"
              className="form-control-file"
              id="imageToUpload"
              accept="image/x-png, image/x-jpeg"
            />
          </div>
        </form>
        <div className="flex items-center flex-column mb3">
          <div className="justify-center ">
            <ButtonGroup>
              <Button
                onClick={this.imageUploadHandler}
                type="submit"
                variant="dark"
              >
                Upload
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <Table
          items={this.state.result}
          categories={this.props.categories}
          brands={this.props.brands}
          selectedDivisionCode={this.props.selectedDivisionCode}
          url={this.props.url}
        />
      </div>
    );
  }
}

export default ImageForm;
/*
  columns = [
    {
      Header: "Description",
      id: "description",
      style: {
        textAlign: "center"
      },
      accessor: c => c.description
    },
    {
      Header: "Score",
      id: "score",
      style: {
        textAlign: "center"
      },
      accessor: c => c.score
    }
  ]; 
  
  <ReactTable columns={this.columns} data={this.state.result} />
  
  */
