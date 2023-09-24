import React from 'react'
import "../components/footer.css"

import Iphone from "../src/assets/images/iphone13.png"
import Star from "../src/assets/images/star.png"
import HalfStar from "../src/assets/images/halfStar.png"

const stars = [
    {id : 1 , src : Star},
    {id : 2 , src : Star},
    {id : 3 , src : Star},
    {id : 4 , src : Star},
    {id : 5 , src : HalfStar},
] ;

function Footer() {
    return (
        <div className='lg:py-[90px] py-12'>
            <div className='text-center'>
                <p className='lg:text-[36px] lg:leading-[43px] lg:font-semibold text-2xl'>Start with us!</p>
                <p className='lg:mt-3 lg:text-base lg:font-normal text-sm mt-2 text-[#575757]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <p className='lg:text-base lg:font-normal text-sm text-[#575757]'>Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div className='flex lg:flex-row flex-col lg:flex-nowrap flex-wrap items-center justify-center mt-[74px]'>
                <div className='order-2 lg:order-1'>
                    <img className='lg:w-[327px] lg:h-[321px] w-64 h-60 lg:mt-0 mt-8    ' src={Iphone} />
                </div>
                <div className='order-1 lg:order-2 ms-6'>
                    <div className='flex'>
                        {stars.map( (star) => (
                            <img className='lg:w-[26px] lg:h-[26px] w-4 h-4' src={star.src} />
                        ))}
                        <p className='lg:text-base lg:font-normal text-sm'> 203 reviews </p>
                    </div>
                    <p className='lg:font-semibold lg:text-[36px] lg:leading-[43px] text-[#2203E4] lg:mt-4 mt-2 text-2xl'> My product title </p>
                    <p className='lg:mt-4 lg:text-base lg:font-normal mt-2 text-sm text-[#575757]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    <button className='lg:h-[39px] h-8  text-center text-white bg-[#0062FF] lg:px-4 px-2 lg:mt-[16px] mt-2'> Add to cart </button>
                </div>
            </div>

            
            <div className='flex justify-center items-center flex-col mt-8'>
                <p className='lg:text-[27px] lg:font-semibold lg:leading-[32px] text-lg'> Waiting for discount? </p>
                <input className='bg-[#3A86FF33] lg:w-[508px] lg:h-[70px] lg:mt-[28px] lg:text-lg text-sm lg:px-6 w-96 h-14 mt-4 px-3 text-[#2203E4]' type="text" placeholder='Type your email' />
                <button className='lg:w-[508px] lg:h-[39px] w-96 h-7 bg-[#0062FF] mt-[14px] text-white lg:text-base text-sm'> I’m waiting for discount </button>
            </div> 
        </div>
    )
}

export default Footer
