import React, { Component } from 'react';
import importedNames from './Names';

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: importedNames
    };
  }

  render() {
    return (
      <div>
        <h1>Search name:</h1>
        <p>Matching Names Found: {this.state.names.length}</p>
        <form>
          <input
            id='id-name'
            name='name'
            type='text'
            placeholder='Search Name...'
          ></input>
        </form>
        <div>
          <h2>We will render name here: </h2>
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
