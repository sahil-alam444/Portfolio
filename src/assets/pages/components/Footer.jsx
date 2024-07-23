import React from 'react'

const SocialCard = (props) => {
    return (
        <div className='w-20'>
            <a href={props.link} target="_blank">
                <img src={props.src} onClick={props.click} className='max-lg:w-[11vw] w-20 mx-auto transition-all duration-200 hover:scale-110' />
            </a>
            <h5 className='text-xl text-center mt-5'>{props.name}</h5>
        </div>
    )
}


export const mail = (event) => {
    event.preventDefault();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('sa400919@gmail.com')}`, '_blank');
}

const Footer = () => {
    return (
        <footer id='foot' className='border-t-2 border-white'>
            <div className='m-auto max-w-[76vw] pt-28 pb-72'>
                <h3 className='text-8xl'>Reach Out to Me</h3>
                <div className='mt-28 flex justify-around flex-wrap gap-x-36 gap-y-16 w-4/5 mx-auto'>
                    <SocialCard src='/social/gmail.png' name='Gmail' click={mail} />
                    <SocialCard src='/social/facebook.png' name='Facebook' link='https://www.facebook.com/sahil.alam.14289210' />
                    <SocialCard src='/social/instagram.png' name='Instagram' link='https://www.instagram.com/ig_rivage' />
                    <SocialCard src='/social/linkedin.png' name='LinkedIn' link='https://www.linkedin.com/in/sahil-alam444' />
                    <SocialCard src='/social/github.png' name='Github' link='https://www.github.com/sahil-alam444' />
                </div>
            </div>
            <div className="text-center py-10 border-t-2 border-white">&copy;2024 ALL RIGHTS RESERVED | WEBSITE CREATED & MAINTAINED BY SAHIL ALAM</div>
        </footer>
    )
}

export default Footer
