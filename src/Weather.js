import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: null,
      weather: null
    }
  }

  loadWeather() {
    const apikey = process.env.REACT_APP_WEATHER_KEY
    const city = 'San Francisco'
    const units = 'Imperial'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({ weather: json })
        this.props.setWeather(json)
      })
      .catch(err => console.log(err.message))

  }

  componentWillMount() {
    this.loadWeather()
  }

  render() {
    if (this.state.weather === null) {
      return <p>Loading...</p>
    }

    return (
      <div className="Weather">
        <p>{this.state.weather.name}</p>
        <p>{this.state.weather.main.temp}˚F</p>
        <p>{this.state.weather.weather[0].description}</p>
      </div>
    )
  }
}

export default Weather;
