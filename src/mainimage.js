import React from 'react'
import slide from './images/slideImage.jpg'
const SlideImage = () => {
    return (
        <div>
            <div className='w-[446px] h-[508px] bg-[#0000001A] mt-[0px] absolute ml-40'>
                <p className='text-[40px] mt-14 ml-14'>Beauty Bar</p>
                <p className='mt-14 ml-14'><span className='text-[#D70081]'>Sinds April 2019</span> kan je in ons Beauty Bar terecht<br/> 
                voor al onze diensten.Laat je volledig<br/> onderdompelen in het Beauty-Licious gebeuren en<br/> 
                wandel buiten als een herboren persoon!</p>
                <p className='mt-8 ml-14'>Kijk snel verder om onze diensten te ontdekken!</p>
                <p className='mt-10 ml-14 bg-[#D70081] w-36 h-10 flex justify-center items-center text-white'>boek hier online</p>
            </div>
            <img src={slide} alt='#' className='w-full h-[600px]' />
        </div>
    )
}

export default SlideImage