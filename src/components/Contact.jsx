import {FaGithubSquare, FaLinkedin, FaTwitter}  from 'react-icons/fa'


const Contact = () => {
  return (
    <div>
    <div className="block sm:flex m-4 sm:m-8 justify-between" id='contact'>
      <div className="text-white pb-6">
      <h3 className="text-4xl pb-4 font-bold ">Get in touch</h3>
        <p className="font-semibold text-sm pb-2">
         Feel free to send me an email, whether you have a project idea,<br/> a 
         job opportunity or you just want to chat.
        </p>
        <div className='sm:flex justify-center hidden gap-6 pt-4 text-white pb-3'>
          <a href="https://github.com/Nkwor-Jane" className=' hover:scale-125 hover:bg-[#2dba4e]'>
          <FaGithubSquare
          size={30}/>
          </a>
         <a href="https://www.linkedin.com/in/nkwor-jane/" className='hover:bg-[#0077B5] hover:scale-125'><FaLinkedin size={30}/></a>
          <a href="https://x.com/gifted_jane" className='hover:bg-blue-500 hover:scale-125'><FaTwitter size={30}/></a>
          
    </div>
      </div>
      {/* FORM */}
    <div className="  shadow-lg bg-slate-500/30 p-4 w-full sm:w-1/2 mb-3">
      <form className=" max-w-md mx-auto ">
        <div className="relative z-0 mb-6 group">
          <input
            type="email"
            name="floating_email"
            className="block py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-white  duration-300  scale-75 top-3 -z-10 origin-[0] peer-focu:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Enter Your name</label>
        </div>
        <div className="relative z-0  mb-6 group">
          <input
            type="email"
            name="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Enter Your Email address</label>
        </div>
        <div className="relative z-0 mb-6 group">
          <textarea
            type="email"
            name="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Enter Your Message</label>
        </div>
        <button
          type="submit"
          className="border-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500  text-white font-bold py-2 px-8 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div> 
    
    </div>
    <div className='flex sm:hidden gap-6 pt-4 items-center justify-center text-white pb-3'>
    <a href="https://github.com/Nkwor-Jane" className=' hover:scale-125 hover:bg-[#2dba4e]'>
          <FaGithubSquare
          size={30}/>
          </a>
         <a href="https://www.linkedin.com/in/nkwor-jane/" className='hover:bg-[#0077B5] hover:scale-125'><FaLinkedin size={30}/></a>
          <a href="https://x.com/gifted_jane" className='hover:bg-blue-500 hover:scale-125'><FaTwitter size={30}/></a>
          
    </div>
    <hr/>
  </div>
  
  )
}

export default Contact