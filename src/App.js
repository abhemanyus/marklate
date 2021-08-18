import React from 'react';
import Markdown from './components/Markdown';
import Markup from './components/Markup';
import './styling/App.css';

function App() {
  return (
    <div className="App container">
      <div className="row">
        <Markdown />
        <Markup />
      </div>

    </div>
  );
}

export default App;
