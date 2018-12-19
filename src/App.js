import React, { Component } from 'react';
import './App.css';
import codes from './netflix-codes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      codes,
    }
  }
  getName(code) {
    return navigator.language === 'fr' ? code.nameFr : code.nameEn;
  }
  handleSearch(event) {
    let searchedCodes = [];
    if (event.target.value.length === 0) {
      searchedCodes = codes;
    } else {
      searchedCodes = codes.filter(code => {
        if (code.nameEn.toLowerCase().includes(event.target.value.toLowerCase()) || code.nameFr.toLowerCase().includes(event.target.value.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
    }
    this.setState({ codes: searchedCodes });
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">Secretflix</h1>
          <input className="form-control form-control-lg margin-bottom-xl" onChange={(e) => this.handleSearch(e)} type="text" placeholder="Search" />
          <hr />
          {this.state.codes.map(code => (<span><a rel="noopener noreferrer" target="_blank" className="App-link" href={`http://www.netflix.com/browse/genre/${code.code}`}>{this.getName(code)}</a><br /></span>))}
        </div>
      </div>
    );
  }
}

export default App;
