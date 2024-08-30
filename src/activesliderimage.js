import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
import { ServiceData } from './constants'

const ImageSlide = () => {
    return (
        <>
            <div className='flex justify-center items-center flex-col mt-4 mb-10'>
                <Swiper
                    breakpoints={{
                        40: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        },
                        30: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        },
                    }}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    modules={[FreeMode, Pagination]}
                    className='max-w-[100%] lg:max-w-[100%]:'
                >
                    {ServiceData.map((item) => (
                        <SwiperSlide key={item.title}>
                            <div className='flex flex-col gap-8 group relative shadow-lg rounded-xl m-10 h-[400px] w-[300px] '>
                                <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                                    <h1 className='text-white mt-[300px] ml-16 text-[30px] font-semibold'>{item.title}</h1>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='flex justify-center items-center mb-10'>
                <p className='bg-[#D70081] w-36 h-10 flex justify-center items-center text-white'>boek hier online</p>
            </div>
        </>
    )
}

export default ImageSlide