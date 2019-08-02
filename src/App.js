import React, { Component } from 'react';
import './App.css';

import Weather from './Weather';
import MoodTracker from './MoodTracker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
        <MoodTracker />
      </div>
    );
  }
}

export default App;
