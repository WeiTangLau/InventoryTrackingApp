import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import BootstrapLink from "./components/BootstrapLink/BootstrapLink";
import Tabview from "./components/Tabview/Tabview";

class App extends Component {
  constructor(props) {
    super(props);

    /*
      url: The url of the API to query resources from
      divisionCodes: The list of valid divisionCodes
      selectedDivisionCode: The current division code. *This is where we set the default division code*
      items: All the items that are in our database
      filteredItems: This array is just to perform the search bar feature
      brands: list of brands
      categories: list of categories
    */
    this.state = {
      //url: "https://stocker-api.herokuapp.com/inventories/",
      url: "http://10.176.27.84:8081/inventories/",
      divisionCodes: [],
      selectedDivisionCode: "41", // Enters default division code
      items: [],
      filteredItems: [],
      brands: [],
      categories: []
    };
  }

  /*
    This function performs the fetching of data from the database
    of the newly selected Division Code.
  */
  onDropdownButtonClick = event => {
    this.setState({ selectedDivisionCode: event.target.innerText });
    fetch(
      this.state.url + "divisionCodes/" + event.target.innerText + "/items",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data });
        this.setState({ filteredItems: data });
      });
  };

  /*
    This function performs the search of items based on the keywords entered by the user.
  */
  onSearchChange = e => {
    if (e.target.value === "") {
      this.setState({ filteredItems: this.state.items });
      return;
    }

    const keywords = e.target.value.split(" ");

    this.setState({
      filteredItems: this.state.items.filter(item => {
        let counter = 0;
        for (let word of keywords) {
          if (item.name.toLowerCase().includes(word.toLowerCase())) {
            counter++;
            continue;
          }
          if (item.brand.brandName.toLowerCase().includes(word.toLowerCase())) {
            counter++;
            continue;
          }
          if (
            item.category.categoryName
              .toLowerCase()
              .includes(word.toLowerCase())
          ) {
            counter++;
            continue;
          }
          if (
            item.description.description
              .toLowerCase()
              .includes(word.toLowerCase())
          ) {
            counter++;
            continue;
          }
          return false;
        }
        return counter === keywords.length;
      })
    });
  };

  /*
    Fetch all relevant resources when the app starts
  */
  componentDidMount() {
    fetch(this.state.url + "brands/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ brands: data });
      });

    fetch(this.state.url + "categories/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ categories: data });
      });

    fetch(this.state.url + "divisionCodes/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ divisionCodes: data });
      });

    fetch(
      this.state.url +
        "divisionCodes/" +
        this.state.selectedDivisionCode +
        "/items",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data });
        this.setState({ filteredItems: data });
      });
  }

  render() {
    const {
      divisionCodes,
      url,
      brands,
      categories,
      selectedDivisionCode,
      filteredItems
    } = this.state;
    const { onDropdownButtonClick, onSearchChange } = this;
    return (
      <div className="App">
        <Header
          divisionCodes={divisionCodes}
          onDropdownButtonClick={onDropdownButtonClick}
        />

        <Tabview
          onSearchChange={onSearchChange}
          selectedDivisionCode={selectedDivisionCode}
          items={filteredItems}
          categories={categories}
          brands={brands}
          url={url}
        />

        <BootstrapLink />
      </div>
    );
  }
}

export default App;
