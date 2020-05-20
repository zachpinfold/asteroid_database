import React, { Component } from "react";
import List from "./List";
import axios from "axios";
import Graph from "./data-visualisation/Graph";
import * as utils from "./data-visualisation/utils"




class Dashboard extends Component {
  state = {
    asteroids: [],
    limit: 10,
    offset: 0,
    mass: null,
    lookUpList: {}
  };

  componentDidMount() {
    this.getAsteroids()
  }

  getAsteroids = () => {
    axios
    .get("https://data.nasa.gov/resource/gh4g-9sfh.json", {
      params: {
        $limit: this.state.limit,
        $offset: this.state.offset,
      },
    })
    .then(({data}) => {
      const asteroidMass = utils.makeRefObj(data, 'name', 'mass')
      this.setState({ asteroids: data, lookUpList: asteroidMass });
    });
  }

  handleChange = (event, key) => {  
    const {value} = event.target
    this.setState({[key]: value}, ()=>{
        this.getAsteroids()
    })
  }

  render() {
    return (
      <div>
        <div>Hello</div>
        <label id="limit">results per page:</label>
        <Graph lookUpList={this.state.lookUpList}/>
        <select onChange={(event) => this.handleChange(event, 'limit')} id="limit">
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
