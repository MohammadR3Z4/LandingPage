import React from 'react'

import Iphone from "../src/assets/images/iphone13.png"


function Header() {
    return (
        <header className='flex md:flex-row flex-col justify-center items-center lg:mt-[150px] mt-20'>
            <div className='lg:m-0 mx-4'>
                <p className='xl:text-[47px] lg:text-4xl lg:font-medium xl:leading-[54px] xl:font-bold text-2xl'>Write your Landing Title</p>
                <p className='lg:text-[16px] lg:leading-[19px] lg:font-normal text-sm mt-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <p className='lg:text-[16px] lg:leading-[19px] lg:font-normal text-sm mb-6'>Velit officia consequat duis enim velit mollit.</p> 
                <button className='lg:h-[39px] h-8 bg-[#0062FF] lg:px-4 px-2 text-white lg:text-base text-sm '>Authors</button>
                <button className='lg:h-[39px] h-8 lg:ms-6 ms-3 border border-[#575757] lg:px-4 px-2 lg:text-base text-sm text-[#575757]'>Check demo</button>
            </div>
            <img className='xl:w-[471px] xl:h-[462px] mt-20 md:mt-0 w-80 h-80 ms-[60px]' src={Iphone} alt="iphone" />
        </header>
    )
}

export default Header
