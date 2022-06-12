import React from 'react';
import './css/index.css'
import Navigation from './components/Layout/Nav/Navigation';
import MAIN_PAGE from './components/Main Page/MAIN_PAGE';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Layout/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        
        <Routes>

          <Route path='/' element={ <MAIN_PAGE /> } />
          
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
