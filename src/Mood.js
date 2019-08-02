import React from 'react';

function Mood(props) {
  return (
    <div>
      <p>Mood: {props.moodInfo.mood}</p>
      <p>Date of Mood: {props.moodInfo.date}</p>
      <p>Temperature on Day: {props.moodInfo.weather.temp}</p>
      <p>Weather on Day: {props.moodInfo.weather.description}</p>
    </div>
  );
}

export default Mood;
