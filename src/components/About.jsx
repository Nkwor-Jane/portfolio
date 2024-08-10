import jane from "../assets/jane.png"
const About = () => {
  return (
    <div className=" p-10  sm:flex items-center justify-evenly " id="about">
      <div className="w-[10rem] hidden sm:flex bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 animate-bounce rounded-full w-[200px]">
        <img src={jane} alt="Jane" className="rounded"/>
      </div>
      <div className="w-full sm:w-[500px] text-justify">
        <h3 className="text-4xl pb-4 font-bold text-white">About Me</h3>
          <p className="font-semibold text-xl text-white ">
          Frontend Developer with foundational skills in HTML/CSS, JavaScript and React. I am passionate about creating intuitive and responsive user interfaces. I am eager to continually learn and apply my skills in a professional setting and contribute to the development of the teams and organization. </p>
          <p className="font-semibold text-xl text-white"> If you have a good opportunity that matches my skills 
          and experience then don&apos;t hesitate to contact me.
          </p>
      </div>
      
    </div>
  )
}

export default About