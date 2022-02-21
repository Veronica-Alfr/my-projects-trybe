import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main className="system-container">
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;
