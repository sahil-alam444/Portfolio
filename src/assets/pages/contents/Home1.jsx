import React, { useEffect, useState } from 'react';

const Home1 = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(!animate);
  }, []);

  return (
    <div id='h1' className='max-lg:block flex my-48'>
      <div className="w-1/2 flex flex-col gap-[10vw] pl-28 pt-19">
        <h2 className={`text-8xl ease-out duration-[1.5s] ${animate ? 'translate-y-0 opacity-100' : '-translate-y-[2em] opacity-0'}`}>Welcome to My Portfolio</h2>

        <span className={`ml-5 block text-[1.6vw] border border-white rounded-full px-[2vw] py-2 text-center w-fit ease-out duration-[0.8s] delay-[0.7s] ${animate ? 'translate-y-0 opacity-100' : '-translate-y-[4em] opacity-0'}`}>
          <p className={`ease-out duration-[1s] delay-[1s] ${animate ? 'translate-y-0 opacity-100' : '-translate-y-[2.5em] opacity-0'}`}>Sahil Alam / Software Developer</p>
        </span>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className={`h-[38rem] w-[22rem] rounded-[50%] rotate-[20deg] overflow-hidden ease-out duration-[1.2s] ${animate ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>

          <img src="/mypic.jpeg" className='rotate-[-20deg] h-[60%] scale-[4] mt-[20rem] ml-[6.5rem]' />
        </div>

        <span className='flex gap-4 place-self-end mr-24'>
          <img src="/right-arrow.png" className={`my-auto invert h-8 ease-out duration-[0.8s] delay-[1.3s] ${animate ? 'translate-x-0 opacity-100' : '-translate-x-[4em] opacity-0'}`} />

          <a href="" className={`text-2xl  hover:scale-110 hover:delay-0 hover:duration-200  ${animate ? 'translate-x-0 ease-out duration-[1s] delay-[0.8s] opacity-100' : '-translate-x-[40%] opacity-0'}`}>Work with me today</a>
        </span>
      </div>
    </div>
  );
};

export default Home1;
