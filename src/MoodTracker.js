import React, { Component } from 'react';

class MoodTracker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: ''
    }

    this.getMood = this.getMood.bind(this);
    this.saveMood = this.saveMood.bind(this);
  }

  getMood(event) {
    this.setState({ mood: event.target.value });
  }

  saveMood(event) {
    event.preventDefault();

    if (!localStorage.getItem('moodArray')) {
      const moodArray = JSON.stringify([this.state.mood])
      localStorage.setItem('moodArray', moodArray);
    } else {
      let moodArray = localStorage.getItem('moodArray');
      moodArray = JSON.parse(moodArray);
      moodArray.push(this.state.mood);
      moodArray = JSON.stringify(moodArray);
      localStorage.setItem('moodArray', moodArray);
    }

    this.setState({ mood: "" });
  }

  render() {
    return (
      <form onSubmit={this.saveMood}>
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
    )
  }
}

export default MoodTracker;
