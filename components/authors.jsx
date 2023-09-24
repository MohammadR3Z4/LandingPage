import React from 'react'

import Profilepic from "../src/assets/images/profilePic.png"
import instaLogo from "../src/assets/images/instaLogo.png"
import linkedinLogo from "../src/assets/images/linkedinLogo.png"
import facebookLogo from "../src/assets/images/facebookLogo.png"

const Person = ({personName , personJob , color}) => {
    return(
        <div className='mt-2'>
            <p className={`lg:text-[27px] lg:font-semibold lg:leading-8 text-lg ${color ? "text-[#DEA405]" : "text-black"} `}> {personName} </p>
            <p className={`lg:text-[21px] lg:font-medium lg:leading-[25px] text-base ${color ? "text-[#FFBE0B]" : "text-[#575757]"} `}> {personJob} </p>
        </div>
    )
}

function Authors() {
    return (
        <div className='lg:mt-[150px] mt-20 lg:ms-9 lg:me-4'>
            <div className='text-center'>
                <p className='lg:text-[36px] lg:font-semibold lg:leading-[43px] text-2xl'>Authors</p>
                <p className='mt-3 lg:text-[16px] lg:leading-[19px] lg:font-normal text-sm text-[#575757]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <p className='lg:text-[16px] lg:leading-[19px] lg:font-normal text-sm text-[#575757]'>Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div className='flex justify-center lg:flex-nowrap flex-wrap items-center mt-9'>

                <img className='w-[150px] h-[150px]' src={Profilepic} />
                <div className='lg:ms-[46px] ms-5 lg:mt-0 mt-5 text-center lg:text-left'>
                    <Person personName="Mark Headers" personJob="Graphic designer"/>
                    <p className='text-[#575757] lg:text-base lg:leading-[19px] lg:font-normal text-sm mt-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    <p className='text-[#575757] lg:text-base lg:leading-[19px] lg:font-normal text-sm'>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                    nostrud amet.</p>
                    <div className='flex lg:justify-start justify-center lg:gap-[19px] gap-9 mt-[25px]'>
                        <img className='w-[22px] h-[22px]' src={linkedinLogo} />
                        <img className='w-[22px] h-[22px]' src={instaLogo} />
                        <img className='w-[22px] h-[22px]' src={facebookLogo} />
                    </div>
                </div>

                <div className='md:flex hidden lg:flex-col justify-between lg:ms-20 lg:gap-0 gap-12 lg:mt-0 mt-6'>
                    <Person personName="Gregory Paragraph" personJob="Programmer" color={true} />
                    <Person personName="Mark Headers" personJob="Graphic designer" />
                    <Person personName="Henry Action" personJob="Analyst" color={true} />
                </div>
                
            </div>

        </div>
    )
}

export default Authors
