import React, { Component } from 'react';

class MoodTracker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: ''
    }

    this.getMood = this.getMood.bind(this);
  }

  getMood(event) {
    this.setState({ mood: event.target.value });
  }

  render() {
    return (
      <form>
        <label>
          Mood:
          <input
            type="text"
            name="mood"
            value={this.state.mood}
            onChange={this.getMood}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default MoodTracker;
