import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'
import Services from './components/Services';
import Contact from './components/Contact';
import './app.css'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <About/>
      <Contact/>

    </div>
  )
}

export default App
