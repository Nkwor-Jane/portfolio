const Projects = ({name, image, id}) => {
  return (
      <div>
          <img src={image} className='object-cover w-[20rem] h-[12rem] hover:border-2 hover:border-purple-600 rounded-xl hover:scale-100' alt={name} />
          {/* <p className='font-bold mt-2 mb-1'>{name}</p> */}
    </div>
  )
}

export default Projects