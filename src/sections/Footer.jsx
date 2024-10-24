import React from 'react'
import { socials } from '../constants'

const Footer = () => {
  return (
    <footer>
        <div className="container py-10">
            <div className="flex w-full max-md:flex-col">
                <div className='small-compact gap-5 flex flex-1 justify-center flex-wrap items-center'>
                    <p className='opacity-70'>Copyright, Hassan Jamil</p>
                    <div className='flex justify-center items-center sm:ml-auto'>
                        <p className='legal-after relative mr-9 cursor-pointer  text-p5 transition-all duration-500 hover:text-p1'>Privacy Policy</p>
                        <p className=' cursor-pointer text-p5 transition-all duration-500 hover:text-p1'>Terms of Use</p>
                    </div>
                </div>
                <ul className='flex flex-1 justify-center gap-5 max-md:mt-10 md:justify-end'>
                    {socials.map(({id, url, icon, title})=>(
                        <li>
                            <a href={url} className='social-icon'>
                                <img src={icon} alt={title} className='size-1/3 object-contain' />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer