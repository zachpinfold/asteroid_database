import React, { Component } from 'react';
import List from './List';

class Dashboard extends Component {
  state = {
    asteroids: [
      {
        name: "Boumdeid (2011)",
        id: "57167",
        nametype: "Valid",
        recclass: "L6",
        mass: "3599",
        fall: "Fell",
        year: "2011-01-01T00:00:00.000",
        reclat: "17.174930",
        reclong: "-11.341330",
        geolocation: {
          latitude: "17.17493",
          longitude: "-11.34133",
        },
      },
      {
        name: "Sołtmany",
        id: "53829",
        nametype: "Valid",
        recclass: "L6",
        mass: "1066",
        fall: "Fell",
        year: "2011-01-01T00:00:00.000",
        reclat: "54.008830",
        reclong: "22.005000",
        geolocation: {
          latitude: "54.00883",
          longitude: "22.005",
        },
      },
    ],
  };

  componentDidMount() {
    fetch("");
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