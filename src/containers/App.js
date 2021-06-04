import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import { robots } from "../robotslist";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="title">RoboFriends</h1>
        <SearchBox
          searchChange={this.onSearchChange}
          searchfield={this.searchfield}
        />
        <Scroll>
          <ErrorBoundry>
            {" "}
            <Cardlist robots={filteredRobots} />{" "}
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
export default App;
