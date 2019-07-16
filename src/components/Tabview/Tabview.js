import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import ImageForm from "./../ImageForm/ImageForm";
import Table from "../Table/Table";
import Translate from "../Translate/Translate";
import SpeechToText from "../SpeechToText/SpeechToText";
import Searchbar from "../Searchbar/Searchbar";

class Tabview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ""
    };
  }

  render() {
    return (
      <div className="ma3 br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw8 shadow-5 center">
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="filter" title="Filter">
            <div className="ma3">
              <Searchbar onSearchChange={this.props.onSearchChange} />
            </div>

            <Table
              items={this.props.items}
              isLoaded={true}
              categories={this.props.categories}
              brands={this.props.brands}
              selectedDivisionCode={this.props.selectedDivisionCode}
              url={this.props.url}
            />
          </Tab>

          <Tab eventKey="picture" title="Picture">
            <ImageForm
              url={this.props.url}
              selectedDivisionCode={this.props.selectedDivisionCode}
              categories={this.props.categories}
              brands={this.props.brands}
            />
          </Tab>
          <Tab eventKey="translate" title="Translate">
            <Translate
              url={this.props.url}
              selectedDivisionCode={this.props.selectedDivisionCode}
              categories={this.props.categories}
              brands={this.props.brands}
            />
          </Tab>
          <Tab eventKey="speechToText" title="Speech">
            <SpeechToText
              url={this.props.url}
              selectedDivisionCode={this.props.selectedDivisionCode}
              categories={this.props.categories}
              brands={this.props.brands}
            />
          </Tab>
          <Tab className="justify-end" eventKey="" title="X" />
        </Tabs>
      </div>
    );
  }
}

export default Tabview;
