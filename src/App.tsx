import React from 'react'

import './App.css';
import NewsFeed from './components/NewsFeed';

const App = () => {
  return (
    <div className="app">
      <h1>News App</h1>
      <NewsFeed />
    </div>
  );
}

export default App;
