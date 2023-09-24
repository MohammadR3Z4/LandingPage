import React from 'react'

import Market from "../src/assets/images/market.png"
import Student from "../src/assets/images/student.png"
import Freelancer from "../src/assets/images/freelancer.png"
import Agency from "../src/assets/images/agency.png"



const Card = ({jobs , image}) => {
    return(
        <div className='flex justify-center items-center'>
            <img className='lg:w-[122px] lg:h-[125px] w-28 h-28' src={image} />
            <div className='text-white lg:ms-[34px] ms-6'>
                <p className='lg:text-[27px] lg:font-semibold lg:leading-8 text-2xl font-medium'>For {jobs} </p>
                <p className='lg:text-base lg:font-normal lg:leading-[19px] lg:mt-2 mt-1 text-sm'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <p className='lg:text-base lg:font-normal lg:leading-[19px] text-sm'>Velit officia consequat duis enim velit mollit.</p>
            </div>
        </div>
    )
}

function ForWhoSection() {
    return (
        <div className='bg-[#0062FF] lg:mt-[143px] lg:py-[71px] mt-20 py-8'>
            <div className='text-center text-white'>
                <p className='lg:text-[36px] lg:font-semibold lg:leading-[42px] text-3xl'>For who</p>
                <p className='lg:mt-4 mt-2 lg:text-base lg:font-normal lg:leading-[19px] text-sm'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <p className='lg:text-base lg:font-normal lg:leading-[19px] text-sm'>Velit officia consequat duis enim velit mollit.</p>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-[64px] gap-[48px] lg:px-[50px] px-8'>
                <Card image={Student} jobs="Student"/>
                <Card image={Freelancer} jobs="freelaners"/>
                <Card image={Agency} jobs="agency"/>
                <Card image={Market} jobs="marketers"/>
            </div>
            <div className='text-center mt-[64px]'>
                <button className='bg-white h-[39px] px-4 border border-[#2203E4] text-[#2203E4] text-base font-normal'>I want it!</button>
            </div>
        </div>
    )
}

export default ForWhoSection
