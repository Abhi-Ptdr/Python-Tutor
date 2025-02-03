import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Chat.css';
import RobotIcon from './assets/Robot.png'; // Replace with your image paths
import DinoIcon from './assets/Dino.png';
import AlienIcon from './assets/Alien.png';

function Chat({ character }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);

  // Map characters to their respective icons
  const characterIcons = {
    Robot: RobotIcon,
    Dino: DinoIcon,
    Alien: AlienIcon,
  };

  // Animation variants for chat messages
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInput('');
      setLoading(true);
      setTyping(true);

      try {
        const response = await fetch('http://localhost:5000/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('API Error:', errorData);
          throw new Error(`API Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        const aiMessage = { text: data.reply, sender: 'ai' };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error('Error fetching AI response:', error);
        const errorMessage = { text: 'Failed to get a response from the AI.', sender: 'ai' };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      } finally {
        setLoading(false);
        setTyping(false);
      }
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="chat-container">
      {/* Chat header with character icon and clear button */}
      <div className="chat-header">
        <div className="header-left">
          <img src={characterIcons[character]} alt={`${character} icon`} className="character-icon" />
          <h2>Your {character} Tutor</h2>
        </div>
        <motion.button
          className="clear-button"
          onClick={clearChat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Clear Chat
        </motion.button>
      </div>

      {/* Chat window to display messages */}
      <div className="chat-window">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`message ${msg.sender}`}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
        {typing && (
          <motion.div
            className="typing-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span>Typing...</span>
          </motion.div>
        )}
      </div>

      {/* Chat input area */}
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about Python..."
          disabled={loading}
        />
        <motion.button
          onClick={handleSend}
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </div>
    </div>
  );
}

export default Chat;