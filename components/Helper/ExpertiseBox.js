import React from 'react'
import Lottie from 'react-lottie-player'

const ExpertiseBox = ({ heading, para, json }) => {
  return (
    <div className='flex h-[100%] cursor-pointer transition duration-700 ease-in-out transform hover:scale-105 border-[#eff0f6] border flex-col items-center xl:min-w-[300px] shadow-md md:p-10 rounded-[38px]'>
      <div className='sm:hidden'>
        <Lottie
          loop={true}
          autoPlay={true}
          animationData={json}
          play
          style={{ width: 250, height: 250 }}
        />
      </div>

      <div className='sm:block hidden'>
        <Lottie
          loop={true}
          autoPlay={true}
          animationData={json}
          play
          style={{ width: 300, height: 300 }}
        />
      </div>

      <div className='flex flex-col leading-tight mt-6 mb-4 items-center max-w-[215px]'>
        <h1 className='text-[26px] text-center font-extrabold text-[#14142b]'>{heading}</h1>
      </div>
      <div className='text-center'>
        <span className='text-[#6e7191] text-[18px] text-center'>{para}</span>
      </div>

      <div className='my-5 relative cursor-pointer transition duration-300 ease-in-out z-10 hover:shadow-lg hover:shadow-[#ff395161] hover:bg-opacity-38 hover:translate-y-[-6px] translate-z-[0.01px] overflow-hidden text-white bg-[#6F3081] py-7 px-14 flex items-center rounded-full font-bold'>
        <span className='z-10'> Bekik Service

        </span>
        <div className='absolute rounded-full opacity-20 left-[-42px] top-[-128%] bg-[#fcd0e6] z-0 w-40 h-40 ' />
        <div className='absolute rounded-full opacity-20 right-0 bg-[#fcd0e6] z-0 w-10 h-10 ' />
      </div>
    </div>
  )
}

export default ExpertiseBox
