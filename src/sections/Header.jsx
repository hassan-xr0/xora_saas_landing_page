import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { useState, useEffect } from "react";
import clsx from "clsx";



const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [IsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll =()=>{
      setHasScrolled(window.scrollY>32)
    }

    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={()=>{setIsOpen(false)}}
      className="uppercase cursor-pointer text-p4 base-bold transition-colors duration-500 hover:text-p1 max-lg:h5 max-lg:my-4"
      activeClass="nav-active"    
      to={title}
      offset={-100}
      smooth
      spy
    >
      {title}
    
    </LinkScroll>
 
  );
  

  return (
    <header className={clsx("fixed top-0 left-0 w-full z-50 py-10 max-lg:py-4 transition-all duration-500", hasScrolled && 'py-2 bg-black-100 backdrop-blur-[8px]')}>
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            IsOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
           <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                 <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      alt="logo"
                      width={160}
                      height={55}
                      
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden top-1/2 block left-0 absolute w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                alt="outlines"
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outlines"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          className="lg:hidden flex border-s4/25 border-2 size-10 z-2 rounded-full justify-center items-center"
          onClick={() => {
            setIsOpen((prevstate) => !prevstate);
          }}
        >
          <img
            src={`/images/${IsOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
