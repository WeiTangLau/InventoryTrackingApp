import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import AudioRecorder from "../Recorder/AudioRecorder";
import Table from "../Table/Table";

class SpeechToText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recordedAudio: "",
      encodedAudio: "",
      result: [],
      recording: false
    };
  }

  onRecordAudio = event => {
    let file = event.target.files[0];

    const fd = new FormData();
    fd.append("audio", file);

    fetch(
      this.props.url +
        "speeches?divisionCode=" +
        this.props.selectedDivisionCode,
      {
        method: "post",
        body: fd,
        header: {
          Accept: "multipart/form-data",
          "Content-Type": "multipart/form-data"
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ result: data });
      });
  };

  onStartRecord = e => {
    this.setState({ recording: true });
  };

  onStopRecord = e => {
    this.setState({ recording: false });
  };

  onStop = recordedBlob => {
    this.setState({ recordedAudio: recordedBlob });
  };

  onTranslateSpeechClick = event => {
    event.preventDefault();

    let fd = new FormData();
    fd.append("audio", this.state.recordedAudio.blob);

    fetch(
      this.props.url +
        "speeches?divisionCode=" +
        this.props.selectedDivisionCode,
      {
        method: "post",
        body: fd
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ result: data });
      });
  };

  render() {
    return (
      <div>
        <input
          type="file"
          accept="audio/*"
          capture
          id="recorder"
          onChange={this.onRecordAudio}
        />
        <AudioRecorder
          recording={this.state.recording}
          recordedAudio={this.state.recordedAudio}
          onStartRecord={this.onStartRecord}
          onStopRecord={this.onStopRecord}
          onStop={this.onStop}
        />
        <div className="flex justify-center ">
          <ButtonGroup>
            <Button
              onClick={this.onTranslateSpeechClick}
              type="submit"
              variant="dark"
            >
              Translate Speech
            </Button>
          </ButtonGroup>
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

export default SpeechToText;
