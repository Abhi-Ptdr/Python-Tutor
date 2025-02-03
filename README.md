# Python Tutor for Kids

Welcome to Python Tutor for Kids! This project is designed to help kids learn Python in a fun and interactive way with the help of an AI-powered tutor. The application includes lessons, a code editor, and a chat interface where kids can interact with the AI tutor.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Interactive Lessons**: Learn Python through a series of lessons.
- **Code Editor**: Write and run Python code directly in the browser.
- **AI-Powered Tutor**: Chat with an AI tutor to get help and ask questions about Python.
- **Customizable Tutor**: Choose from different tutor characters.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built with React and includes the following components:

- `App.js`: The main application component.
- `Chat.js`: The chat interface where users can interact with the AI tutor.
- `HomeworkEditor.js`: The code editor for writing and running Python code.
- `Lessons.js`: The lessons component that displays the Python lessons.
- `Settings.js`: The settings component for selecting the tutor character.
- `TutorImage.js`: The component that displays the selected tutor character.

### Backend

The backend is built with Node.js and Express and includes the following:

- `server.js`: The main server file that handles API requests.
- `.env`: The environment variables file for storing API keys.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/python-tutor-for-kids.git
   cd python-tutor-for-kids
   ```

2. **Install dependencies**:

   - For the frontend:
     ```sh
     cd frontend
     npm install
     ```

   - For the backend:
     ```sh
     cd backend
     npm install
     ```

3. **Set up environment variables**:

   Create a `.env` file in the backend directory and add your API keys:
   ```plaintext
   HUGGING_FACE_API_KEY=your_hugging_face_api_key
   COHERE_API_KEY=your_cohere_api_key
   ```

## Running the Application

To run the application, follow these steps:

1. **Start the backend server**:
   ```sh
   cd backend
   npm start
   ```

2. **Start the frontend development server**:
   ```sh
   cd frontend
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Environment Variables

The application requires the following environment variables:

- `HUGGING_FACE_API_KEY`: Your API key for Hugging Face.

## Technologies Used

### Frontend:

- React
- Framer Motion
- Prism.js
- React Simple Code Editor

### Backend:

- Node.js
- Express
- Axios
- dotenv

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## Contact
- **Developer**: Abhishek Patidar  
- **Email**: abhipatidar253@gmail.com  
- **LinkedIn**: [Abhi Ptdr](https://www.linkedin.com/in/abhiptdr/)
