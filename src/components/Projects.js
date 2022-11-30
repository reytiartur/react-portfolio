import React from 'react'

const Projects = () => {
    const projects = [{
        img: '',
        name: 'E-commerce "Fashionista"',
        description: 'Here is a short description of my project.'
    }]
  return (
    <div className="w-screen h-screen overflow-y-hidden snap-start flex-shrink-0 pt-16 relative">
        <div className='uppercase text-center text-xl font-semibold tracking-wider md:text-2xl text-zinc-500'>Projects</div>
        <div className='overflow-x-scroll flex items-center justify-center w-full snap-mandatory snap-x h-screen'>
            {projects.map(project => (
                <div key={project.name} className="w-screen snap-center flex flex-col flex-shrink-0 p-16 md:p-36 max-w-4xl z-20">
                    <img src={project.img} alt={project.name} className='p-10' />
                    <p className='text-xl md:text-2xl font-bold text-center my-2 text-gray-100'>{project.name}</p>
                    <p className='text-center md:text-left text-gray-200'>{project.description}</p>
                </div>
            ))}
        </div>
        <div className='absolute w-full top-[40%] left-0 h-1/3 z-0 bg-primary/30 -skew-y-12'></div>
    </div>

  )
}

export default Projects