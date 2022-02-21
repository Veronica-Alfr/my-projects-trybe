import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <section className="missions-container">
        <div data-testid="missions" className="title-missions">
          <Title headline="Missions" />
        </div>
        <div className="card-missions">
          {
            missions.map((mission) => (
              <MissionCard key={ mission.name } { ...mission } />))
          }
        </div>
      </section>
    );
  }
}

export default Missions;
