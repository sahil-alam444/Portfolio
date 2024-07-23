import React from 'react'

const LanguageCard = (props) => {
    return (
        <div id='langCard' className='text-center'>
            <div className='flex justify-center items-center h-40 w-64 m-auto'>
                <img src={props.src} className='w-36 mx-auto duration-200 hover:scale-110' />
            </div>
            <h5 className='rounded-full bg-[#3c5324] px-1 text-2xl mt-4 text-black font-semibold'>{props.name}</h5>
        </div>
    )
}

export default LanguageCard
