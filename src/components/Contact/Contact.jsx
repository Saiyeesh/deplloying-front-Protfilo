import React from 'react'
import "./Contact.css"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Contact() {
  return (
     <>
     <Navbar></Navbar>
     <div className='contactMain'>
       <div className='contactback'>
            <h1>Contact</h1>
            <p>Feel free to reach out to me for any questions or oppurtunities</p>
                <div className='contactBox'>
                        <h3>Email Me</h3>
                        <input type='text' className='InputBoxes' placeholder="Your Email"/>
                        <input type='text' className='InputBoxes' placeholder='Your Name'/>
                        <input type='text' className='InputBoxes' placeholder='Subject'/>
                        <textarea typeof='text' className='areaBox' placeholder='Message'/>
                        <button>Send</button>
                </div>
            </div>
       </div>
       <Footer></Footer>
     </>
  )
}

export default Contact