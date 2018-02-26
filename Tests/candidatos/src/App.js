import React, { Component } from 'react';
import './App.css';
import CandidateList from "./CandidateList.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Candidatos</h1>

          <CandidateList></CandidateList>
      </div>
    );
  }
}

export default App;
