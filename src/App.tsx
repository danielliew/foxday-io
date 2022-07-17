import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import "./firebase"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactTypingEffect text={['stay tuned. fox day 2023 inbound.']}  />
        <a
          className="App-link"
          href="https://web.rollins.edu/about-rollins/traditions-and-history/fox-day.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn more
        </a>
      </header>
    </div>
  );
}

export default App;
