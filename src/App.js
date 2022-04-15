import React, { StrictMode } from 'react';
import './App.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
import Sideb from './components/Sideb';
import './components/Style.css';
import './components/StyleContact.css';
// import About from './components/About';
// import Home from './components/Home';
// import Resume from './components/Resume';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import AnimationPage from './components/AnimationPage';

function App() {

  return (


    <Router>
      <div className=''>
        <Sideb />
        <AnimationPage />
        

      </div>
    </Router>


  );
}

export default App;