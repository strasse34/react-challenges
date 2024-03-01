import React, { Component } from "react";
import importedNames from "./EducationalMaterial";

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: importedNames,
    };
  }

  handleChange = (event) => {
    const inputName = event.target.value.toLowerCase();
    const filteredNames = importedNames.filter((name) => {
      return name.toLowerCase().includes(inputName);
    });
    this.setState({
      names: filteredNames,
    });
  };

  render() {
    return (
      <div>
        <h1>Search name:</h1>
        <p>Matching Names Found: {this.state.names.length}</p>
        <form>
          <input
            id="id-name"
            name="name"
            type="text"
            placeholder="Search Name..."
            onChange={(event) => this.handleChange(event)}
          ></input>
        </form>
        <div>
          <div>
            {this.state.names.map((name) => {
              return <p key={name}>{name}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
