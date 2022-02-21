import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <section className="solar-system-container">
        <div data-testid="solar-system" className="title-planets">
          <Title headline="Planetas" />
        </div>
        <div className="planets-container">
          {
            planets.map(({ name, image }) => (
              <PlanetCard key={ name } planetImage={ image } planetName={ name } />
            ))
          }
        </div>
      </section>
    );
  }
}

// Ajuda de Gabriel Melo no funcionamento de props

export default SolarSystem;
