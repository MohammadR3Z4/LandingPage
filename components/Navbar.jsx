import React, { useState } from 'react'

import Menu from "../src/assets/images/menu.png"


function Navbar() {

  const [Isopen , setIsopen] = useState(false) ;
  const openHandeler = () => setIsopen(!Isopen) ;


    return (
      <nav className='flex justify-between py-4 px-3'>
        <div className='md:order-1 absolute right-2 md:static order-2'>
            <p className='xl:text-[27px] text-lg xl:font-semibold font-medium xl:leading-8'>Landingpage</p>
            <p className='xl:text-[27px] text-lg xl:font-semibold font-medium xl:leading-8'>Logotype</p>
        </div>
        <div className='flex md:flex-row flex-col xl:gap-8 gap-4 md:order-2 order-1'>
            <img className='w-8 h-8 mt-[14px] cursor-pointer md:hidden block' src={Menu} onClick={openHandeler} />
            <ul className={`md:flex ${Isopen ? "flex bg-slate-300 w-[90vw] me-2 md:w-auto p-2 mt-3" : "hidden"} md:flex-row md:bg-white flex-col xl:gap-6 gap-3 pt-5`}>
                <li><a className='xl:text-[21px] text-base xl:font-medium font-light xl:leading-[25px]' href="#"> Authors </a></li>
                <li><a className='xl:text-[21px] text-base xl:font-medium font-light xl:leading-[25px]' href="#"> For who </a></li>
                <li><a className='xl:text-[21px] text-base xl:font-medium font-light xl:leading-[25px]' href="#"> Check demo </a></li>
                <li><a className='xl:text-[21px] text-base xl:font-medium font-light xl:leading-[25px]' href="#"> Opinions </a></li>
                <button className={`md:block ${Isopen ? "flex bg-[#2203E4] border-white text-white" : "hidden"} md:w-auto w-28 xl:h-[45px] h-8 xl:px-4 px-2 md:text-[#2203E4] md:bg-white border md:border-[#2203E4] xl:text-[21px] text-base`}>Buy now!</button>
            </ul>

        </div>
      </nav>      
    )
}

export default Navbar
