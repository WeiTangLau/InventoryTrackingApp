import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { ReactMic } from "react-mic";

class AudioRecorder extends Component {
  onData = recordedBlob => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  render() {
    return (
      <div>
        <div>
          <ReactMic
            className="w-10 h-1 aspect-ratio ml2"
            record={this.props.recording}
            onData={this.props.onData}
            onStop={this.props.onStop}
            strokeColor="#FFFFFF"
          />
        </div>
        <div className="ma3">
          {this.props.recording ? (
            <Button onClick={this.props.onStopRecord}>Stop Recording</Button>
          ) : (
            <Button onClick={this.props.onStartRecord}>Start Recording</Button>
          )}
        </div>
        <div>
          <audio src={this.props.recordedAudio.blobURL} controls />
        </div>
      </div>
    );
  }
}

export default AudioRecorder;
