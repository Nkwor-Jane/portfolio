// import { NavLink } from "react-router-dom"
import logo_one from "../assets/logo_1.png"
const Header = () => {
  return (
    <header className="bg-slate-950 fixed top-0 w-full shadow-md ">
      <nav className="flex text-white justify-between items-center w-100">
        <div className="flex items-center gap-4 pl-4">
          <img  src={logo_one} alt="Logo" className="h-20 w-20"/>
          <p className="">Nkwor Jane</p>
        </div>
          
          <ul className='flex gap-10 pr-4'>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
      </ul>
      </nav>
    </header>
  )
}

export default Header