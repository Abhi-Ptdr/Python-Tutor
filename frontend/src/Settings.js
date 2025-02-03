import React, { useState } from 'react';
import './Settings.css';

function Settings({ onSelectCharacter }) {
  const [character, setCharacter] = useState('Robot');

  const handleChange = (e) => {
    const selectedCharacter = e.target.value;
    setCharacter(selectedCharacter);
    onSelectCharacter(selectedCharacter); // Notify the parent component
    console.log('Selected Character in Settings:', selectedCharacter); // Debugging line
  };

  return (
    <div className="settings-container">
      <h2>Choose Your Tutor</h2>
      <select value={character} onChange={handleChange}>
        <option value="Robot">Robot</option>
        <option value="Dino">Dino</option>
        <option value="Alien">Alien</option>
      </select>
    </div>
  );
}

export default Settings;