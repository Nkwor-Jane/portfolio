import jane from "../assets/jane.png"
const About = () => {
  return (
    <div className=" p-10  flex items-center justify-between">
      <div className="w-[10rem]">
        <img src={jane} alt="Jane" className="rounded"/>
      </div>
      <div className="w-1/2">
        <h3 className="text-2xl ">About Me</h3>
          <p className="font-semibold text-xl ">
          Frontend Developer with foundational skills in HTML/CSS, JavaScript and React. I am passionate about creating intuitive and responsive user interfaces. I am eager to continually learn and apply my skills in a professional setting and contribute to the development of the teams and organization. </p>
          <p className="font-semibold text-xl "> If you have a good opportunity that matches my skills 
          and experience then don&apos;t hesitate to contact me.
          </p>
      </div>
      
    </div>
  )
}

export default About