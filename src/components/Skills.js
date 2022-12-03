import React from 'react'
import Skill from './Skill'
import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import js from '../assets/js.jpg'

const Skills = () => {
  return (
    <div id='skills' className='relative flex flex-col flex-shrink-0 items-center justify-center self-center snap-start h-screen'>
      <p className='text-center text-2xl text-zinc-500 uppercase absolute top-32 my-5'>Skills, technologies and frameworks</p>
      <div className="max-w-[800px] grid grid-cols-4 text-center justify-center gap-3">
        <Skill img='https://reactjs.org/logo-og.png' name='ReactJS' />
        <Skill img={html} name='HTML' />
        <Skill img={js} name='JavaScript' />
        <Skill img={css} name='CSS' />
        <Skill img='https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png' name='SASS' />
        <Skill img='https://i.ytimg.com/vi/Y8fufuQOIgY/maxresdefault.jpg' name='Tailwind CSS' />
        <Skill img='https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png' name='Firebase' />
        <Skill img='https://play-lh.googleusercontent.com/2PS6w7uBztfuMys5fgodNkTwTOE6bLVB2cJYbu5GHlARAK36FzO5bUfMDP9cEJk__cE' name='Stripe' />
      </div>
    </div>
  )
}

export default Skills