import React from 'react';

function Mood(props) {
  return (
    <div>
      <p>Mood: {props.moodInfo.mood}</p>
    </div>
  );
}

export default Mood;
