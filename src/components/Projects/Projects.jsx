import React from 'react'
import "./Projects.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Projects() {
  return (
    <>
        <Navbar></Navbar>
         <div className='projectsBack'>
            <h2>Projects</h2>
            <p>I have worked on a wide Range of Projects. Here are some of my Projects.</p>
         </div>
        <Footer></Footer>
    </>
  )
}

export default Projects