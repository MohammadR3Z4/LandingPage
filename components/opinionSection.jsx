import React from 'react'

import MessageLogo from "../src/assets/images/messageVector.png"
import Star from "../src/assets/images/star.png"
import HalfStar from "../src/assets/images/halfStar.png"

const stars = [
    {id : 1 , src : Star},
    {id : 2 , src : Star},
    {id : 3 , src : Star},
    {id : 4 , src : Star},
    {id : 5 , src : HalfStar},
] ;

const Opinions = ({name , fname , w , flex}) => {
    return(
        <div className={`${w ? "lg:w-[350px] opacity-40 xl:flex hidden" : "lg:w-[700px] w-auto"}  flex justify-center items-center lg:h-[230px] h-48 bg-[#F3F3F3] rounded-xl lg:p-4 p-2 overflow-hidden`}>
            <div>
                <img className='lg:w-[47px] lg:h-[41px] w-9 h-9'  src={MessageLogo} />
            </div>
            <div className='ms-3'>
                <div className='flex'>
                    <p className='lg:text-[27px] lg:font-semibold lg:leading-8 lg:w-[168px] text-xl block'> {name} </p>
                    {stars.map((star) => (
                        <img className='lg:w-[26px] lg:h-[26px] lg:ms-[7px] w-4 h-4 ms-1 mt-1' src={star.src} />
                    ))}
                </div>

                <p className='lg:text-[21px] lg:font-medium lg:leading-[25px] text-base'> {fname} </p>

                <div className='xl:w-[611px] xl:h-[38px] w-auto'>
                    <p className='xl:text-base xl:font-normal xl:leading-[19px] text-sm mt-2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    <p className='xl:text-base xl:font-normal xl:leading-[19px] text-sm'>Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
        </div>
    )
}

function OpinionSection() {
    return (
        <div className='bg-[#FFBE0B] lg:py-[67px] py-12'>
            <div className='text-center'>
                <p className='lg:text-[36px] lg:leading-[43px] lg:font-semibold text-3xl'>Opinions</p>
                <p className='lg:mt-3 mt-2 lg:text-base lg:font-normal text-sm text-[#575757]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                <p className='lg:text-base lg:font-normal text-sm text-[#575757]'>Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div className='flex xl:justify-between justify-center overflow-hidden mt-[42px] lg:mx-0 mx-3'>
                <Opinions name="Jones David" fname="CEO Jones Inc" w={true} />
                <Opinions name="Jones David" fname="CEO Jones Inc" />
                <Opinions name="Jones David" fname="CEO Jones Inc" w={true}/>
            </div>
        </div>
    )
}

export default OpinionSection
