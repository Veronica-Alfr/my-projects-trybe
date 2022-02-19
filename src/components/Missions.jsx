import React, { Component } from 'react';
import Title from './Title';
// import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missions" />
      </div>
    );
  }
}

export default Missions;
