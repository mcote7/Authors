import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AuthorsMain from './components/AuthorsMain';
import Create from './components/Create';
import Update from './components/Update';
import Header from './components/Header';
import Clock from './components/Clock';
// import BIRDS from 'vanta/dist/vanta.birds.min';

// change clock to footer component

// const birds = BIRDS({
//   el: ".myheader",
//   birdSize: 6.50,
//   wingSpan: 26.00,
//   speedLimit: 4.00,
//   separation: 32.00,
//   alignment: 33.00,
//   cohesion: 33.00,
//   quantity: 2.00
// });


function App() {
  
  return (
    <div className="App">
      <div id="backg"></div>
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
