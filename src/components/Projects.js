import React from 'react'
import asset from '../assets/1.png'

const Projects = () => {
    const projects = [{
        img: asset,
        name: 'E-commerce "Fashionista"',
        description: 'Here is a short description of my project. Here is a short description of my project. Here is a short description of my project. Here is a short description of my project.Here is a short description of my project. Here is a short description of my project.',
        link: '',
        repo: '',
    }, {
        img: asset,
        name: 'Streaming service "Explorations"',
        description: 'Here is a short description of my project. Here is a short description of my project. Here is a short description of my project. Here is a short description of my project.Here is a short description of my project. Here is a short description of my project.',
        link: '',
        repo: '',
    }, {
        img: asset,
        name: 'Bug tracker',
        description: 'Here is a short description of my project. Here is a short description of my project. Here is a short description of my project. Here is a short description of my project.Here is a short description of my project. Here is a short description of my project.',
        link: '',
        repo: '',
    }
]
  return (
    <div id='projects' className="w-screen h-screen overflow-y-hidden snap-start flex-shrink-0 relative">
        <div className='uppercase text-center text-xl font-semibold tracking-wider absolute top-32 w-full md:text-2xl text-zinc-500'>Projects</div>
        <div className='overflow-x-scroll flex items-center w-full snap-mandatory snap-x h-screen'>
            {projects.map(project => (
                <div key={project.name} className="w-screen snap-center flex flex-col items-center flex-shrink-0 z-20">
                    <div className="w-full h-full flex flex-col p-12 md:max-w-[1000px]">
                        <a href={project.link} target='_blank' className="cursor-pointer relative">
                            <img src={project.img} alt={project.name} className='w-full h-full' />
                            <div className="flex items-center justify-center w-full h-full absolute top-0 left-0 animate-pulse md:animate-none md:opacity-0 md:hover:opacity-100 bg-primary/30 text-2xl md:text-4xl md:font-semibold md:transform md:transition md:duration-300 text-gray-100">Open Website</div>
                        </a>
                        <p className='text-xl md:text-2xl font-bold text-center mt-4 mb-2 text-gray-100'>{project.name}</p>
                        <a href={project.repo} target='_blank' className='my-2 underline-offset-1 underline decoration-secondary text-secondary text-center cursor-pointer text-xl font-semibold'>Show Repository</a>
                        <p className='text-center md:text-left text-gray-200 mt-1'>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='absolute w-full top-[40%] left-0 h-1/3 z-0 bg-primary/30 -skew-y-12'></div>
    </div>

  )
}

export default Projects