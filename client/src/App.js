import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AuthorsMain from './components/AuthorsMain';
import Create from './components/Create';
import Update from './components/Update';
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <AuthorsMain path="/" />
        <Create path="/addauthor" />
        <Update path="/update/:id" />
      </Router>
    </div>
  );
}

export default App;
