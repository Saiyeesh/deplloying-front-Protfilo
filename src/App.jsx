import React from 'react'
import {Routes, Route} from "react-router-dom";
import "./App.css"
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';


function App() {
  return (
     <>
        <Routes>
           <Route path='/' element={<About></About>}></Route>
           <Route path='/contact' element={<Contact></Contact>}></Route>
           <Route path='/skills' element={<Skills></Skills>}></Route>
           <Route path='/experience' element={<Experience></Experience>}></Route>
           <Route path='/education' element={<Education></Education>}></Route>
           <Route path='/projects' element={<Projects></Projects>}></Route>
        </Routes>
     </>
  )
}

export default App 