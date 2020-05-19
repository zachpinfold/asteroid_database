import React, { Component } from 'react';
import List from './List';

class Dashboard extends Component {
  state = {
    asteroids: [
    ],
  };

  componentDidMount() {

      //getMeteors with Axios//

    // axios.get("https://data.nasa.gov/resource/gh4g-9sfh.json", {params: {
    //   $limit: limit, 
    // }})
    
    fetch("https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=50")
    .then(response => response.json())
    .then(data => {
        this.setState({asteroids: data})
    })
  }

  render() {
    return (
      <div>
        <div>
            Hello
        </div>
        <List props={this.state}/>
      </div>
    );
  }
}

export default Dashboard;