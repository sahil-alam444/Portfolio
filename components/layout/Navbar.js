import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className='flex justify-around items-center py-6 sticky top-0'>
            <span>SAHIL ALAM</span>
            <div className='flex items-center gap-16'>
                <ul className='flex items-center gap-8'>
                    <li><Link href='/'>HOME</Link></li>
                    <li><Link href='/about'>ABOUT ME</Link></li>
                    <li><Link href='/project'>PROJECTS</Link></li>
                    <li>CONTACT</li>
                </ul>
                <button className='bg-blue-500 py-3 px-5 rounded-4xl'>GET IN TOUCH</button>
            </div>
        </nav>
    )
}