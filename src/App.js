import logo from './logo.svg';
import './App.css';
import React from 'react';
import Chatbox from './Chatbox';

function App() {
  return (
    <div className="App">
      {/* Existing Header */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* New Section for ChatBox */}
      <div className="App-body">
        <h1>VALORANT Esports Scouting Assistant</h1>
        <ChatBox />  {/* Render the ChatBox component here */}
      </div>
    </div>
  );
}


export default App;
