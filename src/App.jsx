import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import GetProjects from './components/GetProjects'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import {
//   Route,
//   Routes,
//   HashRouter
// } from "react-router-dom";

const App = () => {
  return (
    <div className=" bg-black">
        <Header/>
        <Hero/>
        <About/>
        <GetProjects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App