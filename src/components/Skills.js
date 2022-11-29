import React from 'react'
import Skill from './Skill'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col items-center self-center'>
      <p className='text-center text-lg text-zinc-500 uppercase my-5'>Skills, technologies and frameworks</p>
      <div className="max-w-[800px] grid grid-cols-4 justify-center gap-3">
        <Skill img='https://reactjs.org/logo-og.png' name='ReactJS' />
      </div>
    </div>
  )
}

export default Skills