import React from 'react'

import Playlogo from "../src/assets/images/playLogo.png"
import Image from "../src/assets/images/image1.png"

const Category = ({subject}) => {
    return(
        <div className='text-center'>
            <p className='lg:text-[21px] lg:font-medium lg:leading-[25px] text-lg'> {subject} </p>
            <p className='lg:mt-3 mt-2 lg:text-base lg:font-normal text-sm text-[#575757]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            <p className='lg:text-base lg:font-normal text-sm text-[#575757]'>Velit officia consequat duis enim velit mollit.</p>
        </div>
    )
}

function Demo() {
    return (
        <div className='lg:pt-[63px] pt-12 lg:pb-[130px] pb-16 mx-5 lg:mx-0'>
            <div className='text-center'>
                <p className='lg:text-[36px] lg:leading-[43px] lg:font-semibold text-3xl'>Check demo</p>
                <p className='lg:mt-3 mt-2 lg:text-base lg:font-normal text-sm text-[#575757]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <p className='lg:text-base lg:font-normal text-sm text-[#575757]'>Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div className='flex lg:flex-row flex-col justify-around items-center mt-[44px]'>
                <div className='flex md:flex-nowrap flex-wrap md:text-left justify-center lg:flex-col gap-6'>
                    <Category subject="Watch video" />
                    <Category subject="Configure sandbox" />
                    <Category subject="Read documentation" />
                </div>
                <div className='relative mt-8 lg:mt-0'>
                    <img className='lg:w-[444px] lg:h-[296px] w-[400px] h-[250px]' src={Image} />
                    <img className='w-[50px] h-[57px] absolute top-[45%] left-[45%] cursor-pointer' src={Playlogo} />
                </div>
            </div>
        </div>
    )
}

export default Demo
