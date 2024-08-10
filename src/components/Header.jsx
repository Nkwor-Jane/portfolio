// import { NavLink } from "react-router-dom"
import logo_one from "../assets/logo_1.png"
const Header = () => {
  return (
    <header className="p-6 ">
      <nav className="flex text-black justify-between items-center w-100">
        <div className="flex items-center gap-4 pl-4">
          <p className="text-white text-xl">Nkwor Jane</p>
        </div>
          
          <ul className='flex gap-10 pr-4 text-white font-semibold text-base'>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
      </nav>
    </header>
  )
}

export default Header