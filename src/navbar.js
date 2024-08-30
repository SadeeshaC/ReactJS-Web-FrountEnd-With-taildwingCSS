import React from 'react';
import logo from './images/logo.png';
function Navigator() {
  return (
    <div>
        <div className='h-20 w-full bg-white flex justify-between items-center shadow-lg'>
            <img src={logo} alt='#' width={180} className='ml-52'/>
            <ul className='text-[15px] gap-x-14 font-semibold flex mr-52 items-center'>
                <li className='text-[#D70081]'>Home</li>
                <li className='text-[#00000099]'>About Us</li>
                <li className='text-[#00000099]'>Services</li>
                <li className='bg-[#D70081] w-32 h-10 text-white flex justify-center items-center'>Contact us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navigator