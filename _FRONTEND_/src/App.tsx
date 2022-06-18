import React from 'react';
import './css/index.css'
import Navigation from './components/Layout/Nav/Navigation';
import MAIN_PAGE from './components/Main Page/MAIN_PAGE';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Layout/Footer/Footer';
import ArrowTop from './components/Layout/Arrow/ArrowTop';
import SEARCH_PAGE from './components/Search Page/SEARCH_PAGE';
import ARTICLE_PAGE from './components/Article Page/ARTICLE_PAGE';
import LOGIN_REGISTER_PAGE from './components/LoginRegister Page/LOGIN_REGISTER_PAGE';
import TERMS_CONDITIONS_PAGE from './components/TermsAndConditions/TERMS_CONDITIONS_PAGE';
import CONTACT from './components/Contact Page/CONTACT';

function App() {
  return (
    <div className="App">
      <Router>

        <Navigation />
        
        <Routes>

          <Route path='/' element={ <MAIN_PAGE /> } />

          <Route path='/search/:type/:string' element={ <SEARCH_PAGE key={ window.location.pathname } /> } />

          <Route path='/article/:id_or_title' element={ <ARTICLE_PAGE /> } />

          <Route path='/credentials/:login_register' element={ <LOGIN_REGISTER_PAGE /> } />

          <Route path='/terms-and-conditions' element={ <TERMS_CONDITIONS_PAGE /> } />
          <Route path='/contact' element={ <CONTACT /> } />
          
        </Routes>

        <Footer />
        <ArrowTop />

      </Router>
    </div>
  );
}

export default App;
