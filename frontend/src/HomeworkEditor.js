import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs'; // Import Prism
import 'prismjs/components/prism-python'; // Import Python language component
import 'prismjs/themes/prism.css'; // Import Prism theme
import './HomeworkEditor.css';

function HomeworkEditor({ homework }) {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch('http://localhost:5000/api/run-code', { // Update this line
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
      const result = await response.json();
      setOutput(result.output);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="homework-editor">
      <h3>Homework: {homework}</h3>
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={(code) => Prism.highlight(code, Prism.languages.python, 'python')}
        padding={10}
        style={{
          fontFamily: 'monospace',
          fontSize: '14px',
          backgroundColor: '#f9f9f9',
          border: '1px solid #ddd',
          borderRadius: '5px',
        }}
      />
      <button onClick={runCode}>Run Code</button>
      <div className="output">
        <strong>Output:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default HomeworkEditor;