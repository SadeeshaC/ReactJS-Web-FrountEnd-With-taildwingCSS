import React from 'react'
import Box1Image from './images/box1.jpg'
import BoxSubImage1 from './images/boxsub1.jpg'

const Macupbox = () => {
    return (
        <>
            <div className='flex justify-center mb-52'>
                <div>
                    <img src={Box1Image} alt='#' className='w-[580px] h-[500px]' />
                </div>
                <div className='ml-[30px]'>
                    <p className='text-[35px]'>Make-up & Hairstylist</p>
                    <p className='w-[580px] h-[500px] text-[12px]'>Wij maken jouw look compleet met de geschikte make-up en kapsel! Ben jij meer<br /> de natuurlijk type of ga je liever voor die full glam look met falsies? Alles kan bij<br /> Beauty-Licious. test<br />
                        Wij blijven binnen jouw comfortzone, want enkel op die manier ga je écht <br />schitteren als nooit tevoren. Styling voor een avondje uit of voor een galabal of<br /> verkleedparty, wij passen je make-up en kapsel aan!<br />
                        Of je nu een opsteekkapsel verkiest of liever weelderige krullen, wij stylen het zoals<br /> jij het wenst!<br />
                        Om het plaatsje volledig af te maken, kan je ook je nagels helemaal partyproof<br /> maken!<br />
                        Wil jij je look op voorhand al bespreken en uitproberen?Geen probleem, dat kan<br /> tijdens een proefmoment voor je make-up en hairstyling</p>
                </div>
                <div>
                    <img src={BoxSubImage1} alt='#' className='w-[450px] h-[280px] absolute mt-[350px] ml-[-900px] border-white border-[10px]' />
                </div>
            </div>
        </>
    )
}

export default Macupbox