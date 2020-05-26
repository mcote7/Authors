import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AuthorsMain from './components/AuthorsMain';
import Create from './components/Create';
import Update from './components/Update';
import Header from './components/Header';
import Clock from './components/Clock';

// change clock to footer component

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <AuthorsMain path="/" />
        <Create path="/addauthor" />
        <Update path="/update/:id" />
      </Router>
      <Clock />
    </div>
  );
}

export default App;
