import React, { useRef, useEffect, useState } from 'react';

const Home2 = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleText, setIsVisibleText] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const textElement = textRef.current;
      const imageElement = imageRef.current;

      if (textElement && imageElement) {
        const textElementPosition = textElement.getBoundingClientRect().top;
        const imageElementPosition = imageElement.getBoundingClientRect().top;

        if (textElementPosition < window.innerHeight / 1) {
          setIsVisibleText(true);
        }

        if (imageElementPosition < window.innerHeight / 1.2) {
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
    <div id='h2' className='max-lg:block flex my-36'>
      <div className="w-1/2 pl-28">
        <h3 ref={imageRef} className={`text-8xl ease-out duration-[1.2s] ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[1.5em] opacity-0'}`}>Who is Sahil?</h3>

        <p ref={textRef} className={`text-2xl mt-[10vw] mr-[4vw] ease-out duration-[1.3s] ${isVisibleText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[5em]'}`}>Hello! I'm a Computer Science Engineering student passionate about coding, web development, and AI. Let's connect and innovate!</p>

        <hr ref={textRef} className={`w-3/12 mt-11 ease-out duration-[0.7s] delay-[0.6s] ${isVisibleText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[3em]'}`} />

      </div>

      <div className="w-1/2 relative">
        <div ref={imageRef} className={`ml-[10vw] h-[34rem] w-96 rounded-[50%] overflow-hidden ease-out duration-[1.2s] ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <img src="/coding.jpg" className='scale-[2.4] mt-40 -ml-28' alt="Coding" />
        </div>
      </div>
    </div>
  );
};

export default Home2;
