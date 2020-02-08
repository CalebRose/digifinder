import React, { Component } from "react";
import logo from "./logo.svg";
import logo2 from "./digivice.svg";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import SearchBar from "./Components/SearchBar/searchBar";

class App extends Component {
  state = {
    monsters: [],
    searchList: ""
  };

  componentDidMount() {
    fetch("https://digimon-api.herokuapp.com/api/digimon")
      .then(response => response.json())
      .then(digimon => this.setState({ monsters: digimon }));
  }

  handleChange = e => {
    this.setState({ searchList: e.target.value });
  };

  render() {
    console.log(this.state.searchList);
    const { monsters, searchList } = this.state;
    const filteredMonsters = monsters.filter(mon =>
      mon.name.toLowerCase().includes(searchList.toLowerCase())
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo2} className="App-logo" alt="logo" />
          <SearchBar
            placeholder="Search Digimon"
            handleChange={this.handleChange}
          />
          <CardList className="card-list" monsters={filteredMonsters} />
        </header>
      </div>
    );
  }
}

export default App;
