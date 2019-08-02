import React, { Component } from 'react';

import Mood from './Mood';

class MoodTracker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: '',
      date: '',
      weather: null
    }

    this.getMood = this.getMood.bind(this);
    this.saveWeather = this.saveWeather.bind(this);
    this.saveDate = this.saveDate.bind(this);
    this.saveMood = this.saveMood.bind(this);
    this.renderMoods = this.renderMoods.bind(this);
  }

  getMood(event) {
    this.setState({ mood: event.target.value });
  }

  saveWeather(event) {
    event.preventDefault();

    const location = this.props.weather.name;
    const temp = `${this.props.weather.main.temp}˚F`;
    const description = this.props.weather.weather[0].description;

    const weatherData = { location, temp, description };
    this.setState({ weather: weatherData }, this.saveDate);
  }

  saveDate() {
    const today = new Date();
    const todayDate = today.toLocaleDateString();

    this.setState({ date: todayDate }, this.saveMood);
  }

  saveMood() {
    if (!localStorage.getItem('moodArray')) {
      const moodArray = JSON.stringify([this.state])
      localStorage.setItem('moodArray', moodArray);
    } else {
      let moodArray = localStorage.getItem('moodArray');
      moodArray = JSON.parse(moodArray);
      moodArray.push(this.state);
      moodArray = JSON.stringify(moodArray);
      localStorage.setItem('moodArray', moodArray);
    }

    this.setState({ mood: "" });
  }

  renderMoods() {
    let moodArray = localStorage.getItem('moodArray');
    let moodComponents = []

    if (moodArray) {
      moodArray = JSON.parse(moodArray);

      for (let i = 0; i < moodArray.length; i += 1) {
        moodComponents.push(<Mood moodInfo={moodArray[i]} key={i} />)
      }
    }

    return moodComponents
  }

  render() {
    return (
      <div>
        <form onSubmit={this.saveWeather}>
          <label>
            Mood:
            <input
              type="text"
              name="mood"
              value={this.state.mood}
              onChange={this.getMood}
            />
          </label>
          <input type="submit" value="Save" />
        </form>

        <div>
          {this.renderMoods()}
        </div>
      </div>
    )
  }
}

export default MoodTracker;
