import {FaGithubSquare, FaLinkedin,}  from 'react-icons/fa'
import {  FaHashnode } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="mt-2">
      <p className=" text-center">&copy;Nkwor Jane 2024</p>
      <div className='flex gap-3'>
      <FaGithubSquare/>
      <FaLinkedin/>
      <FaHashnode/>
      </div>
      
    </footer>
  )
}

export default Footer