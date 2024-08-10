import React from 'react'
import Projects from "./Projects"
import { projectsData } from '../assets/assets'
import arrow_left_icon from "../assets/arrow_left.svg"

const GetProjects = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 mx-3'>
          <div className="text-justify p-10">
            <h2 className='text-2xl'>My latest work</h2>
            </div>
        <div>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-3 xl:grid-cols-4 xxl:grid-cols-5 place-items-center hover:scale-105" >
            {projectsData.map((item, index) =>(<Projects key={index}
            name={item.name} id={item.id} image={item.image}/>))}
        </div>
        <div className='flex items-center justify-center m-2'>
            <button className='flex p-2 border-2 border-white items-center rounded-3xl text-white font-semibold justify-center m-3 cursor-pointer hover:scale-125'>
                <a href="https://github.com/Nkwor-Jane" target='blank' > Show more</a> <img src={arrow_left_icon} alt='left arrow' className='w-10 pl-2'/>
            </button>
        </div>
       
</div></div>
  )
}

export default GetProjects