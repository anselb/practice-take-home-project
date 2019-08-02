import React from 'react';

function Mood(props) {
  return (
    <div>
      <p>Mood: {props.moodInfo.mood}</p>
      <p>Date of Mood: {props.moodInfo.date}</p>
    </div>
  );
}

export default Mood;
