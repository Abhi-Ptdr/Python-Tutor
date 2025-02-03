import React from 'react';
import './TutorImage.css';
import RobotIcon from './assets/Robot.png'; // Replace with your image paths
import DinoIcon from './assets/Dino.png';
import AlienIcon from './assets/Alien.png';

function TutorImage({ character }) {
  // Map characters to their respective icons
  const characterIcons = {
    Robot: RobotIcon,
    Dino: DinoIcon,
    Alien: AlienIcon,
  };

  return (
    <div className="tutor-image-container">
      <img src={characterIcons[character]} alt={`${character} tutor`} className="tutor-image" />
    </div>
  );
}

export default TutorImage;