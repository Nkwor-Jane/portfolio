import React, {useState} from 'react'
// import { NavLink } from "react-router-dom"
import logo_one from "../assets/logo.png"
import {CgClose} from "react-icons/cg"
import {FaBars} from "react-icons/fa"

const Header = () => {
  const [closeNav, setCloseNav] = useState(false)
  return (
    <header className="p-6  flex  justify-between items-center top-0">
        <div className="flex items-center gap-4 pl-4 w-[6rem] ">
        <a href="#home" className="cursor-pointer" >
          <img src={logo_one} alt='logo'/>
          </a>
        </div>
          
          <ul className='sm:flex gap-10 pr-4 text-white font-semibold text-base hidden'>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>

          <FaBars
          onClick={() => setCloseNav(true)}
          size={25}
          className='fill-white sm:hidden cursor-pointer hover:scale-120'
          />

      {closeNav && (
        <div>
          <CgClose
          onClick={() => setCloseNav(false)}
          color='white'
          size={30}
          className='mt-2 mb-4 sm:hidden z-20 fixed top-3 right-10 cursor-pointer hover:scale-120'
          />
          <ul 
          onClick={() => setCloseNav(false)}
          className=" pl-10 text-white absolute sm:hidden bg-black w-[500px] h-screen top-[0px] right-0 pt-12 z-10">
              <li className='mt-5 hover:underline font-semibold'><a href="#about" >About</a></li>
              <li className='mt-5 hover:underline font-semibold' ><a href="#projects">Projects</a></li>
              <li className='mt-5 hover:underline font-semibold' ><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header