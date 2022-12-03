import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Socials } from './Socials';

const Contacts = () => {
    const form = useRef()
    const defaultValue = {   
        email: '',
        name: '',
        subject: '',
        message: ''
    }
    
    const [input, setInput] = useState(defaultValue)

    const handleChange = (e) => {
        const { value, name } = e.target
        setInput({...input, [name]: value})
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2fwrljj', 'template_lz3k2gz', form.current, 'Owr5ucjmYKh9hfm47')
            .then((result) => {
                console.log(result.text);
                setInput(defaultValue)
            }, (error) => {
                console.log(error.text);
            }
        );
    };

  return (
    <div id='contacts' className='relative flex flex-col flex-shrink-0 items-center justify-center w-11/12 md:w-[500px] self-center snap-start h-screen gap-4'>
        <p className="uppercase absolute top-32 text-center text-xl font-semibold tracking-wider md:text-2xl text-zinc-500">Contact Me</p>
        <div className="flex uppercase absolute top-44 text-center text-lg font-semibold tracking-wider md:text-xl text-gray-200">
            <p>I might be&nbsp;</p>
            <p className='underline underline-offset-4 decoration-gray-200 hover:text-primary hover:no-underline cursor-default'> the One </p>
        </div>
        <p className='uppercase text-lg font-semibold tracking-wider md:text-xl text-gray-200'>Send me an email...</p>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center text-zinc-400 w-full'>
            <label htmlFor="email" className='pl-3 text-lg'>Email</label>
            <input required type="email" name='email' value={input.email} onChange={handleChange} className='mb-2 mt-1 text-secondary h-8 pl-2' />
            <label htmlFor="name" className='pl-3 text-lg'>Name</label>
            <input required type="text" name='name' value={input.name} onChange={handleChange} className='mb-2 mt-1 text-secondary h-8 pl-2' />
            <label htmlFor="subject" className='pl-3 text-lg'>Subject</label>
            <input required type="text" name='subject' value={input.subject} onChange={handleChange} className='mb-2 mt-1 text-secondary h-8 pl-2' />
            <label htmlFor="message" name='message' className='pl-3 text-lg'>Message</label>
            <textarea required name='message' value={input.message} onChange={handleChange} className='mb-2 mt-1 text-secondary h-20 pl-2' />
            <input type="submit" value="SEND" className='rounded-sm cursor-pointer border border-primary mt-4 py-2 font-bold text-xl bg-primary text-secondary hover:bg-secondary hover:text-primary' />
        </form>
        <div className="absolute bottom-20 md:bottom-28 flex flex-col items-center">
            <p className='uppercase text-lg font-semibold tracking-wider md:text-xl text-gray-200'>... Or reach out on</p>
            <Socials />
        </div>
    </div>
  )
}

export default Contacts