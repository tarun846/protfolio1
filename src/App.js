import './Styles/styles.css';
import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      
      <Navbar/>
      <main>
      <Hero/> 
      <About/>
      <Projects/>
      <Contact/>
      </main>  

    
    </div>
  )
}

export default App
