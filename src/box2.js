import React from 'react'
import Box2Image from './images/box2.jpg'
import BoxSubImage2 from './images/boxsub2.jpg'
const BoxTwo = () => {
    return (
        <>
            <div className='flex justify-center mb-52'>
                <div className='ml-[30px]'>
                    <p className='text-[35px]'>Gelnagels in onze<br />nagelstudio</p>
                    <p className='w-[580px] h-[500px] text-[12px]'>Laserontharing of definitieve ontharing genaamd. Ben je op zoek naar een locatie<br /> voor je laserontharing? Dan ben je bij ons aan het juiste adres. Wij gebruiken de<br /> nieuwste en efficiënste laser, zodat we jou kunnen verzekeren van de beste<br /> ontharing.</p>
                </div>
                <div>
                    <img src={Box2Image} alt='#' className='w-[580px] h-[500px]' />
                </div>
                <div>
                    <img src={BoxSubImage2} alt='#' className='w-[450px] h-[280px] absolute mt-[350px] ml-[-900px] border-white border-[10px]' />
                </div>
            </div>
        </>
    )
}

export default BoxTwo