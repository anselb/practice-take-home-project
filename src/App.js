import React from 'react';
import './App.css';

import Weather from './Weather';
import MoodTracker from './MoodTracker';

function App() {
  return (
    <div className="App">
      <Weather />
      <MoodTracker />
    </div>
  );
}

export default App;
