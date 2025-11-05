"use client"
import Image from "next/image"
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Hero = () => {
    const r1 = useRef(null);
    useEffect(() => {
    const typed = new Typed(r1.current, {
      strings: ['JAVA DEVELOPER', 'FULL-STACK DEVELOPER', 'TECH ENTHUSIAST'],
      typeSpeed: 80,
    });
    }, []);

  return (
    <section className="flex gap-20 justify-around items-center border h-200">
        <div className="w-1/2 ">
            <h6>SAHIL ALAM</h6>
            <h1 className="text-6xl font-bold">HI, I'M SAHIL</h1>
            <h2>I'M A <span ref={r1}/></h2>
            <p className="mt-4 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quaerat, sit nulla, repellendus repudiandae eius possimus vitae commodi corrupti recusandae, similique eligendi beatae libero maxime alias. Quam quod atque voluptatibus.</p>
        </div>
        <div className="relative h-2/3 rotate-y-180 w-1/2">
            <Image 
                src="/images/Hero.jpg" 
                alt="Sahil Alam" 
                fill='true'
                className="object-cover"
            />
        </div>
    </section>
  )
}

export default Hero