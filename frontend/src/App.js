import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import Chat from './Chat';
import Settings from './Settings';
import TutorImage from './TutorImage';
import Lessons from './Lessons';
import HomeworkEditor from './HomeworkEditor';

function App() {
  const [startLearning, setStartLearning] = useState(false);
  const [character, setCharacter] = useState('Robot');
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <div className="App">
      <AnimatePresence>
        {!startLearning ? (
          <motion.header
            className="App-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Welcome to Python Tutor for Kids!</h1>
            <p>
              Learn Python in a fun and interactive way with our AI-powered tutor.
              Start your coding journey today!
            </p>
            <motion.button
              className="start-button"
              onClick={() => setStartLearning(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning Python!
            </motion.button>
          </motion.header>
        ) : (
          <motion.div
            className="main-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Sidebar for Settings, TutorImage, HomeworkEditor, and Chat */}
            <div className="sidebar">
              <Settings onSelectCharacter={setCharacter} />
              <TutorImage character={character} />
              {selectedLesson && (
                <div className="homework-editor-container">
                  <HomeworkEditor homework={selectedLesson} />
                </div>
              )}
              <div className="chat-box">
                <Chat character={character} />
              </div>
            </div>

            {/* Main content area for Lessons */}
            <div className="main-content">
              <Lessons onSelectLesson={setSelectedLesson} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Additional description section */}
      {!startLearning && (
        <div className="description">
          <p>
            Python Tutor for Kids is designed to make learning Python engaging and accessible for children. 
            With interactive lessons, a built-in code editor, and an AI-powered tutor, kids can learn at their own pace and get instant feedback. 
            The application features customizable tutor characters, making the learning experience more enjoyable and personalized.
          </p>
          <p>
            Our design approach focuses on simplicity and interactivity, ensuring that children can easily navigate through lessons and practice coding. 
            The AI tutor is available to answer questions and provide guidance, making it a valuable resource for young learners.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;