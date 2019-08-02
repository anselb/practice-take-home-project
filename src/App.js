import React, { Component } from 'react';
import './App.css';

import Weather from './Weather';
import MoodTracker from './MoodTracker';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: null
    }

    this.setWeather = this.setWeather.bind(this);
  }

  setWeather(weatherData) {
    this.setState({ weather: weatherData});
  }

  render() {
    return (
      <div className="App">
        <Weather setWeather={this.setWeather} />
        <MoodTracker weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
