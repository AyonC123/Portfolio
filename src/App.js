import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const theme = window.localStorage.getItem('KDV_THEME')
  
  if (theme == "light"){
    document.body.classList.add('lightTheme')
  } else {
    document.body.classList.remove('lightTheme')
  }

  return (
    <div className='App'>
      <Helmet>
        <meta charSet='utf-8'/>
        <title>Ayon C</title>
        <meta name='keywords' content='portfolio'/>
        <meta name="description" content="My portfolio" />
        <meta name="og:title" content="Ayon C" />
        <meta name="og:type" content="profile" />
        <meta name="og:description" content="My portfolio" />
        <meta name="og:url" content="https://ayonc.vercel.app" />
        <meta name="og:image" content="/ayon.jpg" />
      </Helmet>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Router>
      <Footer/> 
      </div>
  );
}

export default App;
