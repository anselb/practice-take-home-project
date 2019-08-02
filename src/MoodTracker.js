import React, { Component } from 'react';

class MoodTracker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: null
    }
  }

  render() {
    return (
      <form>
        <label>
          Mood: 
          <input type="text" name="mood" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default MoodTracker;
