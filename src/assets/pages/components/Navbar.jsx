import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    //burger menu
    const [isClicked, setisClicked] = useState(false);

    const toggle = () => {
        if (window.innerWidth < 1024) {
            const main = document.body.childNodes[1].childNodes[0].childNodes[3]
            const foot = document.body.childNodes[1].childNodes[0].childNodes[4]

            setisClicked(!isClicked)
            if (!isClicked) {
                main.classList.add('menu-open');
                foot.classList.add('menu-open');
            }
            else {
                main.classList.remove('menu-open');
                foot.classList.remove('menu-open');
            }
        }
    }
    document.body.style.overflow = isClicked ? 'hidden' : 'scroll';

    // scroll to contact
    const contact = (e) => {
        const px = document.body.childNodes[1].childNodes[0].childNodes[4].getBoundingClientRect().top;
        window.scrollTo({
            top: window.scrollY + px,
            behavior: 'smooth'
        });
        toggle();
    };

    return (
        <>
            <div onClick={toggle} className={`z-40 h-14 w-14 fixed right-0 flex-col justify-between py-4 px-3 close ${window.innerWidth < 1024 ? 'flex' : 'hidden'}`}>
                <div id="bar bar1" className={`h-[2px] w-full bg-white ease-in-out duration-[450ms] ${isClicked ? '-rotate-45 translate-y-[11px]' : ''}`}></div>
                <div id="bar bar2" className={`h-[2px] bg-white ease-in-out duration-[450ms] ${isClicked ? 'w-0' : 'w-full'}`}></div>
                <div id="bar bar3" className={`h-[2px] w-full bg-white ease-in-out duration-[450ms] ${isClicked ? 'rotate-45 -translate-y-[11px]' : ''}`}></div>
            </div>
            <div className={`z-30 h-14 w-full fixed bg-black border-b border-b-white ${window.innerWidth < 1024 ? 'block' : 'hidden'}`}></div>
            <nav id='nav' className={` bg-black z-20 border-b-2 border-white sticky top-0 ease-linear duration-[450ms] ${window.innerWidth < 1024 ? isClicked ? 'right-0' : '-right-[100vw]' : ''}`}>
                <ul className='m-auto max-w-[80%] text-xl flex items-center h-20 justify-around'>
                    <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); toggle(); }} className={`transition-all duration-150 hover:scale-110`}><NavLink to="/" className='py-2 px-5'>Home</NavLink></li>
                    <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); toggle(); }} className={`transition-all duration-150 hover:scale-110`}><NavLink to="/projects" className='py-2 px-5'>Projects</NavLink></li>
                    <li onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); toggle(); }} className='transition-all duration-150 hover:scale-110'><NavLink to='/gallery' className='py-2 px-5'>Gallery</NavLink></li>
                    <li onClick={contact} className='transition-all duration-150 hover:scale-110'><a className='py-2 px-5 cursor-pointer'>Contact Us</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
