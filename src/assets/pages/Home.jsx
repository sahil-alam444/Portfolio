import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

import Home1 from './contents/Home1'
import Home2 from './contents/Home2'
import Home3 from './contents/Home3'
import ProjectCard from './components/ProjectCard'
import LanguageCard from './components/LanguageCard'



const Home = () => {
    //animations
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const textElement = textRef.current;

            if (textElement) {
                const textElementPosition = textElement.getBoundingClientRect().top;

                if (textElementPosition < window.innerHeight / 1) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // reload on window resize
    // const [wind, setwind] = useState(window.innerWidth)
    // useEffect(() => {
    //     window.addEventListener("resize", (e) => {
    //         e.preventDefault();
    //         setwind(window.innerWidth);
    //         window, location.reload(true)
    //     });
    // }, [wind]);

    return (
        <main className='max-lg:max-w-[100vw] max-w-[90vw] m-auto'>
            <Home1 />
            <hr className='max-lg:w-10/12 m-auto' />
            <Home2 />
            <hr className='max-lg:w-10/12 m-auto' />
            <Home3 />
            <hr className='max-lg:w-10/12 m-auto' />

            <div id='lang' className="my-36 mx-auto max-w-[76vw]">
                <h3 ref={textRef} className={`text-8xl ease duration-[1.2s] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[3em] opacity-0'}`}>Languages Known</h3>

                <div className="bg-[#364b21] flex flex-wrap justify-center gap-x-24 gap-y-16 mt-24 mx-auto py-20 rounded-3xl outline outline-offset-4 outline-2 outline-amber-900">
                    <LanguageCard src='/languages/python.png' name='Python' />
                    <LanguageCard src='/languages/c.png' name='C' />
                    <LanguageCard src='/languages/java.png' name='Java' />
                    <LanguageCard src='/languages/mysql.png' name='MySQL' />
                    <LanguageCard src='/languages/mongodb.png' name='MongoDB' />
                    <LanguageCard src='/languages/jsp.png' name='JSP' />
                    <LanguageCard src='/languages/tailwindcss.png' name='Tailwind CSS' />
                    <LanguageCard src='/languages/react.png' name='React' />
                    <LanguageCard src='/languages/js.png' name='JavaScript' />
                    <LanguageCard src='/languages/css.png' name='CSS' />
                    <LanguageCard src='/languages/html.png' name='HTML' />
                </div>
            </div>

            <hr className='max-lg:w-10/12 m-auto' />

            {/* <div id='project' className="w-full my-20">
                <h3 className='text-8xl pl-36'>My Projects</h3>

                <div className="flex flex-wrap gap-10 justify-between mt-28 px-[10vw]">
                    <ProjectCard src='' title='' desc='' />
                    <ProjectCard src='' title='' desc='' />
                    <ProjectCard src='' title='' desc='' />
                </div>

                <div className='text-right mr-36 mt-8 underline'><NavLink to="/projects">Show more...</NavLink></div>
            </div> */}
        </main>
    )
}

export default Home
