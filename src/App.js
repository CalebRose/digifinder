import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import searchBox from "./Components/SearchBar/searchBar";

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

  render() {
    console.log(this.state.searchList);
    const { monsters, searchList } = this.state;
    const filteredMonsters = monsters.filter(mon =>
      mon.name.toLowerCase().includes(searchList.toLowerCase())
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <searchBox
            placeholder="search digimon"
            handleChange={e =>
              this.setState({ searchList: this.props.search111 })
            }
          />
          <CardList className="card-list" monsters={filteredMonsters} />
        </header>
      </div>
    );
  }
}

export default App;
