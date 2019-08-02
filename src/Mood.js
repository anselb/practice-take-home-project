import React from 'react';

function Mood(props) {
  return (
    <div style={{ border: "1px solid black", display: "inline-block", padding: "5px", margin: "5px" }}>
      <p>Mood: {props.moodInfo.mood}</p>
      <p>Date of Mood: {props.moodInfo.date}</p>
      <p>Temperature on Day: {props.moodInfo.weather.temp}</p>
      <p>Weather on Day: {props.moodInfo.weather.description}</p>
    </div>
  );
}

export default Mood;
