import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentWillMount() {
    console.log("Into ... componentWillMount");
  }

  //When React puts our component on the page, it calls componentDidMount
  componentDidMount() {
    console.log("Into ... componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  componentWillUnmount() {
    console.log("Into ... componentWillUnmount");
  }

  componentWillUpdate() {
    console.log("Into ... componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("Into ... componentDidUpdate");
  }

  componentWillReceiveProps() {
    console.log("Into ... componentWillReceiveProps");
  }

  componentDidCatch() {
    console.log("Into ... componentDidCatch");
  }

  handleClick = () => {
    this.setState({ name: "Buddy" });
  };

  handleSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    console.log("Into ... render");
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          onSearchChange={this.handleSearchChange}
          placeholder="Search Monsters"
        />
        <CardList monsters={filteredMonsters} search={this.state.searchField} />
      </div>
    );
  }
}
export default App;
