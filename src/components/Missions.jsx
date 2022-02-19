import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missions" />
        {
          missions.map((mission) => (
            <MissionCard key={ mission.name } { ...mission } />))
        }
      </div>
    );
  }
}

export default Missions;
