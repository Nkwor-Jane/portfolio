const Projects = ({name, image, id, link}) => {
  return (
      <div>
        <a href={link} target="blank">
        <img src={image} className='object-cover w-[20rem] h-[12rem] rounded-xl hover:scale-125 hover:m-4 hover:border-4 hover:border-purple-600' alt={name} />
        </a>
          
    </div>
  )
}

export default Projects