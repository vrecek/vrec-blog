import React from 'react';
import './css/index.css'
import Navigation from './components/Layout/Nav/Navigation';
import MAIN_PAGE from './components/Main Page/MAIN_PAGE';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        
        <Routes>

          <Route path='/' element={ <MAIN_PAGE /> } />
          
        </Routes>

      </Router>
    </div>
  );
}

export default App;
