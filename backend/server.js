require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { exec } = require('child_process');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint for chat
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/gpt2',
      { inputs: message },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
        },
      }
    );

    console.log('Hugging Face Response:', response.data); // Log the Hugging Face response

    // Extract the generated text from the response
    const generatedText = response.data.generated_text || 'No response from AI';
    res.json({ reply: generatedText });
  } catch (error) {
    console.error('Error calling Hugging Face API:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

// API endpoint for running Python code
app.post('/api/run-code', (req, res) => {
  const { code } = req.body;
  exec(`python -c "${code}"`, (error, stdout, stderr) => {
    if (error) {
      res.json({ output: `Error: ${stderr}` });
    } else {
      res.json({ output: stdout });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});