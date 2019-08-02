import React, { Component } from 'react';

import Mood from './Mood';

class MoodTracker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: '',
      date: ''
    }

    this.getMood = this.getMood.bind(this);
    this.saveMood = this.saveMood.bind(this);
    this.renderMoods = this.renderMoods.bind(this);
  }

  getMood(event) {
    this.setState({ mood: event.target.value });
  }

  saveMood(event) {
    event.preventDefault();

    const today = new Date();
    const todayDate = today.toLocaleDateString();

    this.setState({ date: todayDate }, () => {

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

    });
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

        <div>
          {this.renderMoods()}
        </div>
      </div>
    )
  }
}

export default MoodTracker;
