import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from "./About"
import Contact from "./Contact"
import Footer from './Footer'
import GetProjects from './GetProjects'

const Display = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <About/>
        <GetProjects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Display