import Header from './components/Header'
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Footer from './components/Footer'
import Hero from './components/Hero'
// import {
//   Route,
//   Routes,
//   HashRouter
// } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App