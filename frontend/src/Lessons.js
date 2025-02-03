import React from 'react';
import './Lessons.css';
import HomeworkEditor from './HomeworkEditor';

const lessons = [
  {
    id: 1,
    title: 'Introduction to Python',
    content: 'Learn the basics of Python, including printing messages and using variables.',
    homework: 'Write a program to print "Hello, World!" and store your name in a variable.',
  },
  {
    id: 2,
    title: 'Data Types',
    content: 'Understand strings, integers, floats, and booleans in Python.',
    homework: 'Create a program that adds two numbers and prints the result.',
  },
  {
    id: 3,
    title: 'Conditional Statements',
    content: 'Learn how to use `if`, `else`, and `elif` to make decisions in your code.',
    homework: 'Write a program that checks if a number is positive, negative, or zero.',
  },
  {
    id: 4,
    title: 'Loops',
    content: 'Explore `for` loops and `while` loops to repeat actions in your code.',
    homework: 'Write a program to print numbers from 1 to 10 using a loop.',
  },
];

function Lessons() {
    return (
    <div className="lessons-container">
        <h2>Python Lessons</h2>
        {lessons.map((lesson) => (
        <div key={lesson.id} className="lesson-card">
            <h3>{lesson.title}</h3>
            <p>{lesson.content}</p>
            <HomeworkEditor homework={lesson.homework} />
        </div>
        ))}
    </div>
    );
}

export default Lessons;