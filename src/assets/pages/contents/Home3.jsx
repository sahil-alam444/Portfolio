import React, { useRef, useEffect, useState } from 'react';

const Home3 = () => {
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const textElement = textRef.current;

            if (textElement) {
                const textElementPosition = textElement.getBoundingClientRect().top;

                if (textElementPosition < window.innerHeight / 0.7) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id='h3' className='max-lg:block pl-36 w-full h-[40rem] my-28 relative'>
            <h3 ref={textRef} className={`text-8xl ease-out duration-[1.7s] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[3em] opacity-0'}`}>My Background</h3>

            <div className="max-w-4xl absolute right-0 my-20 mx-10">
                <h4 className='flex gap-4 text-3xl'>
                    <img ref={textRef} src="/right-arrow.png" className={`my-auto h-8 invert ease duration-[1.2s] delay-[0.5s] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[3em] opacity-0'}`} />
                    Education</h4>

                <ul className='pl-28 pr-[8vw] list-disc text-[#868686] text-2xl mt-5'>
                    <li className='mt-3'>Passed class 10 from Kendriya Vidyalaya Fort William(CBSE), 2020</li>
                    <li className='mt-3'>Passed class 12(Comp. Sc.) from Kendriya Vidyalaya Fort William(CBSE), 2022</li>
                    <li className='mt-3'>Persuing B.Tech(Comp. Sc. & Engg.) from Meghnad Saha Institute of Technology, 2026</li>
                </ul>

                <h4 className='flex gap-4 text-3xl mt-10'>
                    <img ref={textRef} src="/right-arrow.png" className={`my-auto h-8 invert ease duration-[1.2s] delay-[0.8s] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[3em] opacity-0'}`} />
                    Work Experience</h4>

                <ul className='px-28 list-disc text-[#868686] text-2xl mt-5'>
                    <li>Aspiring professional looking for my first opportunity...</li>
                </ul>
            </div>
        </div>
    )
}

export default Home3
