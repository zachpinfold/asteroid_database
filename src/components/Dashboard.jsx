import React, { Component } from "react";
import List from "./List";
import axios from "axios";
import Graph from "./data-visualisation/Graph";
import * as utils from "./data-visualisation/utils";
import AsteroidMap from "./data-visualisation/AsteroidMap";

class Dashboard extends Component {
  state = {
    asteroids: [],
    limit: 10,
    offset: 1,
    mass: null,
    lookUpList: {},
  };

  componentDidMount() {
    this.getAsteroids();
  }

  getAsteroids = () => {
    axios
      .get("https://data.nasa.gov/resource/gh4g-9sfh.json?$where=year%20between%20%272010-01-10T12:00:00%27%20and%20%272011-01-10T14:00:00%27", {
        params: {
          $limit: this.state.limit,
          $offset: this.state.offset,
        },
      })
      .then(({ data }) => {
        const asteroidMass = utils.makeRefObj(data, "mass", "name");
        this.setState({ asteroids: data, lookUpList: asteroidMass });
      });
  };

  handleChange = (event, key) => {
    const { value } = event.target;
    this.setState({ [key]: value }, () => {
      this.getAsteroids();
    });
  };

  render() {
    return (
      <div>
        <div className="dashboard">
          <div className="innerdash">
            <div className="dashboard--frontpanel1">
              <Graph lookUpList={this.state.lookUpList} />
            </div>

            <div className="dashboard--frontpanel2">
              <AsteroidMap props={this.state}/>
            </div>
          </div>
        </div>
        <label id="limit">results per page:</label>
        <select
          onChange={(event) => this.handleChange(event, "limit")}
          id="limit"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
        <List props={this.state} />
      </div>
    );
  }
}

export default Dashboard;
