import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import AuthorsMain from './components/AuthorsMain';
import Create from './components/Create';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Link to="/addauthor">add an author</Link>
      <Router>
        <AuthorsMain path="/" />
        <Create path="/addauthor" />
        <Update path="/update/:id" />
      </Router>
    </div>
  );
}

export default App;
