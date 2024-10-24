import React from 'react'
import { Element } from 'react-scroll'
import { links, logos } from '../constants'
import Marker from '../components/Marker'

const Downloads = () => {
  return (
    <section>
        <Element name='download' className='g7 relative pb-32 pt-24 max-lg:pb-24 max-lg:py-16'>
            <div className="container">
                <div className="flex items-center">
                    <div className="relative mr-8 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
                        
                        <div className="mb-10">
                            <img src="/images/xora.svg" alt=""  width={160} height={55}/>
                        </div>
                        
                        <p className='body-1 max-w-md mb-10'>Try it now for free on iOS, Android, PC, Web - whatever yor flavour, we've got you covered</p>
                        
                        <ul className="flex flex-wrap items-center gap-6">
                            {links.map(({id, url, icon})=> (
                                <li key={id} className='download_tech-link download_tech-link_last-before download_tech-link_last-after'>
                                    <a href={url} className='size-22 download_tech-icon_before relative flex justify-center items-center rounded-half border-s3 border-2 bg-s1 transition-borderColor duration-500' >
                                        
                                        <span className='absolute rotate-90 -top-2'>
                                            <Marker/>
                                        </span>
                                        
                                        <img src="/images/lines.svg" alt="lines"  className='absolute size-13/20 object-contain'/>

                                        <span className='download_tech-icon'>{icon}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className="mb-10 max-md:hidden">
                        <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                            <div className='relative rounded-3xl bg-s1 px-6 pb-6 pt-14'>
                                <span className="download_preview-dot left-6 bg-p2"></span>
                                <span className="download_preview-dot left-11 bg-s3"></span>
                                <span className="download_preview-dot left-16 bg-p1/15"></span>

                                <img src="/images/screen.jpg" alt="screen" width={855} height={655} className='rounded-xl'/>                                
                            </div>
                        </div>
                    </div>
                </div>
                <ul className='flex justify-center mt-22 max-lg:hidden'>
                    {logos.map(({id, url, height, width, title})=>(
                        <li key={id} className='mx-10'>
                            <img src={url} height={height} width={width} alt={title} />
                        </li>
                    ))}
                </ul>
            </div>
        </Element>
    </section>
  )
}

export default Downloads